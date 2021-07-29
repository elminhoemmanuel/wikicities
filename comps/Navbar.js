import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Link href='/'><a><img src='/logo.svg' /></a></Link>
            </div>
            
        </nav>
     );
}
 
export default Navbar;