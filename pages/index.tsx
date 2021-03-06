import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
       <title>Phoenix Project</title>
       <link rel="/favicon.ico" />
       <meta name="description" content="An All-In-One Discord bot for Hypixel Guilds." />
      </Head>
      <main>
        <h1 className="xl:container font-bold text-black text-5xl">
          This is the site for Phoenix Project (Coming Soon)
        </h1>
        <footer className={styles.footer}>
          <div className=" text-center">
            Copyright PhoenixProject, TheMythMC 2021.
            <br/>
            If you encounter any issues with this site, please email adam@phoenixproject.xyz
          </div>
        </footer>
      </main>
    </div>
  )
}

export default Home
