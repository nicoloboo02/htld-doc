import { promises as fs } from 'fs'
import axios from 'axios'
// import dotenv from 'dotenv'

// dotenv.config()

// const ACCESS_TOKEN = process.env.ACCESS_TOKEN

const {
    ACCESS_TOKEN
  } = process.env


async function getPRs(owner, repo, accessToken) {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/pulls?state=all`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    const pulls = await response.data;
    let comments = 0;
    for (let pull of pulls){
        let commentsURL = pull.comments_url;
        if (commentsURL){
            const response = await axios.get(commentsURL, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            comments += response.data.length;
        }
    }
    return {pulls: pulls.length, prComments: comments};
}


async function getIssuesInfo(owner, repo, accessToken) {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/issues?state=all`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    const issues = await response.data[0].number;
    let comments = 0;
    for (let i = 1; i <= issues; i++){
        try{
            const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/issues/${i}/comments`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            comments += response.data.length;
        } catch (error){
            continue
        }
    }
    return {issues: issues, issueComments: comments};
}

async function getReleases(owner, repo, accessToken) {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/releases`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    const releases = await response.data;
    return releases.length;
}

async function getRanking(owner, repo, accessToken,date, branch) {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits?since=${date}&sha=${branch}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    const commits = await response.data;
    let ranking = {};
    for (let commit of commits){
        let author = commit.author.login;
        if (author in ranking){
            ranking[author] += 1;
        } else {
            ranking[author] = 1;
        }
    }
    return ranking;
}

async function getDocStats(accessToken,date) {
    const response = await axios.get(`https://api.github.com/repos/ISPP-07/htld-doc/commits?since=${date}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    const commits = await response.data;
    const firstCommit = commits[commits.length - 1].sha;
    const lastCommit = commits[0].sha;
    const response2 = await axios.get(`https://api.github.com/repos/ISPP-07/htld-doc/compare/${firstCommit}...${lastCommit}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    const changes = await response2.data.files;
    let stats = {};
    for (let change of changes){
        stats[change.filename] = { changes: change.changes, status: change.status };
    }
    return stats;
}

async function getStatsForOrganization(organization, accessToken) {
    const response = await axios.get(`https://api.github.com/orgs/${organization}/repos`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    const repos = await response.data;

    const stats = [];

    const date = new Date();
    date.setDate(date.getDate() - 6);

    for (const repo of repos) {
        const {pulls, prComments} = await getPRs(organization, repo.name, accessToken);
        const {issues, issueComments} = await getIssuesInfo(organization, repo.name, accessToken);
        const releases = await getReleases(organization, repo.name, accessToken);
        const avgPRComments = pulls !== 0 ? (prComments / pulls).toFixed(2) : 0;
        const realIssues = issues - pulls;
        const realIssueComments = issueComments - prComments;
        const avgIssueComments = issues !== 0 ? (realIssueComments / realIssues).toFixed(2) : 0;

        let commitRanking;
        if(repo.name === 'htld-doc'){
            commitRanking = await getRanking(organization, repo.name, accessToken, date, "main");
        }else{
            commitRanking = await getRanking(organization, repo.name, accessToken, date,"develop");
        }

        stats.push({
            repo: repo.name,
            pulls,
            prComments,
            avgPRComments,
            issueComments: realIssueComments,
            issues: realIssues,
            avgIssueComments,
            releases,
            commitRanking
        });
    }
    const docStats = await getDocStats(accessToken, date.toISOString());

    return { stats, docStats };
}

const organization = 'ISPP-07';
const accessToken = ACCESS_TOKEN;
try{
    const {stats, docStats} = await getStatsForOrganization(organization, accessToken);
    const date = new Date();

    const formattedDate = date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });


    let statsMDX = '';
    try{
        statsMDX = await fs.readFile('./docs/Seguimiento del equipo/Estadísticas de github.mdx','utf-8');
        statsMDX = statsMDX.replace('<h4 align="center">Esta sección ha sido autogenerada mediante github actions, hecho por Álvaro Bernal Caunedo</h4>', '');
        statsMDX += `\n### Estadísticas de la semana del ${formattedDate}\n| Repositorio | Nº de PRs |Comentarios en PRs | Nº de comentarios por PR | Nº de Issues | Comentarios en Issues |Nº de comentarios por Issue |Nº de lanzamientos|\n| ----------- |----------- |----------- |----------- |--------------- | ------------------ | --------------------- | --------------- |\n`;
    }catch(err){
        statsMDX = `\n### Estadísticas de la semana del ${formattedDate}\n| Repositorio | Nº de PRs |Comentarios en PRs | Nº de comentarios por PR | Nº de Issues | Comentarios en Issues  |Nº de comentarios por Issue |Nº de lanzamientos|\n| ----------- |----------- |----------- |----------- |--------------- | ------------------ | --------------------- | --------------- |\n`;
    }

    stats.forEach(repoStats => {
        statsMDX += `| ${repoStats.repo} | ${repoStats.pulls} |${repoStats.prComments}| ${repoStats.avgPRComments}| ${repoStats.issues}| ${repoStats.issueComments}  |${repoStats.avgIssueComments} |${repoStats.releases} |\n`;
        console.log('Estadísticas incluidas en el archivo...');
    });

    stats.forEach(repoStats => {
        statsMDX += `\n\n#### Ranking de commits en el repositorio ${repoStats.repo} esta semana\n| Autor | Nº de commits |\n| ------ | -------------- |\n`;
        const ranking = Object.entries(repoStats.commitRanking).sort((a, b) => b[1] - a[1]);
        ranking.forEach(([author, commits]) => {
            statsMDX += `| ${author} | ${commits} |\n`;
        });
        console.log('Ranking de commits incluido en el archivo...');
    })

    statsMDX += `\n\n### Cambios en el docusaurus en la semana del ${formattedDate}\n| Archivo | Nº de Cambios | Estado |\n| ------ | -------------- | ------ |\n`;
    const changes = Object.entries(docStats);
    changes.forEach(([file, change]) => {
        statsMDX += `| ${file} | ${change.changes} | ${change.status} |\n`;
    });
    console.log('Cambios en la documentación incluidos en el archivo...');

    statsMDX += '\n<h4 align="center">Esta sección ha sido autogenerada mediante github actions, hecho por Álvaro Bernal Caunedo</h4>';
    await fs.writeFile('./docs/Seguimiento del equipo/Estadísticas de github.mdx', statsMDX, { flag: 'w' });
    console.log('Archivo de estadísticas actualizado correctamente.');
} catch (error) {
    console.error('Error al obtener las estadísticas:', error);
}
