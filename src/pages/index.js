import clsx from "clsx"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import Heading from "@theme/Heading"
import styles from "./index.module.css"

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className='container'>
        <div className={clsx("container-image", styles.containerImage)}>
          <img
            src='/img/logo.png'
            alt="Harmony's logo"
            className={clsx("hero-image", styles.heroImage)}
          />
          <div>
            <Heading as='h1' className='hero__title'>
              {siteConfig.title}
            </Heading>
            <p className='hero__subtitle'>{siteConfig.tagline}</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='/docs/Inicio'
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
      name: "Seguimiento del trabajo",
      url: "https://docs.google.com/spreadsheets/d/1wenixfjYUJOmG16ldb2o3kzurWDMY2AhNgM4goYPjB4/edit?usp=sharing",
    },
    {
      name: "Elicitación de requisitos funcionales",
      url: "https://docs.google.com/document/d/16CpuOSAWVfMQ9BDRWoI0MiRYzeobkLTmaGbiyQ0F3Ec/edit",
    },
    {
      name: "Documento del TCO",
      url: "https://docs.google.com/document/d/15Ec0rVvs0WLzxw44X9O8tN76Bq3HA88E3nXJo9LWjZk/edit",
    },
    {
      name: "Documentos de uso de la IA",
      url: "docs/category/uso-de-ia",
    },
  ]
  return (
    <div
      id='importantDocuments'
      className={clsx("important-documents", styles.importantDocuments)}
    >
      <h2>Documentos relevantes</h2>
      <div className={clsx("row", styles.row)}>
        {documents.map((document, index) => (
          <article className='col col--3 margin--lg' key={index}>
            <a
              href={document.url}
              className={clsx("card padding--lg cardContainer", styles.card)}
            >
              <h3 className='cardTitle'>📄 {document.name}</h3>
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}

function Deployment() {
  const deployments = [
    {
      name: "Docusaurus",
      github: "https://github.com/ISPP-07/htld-doc.git",
      url_deploy: "https://htld-doc.vercel.app/",
    },
  ]
  return (
    <div id='deploy' className={clsx("deploy", styles.deploy)}>
      <h2>Despliegues</h2>
      <div className={clsx("row", styles.row)}>
        {deployments.map((deploy, index) => (
          <article className='col col--3 margin--lg' key={index}>
            <div className={clsx("card padding--lg cardContainer", styles)}>
              <h3 className='cardTitle'> {deploy.name}</h3>
              <div className=''>
                <a href={deploy.github} className={clsx("tag", styles.tag)}>
                  GitHub
                </a>
                <a href={deploy.url_deploy} className={clsx("tag", styles.tag)}>
                  Desplegado en
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function Team() {
  const teamMembers = [
    {
      name: "Alejandro Medina",
      role: "Documentación/Gestión",
      team: "Xtreme",
      photo: "/img/team/Alejandro_Medina.png",
    },
    {
      name: "Álvaro Bernal",
      role: "Documentación/Gestión/QA",
      team: "Xtreme",
      photo: "/img/team/Alvaro_Bernal.png",
    },
    {
      name: "Álvaro González",
      role: "Backend/Documentación/QA",
      team: "Xtreme",
      photo: "/img/team/Alvaro_Gonzalez.png",
    },
    {
      name: "Gonzalo Campos",
      role: "Backend/DevOps/Documentación",
      team: "Xtreme",
      photo: "/img/team/Gonzalo_Campos.png",
    },
    {
      name: "Ronald Montoya",
      role: "Frontend/Documentación",
      team: "Xtreme",
      photo: "/img/team/Ronald_Montoya.png",
    },
    {
      name: "Alejandro Gallardo",
      role: "Backend/Documentación",
      team: "España",
      photo: "/img/team/Alejandro_Gallardo.png",
    },
    {
      name: "Antonio Rodríguez",
      role: "Documentación/Gestión/QA",
      team: "España",
      photo: "/img/team/Antonio_Rodriguez.png",
    },
    {
      name: "David Gavira",
      role: "Backend/Documentación",
      team: "España",
      photo: "/img/team/David_Gavira.png",
    },
    {
      name: "Francisco Benítez",
      role: "Frontend/Documentación/QA",
      team: "España",
      photo: "/img/team/Francisco_Benitez.png",
    },
    {
      name: "Javier García",
      role: "Frontend/Documentación",
      team: "España",
      photo: "/img/team/Javier_Garcia.png",
    },
    {
      name: "Manuel García",
      role: "Frontend/Documentación",
      team: "España",
      photo: "/img/team/Manuel_Garcia.png",
    },
    {
      name: "Nicolás Herrera",
      role: "Frontend/Documentación",
      team: "España",
      photo: "/img/team/Nicolas_Herrera.png",
    },
    {
      name: "Alberto López",
      role: "Backend/Documentación/QA",
      team: "Beti",
      photo: "/img/team/Alberto_Lopez.png",
    },
    {
      name: "Joaquín Martín",
      role: "Backend/DevOps",
      team: "Beti",
      photo: "/img/team/Joaquin_Martin.png",
    },
    {
      name: "José María García",
      role: "Backend/Documentación/QA",
      team: "Beti",
      photo: "/img/team/Jose_Maria_Garcia.png",
    },
    {
      name: "José Míguel García",
      role: "Frontend/Documentación",
      team: "Beti",
      photo: "/img/team/Jose_Miguel_Garcia.png",
    },
    {
      name: "Marco Chasco",
      role: "Documentación/Gestión",
      team: "Beti",
      photo: "/img/team/Marco_Chasco.png",
    },
  ]
  return (
    <div id='teams' className={clsx("meet-us", styles.meetUs)}>
      <h2>Conoce al equipo</h2>
      <div className='container'>
        <h4>Xtreme</h4>
        <div className={clsx("card-container", styles.cardContainer)}>
          {teamMembers
            .filter(member => member.team === "Xtreme")
            .map(member => (
              <div
                key={member.name}
                className={clsx(
                  "card card-member",
                  styles.cardMember,
                  styles.card
                )}
              >
                <img src={member.photo} alt={member.name} />
                <h6>{member.name}</h6>
                <div>
                  {member.role.split("/").map((role, index) => (
                    <span key={index} className={clsx(styles.tag)}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <h4>España</h4>
        <div className={clsx("card-container", styles.cardContainer)}>
          {teamMembers
            .filter(member => member.team === "España")
            .map(member => (
              <div
                key={member.name}
                className={clsx(
                  "card card-member",
                  styles.cardMember,
                  styles.card
                )}
              >
                <img src={member.photo} alt={member.name} />
                <h6>{member.name}</h6>
                <div>
                  {member.role.split("/").map((role, index) => (
                    <span key={index} className={clsx(styles.tag)}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <h4>Beti</h4>
        <div className={clsx("card-container", styles.cardContainer)}>
          {teamMembers
            .filter(member => member.team === "Beti")
            .map(member => (
              <div
                key={member.name}
                className={clsx(
                  "card card-member",
                  styles.cardMember,
                  styles.card
                )}
              >
                <img src={member.photo} alt={member.name} />
                <h6>{member.name}</h6>
                <div>
                  {member.role.split("/").map((role, index) => (
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
      title={`Hello from ${siteConfig.title}`}
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
