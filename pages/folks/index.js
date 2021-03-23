import Head from 'next/head'
import styles from '../../styles/Folks.module.css'
import Link from 'next/link';

export const getStaticProps = async () =>{
    const res = await fetch('http://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props:{ folks:data }
    }
}

const Ninjas = ({ folks }) => {
    return ( 
        <>
            <Head>
                <title>Listify | Folks</title>
                <meta name="keywords" content="folks"/>
            </Head>
            <div>
                <h1>All folks</h1>
                {folks.map(folk =>(
                    <Link href={`/folks/${folk.id}`} key={folk.id}>
                        <a className={styles.single}>
                            <h3>{ folk.name }</h3>
                        </a>

                    </Link>
                ))}
            </div>
        </>
     );
}
 
export default Ninjas;