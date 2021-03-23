import Link from 'next/link';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'


const NotFound = () => {

    const router = useRouter();

    useEffect(() =>{
        setTimeout(() =>{
            router.push('/')
        }, 3000)
    },[])

    return ( 
        <>
            <Head>
                <title>Listify | 404</title>
                <meta name="keywords" content="folks"/>
            </Head>
            <div className="not-found">
                <h1>Oh oh .....</h1>
                <p>The page could not be found.</p>
                <p><Link href="/"><a>Take me home</a></Link></p>
            </div>
        </>
     );
}
 
export default NotFound;