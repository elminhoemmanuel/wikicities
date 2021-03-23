// export const getStaticPaths = async () =>{
//     const res = await fetch('http://jsonplaceholder.typicode.com/users');
//     const data = await res.json();

//     const paths = data.map(folk =>{
//         return {
//             params : { id: folk.id.toString()}
//         }
//     })

//     return {
//         paths,
//         fallback:false
//     }

// }

// export const getStaticProps = async (context) =>{
//     const id = context.params.id
//     const res = await fetch('http://jsonplaceholder.typicode.com/users' + id);
//     const data = await res.json();

//     return {
//         props:{ folk:data }
//     }

// }

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(folk => {
      return {
        params: { id: folk.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
}
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { folk:data }
    }
}


const Details = ({ folk }) => {
    return ( 
        <div>
            <h1>{folk.name}</h1>
            <p>{folk.email}</p>
            <p>{folk.website}</p>
            <p>{folk.address.city}</p>
        </div>
     );
}
 
export default Details;