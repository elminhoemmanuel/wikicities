import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div className="px-16 pt-6 pb-4" style={{fontSize:'16px',paddingTop:'5px'}}>
                <Link href='/'><a className='text-gray-700 text-2xl' >Wikicities📜</a></Link>
            </div>
            
        </nav>
     );
}
 
export default Navbar;