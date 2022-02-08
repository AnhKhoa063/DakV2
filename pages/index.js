import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/Layout/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>Demo</h1>
    </Layout>
  )
}
