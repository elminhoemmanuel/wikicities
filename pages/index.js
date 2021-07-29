import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar';
import Footer from '../comps/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Wikicities | Home</title>
        <meta name="keywords" content="Wikicities"/>
      
      </Head>
  
      <div>
        Hello cities
      </div>
    </>
  )
}
