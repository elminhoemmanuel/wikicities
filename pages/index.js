import Head from 'next/head'
import Link from 'next/link';
import Table from '../comps/Table'
import router, {useRouter} from "next/router";
import React, { useState , useEffect } from 'react'

export default function Home() {

  const { query } = useRouter(null);
  
  const [sort, setsort] = useState(null)
  const [selectValue, setSelectValue] = useState()

  const changeSort = (item) =>{
    setsort(item)
  }
  console.log(query.orderByField)

  useEffect(() => {
    setsort(query.orderByField)
  }, [query])

  useEffect(() => {
    router.replace(`/?orderByField=${selectValue}`)
  }, [selectValue])

  return (
    <>
      <Head>
        <title>Wikicities | Home</title>
        <meta name="keywords" content="Wikicities"/>
      
      </Head>
  
      <div className='px-10 py-8'>

        
        {/* Code for Select field for sorting */}
        <div className='flex flex-end py-3'>
          <div>
            <p className='text-sm pb-2'>ORDER BY:</p>
            <select value={selectValue}
            onChange={(e)=>{
              setSelectValue(e.target.value)
            }}
            name="order" id="order" className='block rounded border border-gray-500 p-2 bg-white focus:outline-none'>
              
              <option value="Select">Select</option>
              <option value="#">#</option>
              <option value="city">City</option>
              <option value="country">Country</option>
              <option value="AllBuildings">All Buildings</option>
              <option value="100+">100m+</option>
              <option value="150+">150m+</option>
              <option value="200+">200m+</option>
              <option value="300+">300m+</option>
              <option value="TelecomTowers">Telecom Towers</option>
              <option value="AllStructures">All Structures</option>
            </select>
          </div>
        </div>

        {/* Table component */}
        <Table sort={sort} changeSort={changeSort}/>


      </div>
    </>
  )
}
