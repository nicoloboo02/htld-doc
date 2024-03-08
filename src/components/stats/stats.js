import { promises as fs } from 'fs'
import axios from 'axios'

const {
    ACCESS_TOKEN
  } = process.env

// Función para obtener el número de comentarios en PRs
async function getPRComments(owner, repo, accessToken) {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/pulls/comments`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    const comments = await response.data;
    return comments.length;
}

// Función para obtener el número de comentarios en issues
async function getIssueComments(owner, repo, accessToken) {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/issues/comments`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    const comments = await response.data;
    return comments.length;
}

// Función para obtener el número de issues cerradas
async function getClosedIssues(owner, repo, accessToken) {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/issues?state=closed`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    const issues = await response.data;
    return issues.length;
}

// Función principal para obtener estadísticas de todos los repositorios de la organización
async function getStatsForOrganization(organization, accessToken) {
    const response = await axios.get(`https://api.github.com/orgs/${organization}/repos`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    const repos = await response.data;

    const stats = [];

    for (const repo of repos) {
        const prComments = await getPRComments(organization, repo.name, accessToken);
        const issueComments = await getIssueComments(organization, repo.name, accessToken);
        const closedIssues = await getClosedIssues(organization, repo.name, accessToken);

        stats.push({
            repo: repo.name,
            prComments,
            issueComments,
            closedIssues
        });
    }

    return stats;
}
    // Llamar a la función principal para obtener las estadísticas
const organization = 'ISPP-07';
const accessToken = ACCESS_TOKEN;
try{
    const stats = await getStatsForOrganization(organization, accessToken);
    const date = new Date();

    const formattedDate = date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
    
    let statsMDX = `### Estadísticas de la semana del ${formattedDate}\n| Repositorio | Comentarios en PRs | Comentarios en Issues | Issues Cerradas |\n| ----------- | ------------------ | --------------------- | --------------- |\n`;

    stats.forEach(repoStats => {
        statsMDX += `| ${repoStats.repo} | ${repoStats.prComments} | ${repoStats.issueComments} | ${repoStats.closedIssues} |\n`;
        console.log(`Estadísticas para el repositorio ${repoStats.repo} obtenidas correctamente.`);
        console.log(`Comentarios en PRs: ${repoStats.prComments}`);
        console.log(`Comentarios en Issues: ${repoStats.issueComments}`);
        console.log(`Issues Cerradas: ${repoStats.closedIssues}`);
    });
    await fs.writeFile('./docs/Seguimiento del equipo/Estadísticas de github.mdx', statsMDX, { flag: 'w' });
    console.log('Archivo de estadísticas actualizado correctamente.');
} catch (error) {
    console.error('Error al obtener las estadísticas:', error);
}
