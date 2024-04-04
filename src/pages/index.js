import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'
import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={clsx('container-image', styles.containerImage)}>
          <img
            src="/img/logo.png"
            alt="Harmony's logo"
            className={clsx('hero-image', styles.heroImage)}
          />
          <div>
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Inicio"
          >
            Acceso a la documentación
          </Link>
        </div>
      </div>
    </header>
  )
}

function ImportantDocument() {
  const documents = [
    {
      name: "Casos de uso",
      url: "docs/Introducci%C3%B3n/1.2.%20Casos%20de%20uso",
    },
    {
      name: "Acuerdo de compromiso",
      url: "docs/Acuerdos%20y%20contratos/2.1.%20Acuerdo%20de%20compromiso",
    },
    {
      name: "Coste total de la propiedad (TCO)",
      url: "docs/Planificaci%C3%B3n/3.8.%20TCO",
    },
    {
      name: "Gráficos burndown",
      url: "docs/Seguimiento/4.4.%20Burndown",
    },
    {
      name: "Medición del rendimiento",
      url: "docs/Rendimiento/5.2.%20Medici%C3%B3n%20del%20rendimiento",
    },
    {
      name: "Aportación a la BGCC",
      url: "docs/category/anexo-i-aportaci%C3%B3n-a-la-bgcc",
    },
  ]
  return (
    <div
      id="importantDocuments"
      className={clsx('important-documents', styles.importantDocuments)}
    >
      <div className="container">
        <h2>Entrega</h2>
        <div className={clsx('row', styles.row)}>
          {documents.map((document, index) => (
            <article className="col col--3 margin--lg" key={index}>
              <a
                href={document.url}
                className={clsx('card padding--lg cardContainer', styles.card)}
              >
                <h3 className="cardTitle">📄 {document.name}</h3>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

function Deployment() {
  const deployments = [
    {
      name: "Documentación como código",
      github: "https://github.com/ISPP-07/htld-doc",
      url_deploy: "https://htld-doc.vercel.app/",
    },
    {
      name: "Backend",
      github: "https://github.com/ISPP-07/backend",
      url_deploy: "https://isppbackend.duckdns.org/docs",
    },
    {
      name: "Frontend Cirio y Costal",
      github: "https://github.com/ISPP-07/frontend-cyc",
      url_deploy: "https://frontend-cyc-sprint2.vercel.app/",
    },
    {
      name: "Frontend ACAT",
      github: "https://github.com/ISPP-07/frontend-acat",
      url_deploy: "https://frontend-acat-sprint-2.vercel.app/",
    },
  ]
  return (
    <div id='deploy' className={clsx("deploy", styles.deploy)}>
      <div className='container'>
        <h2>Software</h2>
        <div className={clsx("row", styles.row)}>
          {deployments.map((deploy, index) => (
            <article className="col col--3 margin--lg" key={index}>
              <div className={clsx('card padding--lg cardContainer', styles)}>
                <h3 className="cardTitle"> {deploy.name}</h3>
                <div className="">
                  {deploy.github ? (
                    <a href={deploy.github} className={clsx("tag", styles.tag)}>
                      Repositorio
                    </a>
                  ) : null}
                  {deploy.url_deploy ? (
                    <a
                      href={deploy.url_deploy}
                      className={clsx('tag', styles.tag)}
                    >
                      Despliegue
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

function Team() {
  const teamMembers = [
    {
      name: 'Alejandro Medina',
      role: 'Analista/Gestión',
      team: 'Xtreme',
      photo: '/img/team/Alejandro_Medina.png',
    },
    {
      name: 'Álvaro Bernal',
      role: 'Analista/Gestión/QA',
      team: 'Xtreme',
      photo: '/img/team/Alvaro_Bernal.png',
    },
    {
      name: 'Álvaro González',
      role: 'Backend/Analista/QA',
      team: 'Xtreme',
      photo: '/img/team/Alvaro_Gonzalez.png',
    },
    {
      name: 'Gonzalo Campos',
      role: 'Backend/DevOps/Analista',
      team: 'Xtreme',
      photo: '/img/team/Gonzalo_Campos.png',
    },
    {
      name: 'Ronald Montoya',
      role: 'Frontend/Analista',
      team: 'Xtreme',
      photo: '/img/team/Ronald_Montoya.png',
    },
    {
      name: 'Alejandro Gallardo',
      role: 'Backend/Analista',
      team: 'España',
      photo: '/img/team/Alejandro_Gallardo.png',
    },
    {
      name: 'Antonio Rodríguez',
      role: 'Analista/Gestión/QA',
      team: 'España',
      photo: '/img/team/Antonio_Rodriguez.png',
    },
    {
      name: 'David Gavira',
      role: 'Backend/Analista',
      team: 'España',
      photo: '/img/team/David_Gavira.png',
    },
    {
      name: 'Francisco Benítez',
      role: 'Frontend/Analista/QA',
      team: 'España',
      photo: '/img/team/Francisco_Benitez.png',
    },
    {
      name: 'Javier García',
      role: 'Frontend/Analista',
      team: 'España',
      photo: '/img/team/Javier_Garcia.png',
    },
    {
      name: 'Manuel García',
      role: 'Frontend/Analista',
      team: 'España',
      photo: '/img/team/Manuel_Garcia.png',
    },
    {
      name: 'Nicolás Herrera',
      role: 'Frontend/Analista',
      team: 'España',
      photo: '/img/team/Nicolas_Herrera.png',
    },
    {
      name: 'Alberto López',
      role: 'Backend/Analista/QA',
      team: 'Beti',
      photo: '/img/team/Alberto_Lopez.png',
    },
    {
      name: 'Joaquín Martín',
      role: 'Backend/DevOps',
      team: 'Beti',
      photo: '/img/team/Joaquin_Martin.png',
    },
    {
      name: 'José María García',
      role: 'Backend/Analista/QA',
      team: 'Beti',
      photo: '/img/team/Jose_Maria_Garcia.png',
    },
    {
      name: 'José Míguel García',
      role: 'Frontend/Analista',
      team: 'Beti',
      photo: '/img/team/Jose_Miguel_Garcia.png',
    },
    {
      name: 'Marco Chasco',
      role: 'Analista/Gestión',
      team: 'Beti',
      photo: '/img/team/Marco_Chasco.png',
    },
  ]
  return (
    <div id='teams' className={clsx("meet-us", styles.meetUs)}>
      <div className='container'>
        <h2>Equipo</h2>
        <h4>Grupo Xtreme</h4>
        <div className={clsx("card-container", styles.cardContainer)}>
          {teamMembers
            .filter((member) => member.team === 'Xtreme')
            .map((member) => (
              <div
                key={member.name}
                className={clsx(
                  'card card-member',
                  styles.cardMember,
                  styles.card
                )}
              >
                <img src={member.photo} alt={member.name} />
                <h6>{member.name}</h6>
                <div>
                  {member.role.split('/').map((role, index) => (
                    <span key={index} className={clsx(styles.tag)}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <h4>Grupo España</h4>
        <div className={clsx("card-container", styles.cardContainer)}>
          {teamMembers
            .filter((member) => member.team === 'España')
            .map((member) => (
              <div
                key={member.name}
                className={clsx(
                  'card card-member',
                  styles.cardMember,
                  styles.card
                )}
              >
                <img src={member.photo} alt={member.name} />
                <h6>{member.name}</h6>
                <div>
                  {member.role.split('/').map((role, index) => (
                    <span key={index} className={clsx(styles.tag)}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <h4>Grupo Beti</h4>
        <div className={clsx("card-container", styles.cardContainer)}>
          {teamMembers
            .filter((member) => member.team === 'Beti')
            .map((member) => (
              <div
                key={member.name}
                className={clsx(
                  'card card-member',
                  styles.cardMember,
                  styles.card
                )}
              >
                <img src={member.photo} alt={member.name} />
                <h6>{member.name}</h6>
                <div>
                  {member.role.split('/').map((role, index) => (
                    <span key={index} className={clsx(styles.tag)}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <HomepageHeader />
      <main>
        <ImportantDocument />
        <Team />
        <Deployment />
      </main>
    </Layout>
  )
}
