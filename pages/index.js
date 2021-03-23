import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar';
import Footer from '../comps/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Listify | Home</title>
        <meta name="keywords" content="folks"/>
      
      </Head>
  
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Pork belly beef ribs dolore flank shankle. Incididunt jerky elit, tempor burgdoggen magna sint velit short ribs pastrami. Salami andouille sunt, pig fatback pork dolor ribeye sint venison. Occaecat bacon laborum enim consequat alcatra. Filet mignon ball tip ad chuck chislic do jerky id, in shoulder.</p>
        <p className={styles.text}>Pork belly beef ribs dolore flank shankle. Incididunt jerky elit, tempor burgdoggen magna sint velit short ribs pastrami. Salami andouille sunt, pig fatback pork dolor ribeye sint venison. Occaecat bacon laborum enim consequat alcatra. Filet mignon ball tip ad chuck chislic do jerky id, in shoulder.</p>
        
        <Link href='/folks'>
          <a className={styles.btn}>See list of folks</a>
        </Link>
      </div>
    </>
  )
}
