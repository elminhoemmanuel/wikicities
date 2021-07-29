import React from 'react'
import { TableData } from './TableData'

const Table = ({ sort, changeSort }) => {

    let data = TableData
    let sortedData = [...data];
    let numbers = [100, 150, 200, 300]
    let others = ["AllBuildings","TelecomTowers","AllStructures"]

    if (sort !== null) {
        if (sort === "city" || sort === "country") {
            sortedData.sort((a, b) => {
                if (a[sort] < b[sort]) {
                    return -1;
                }
                if (a[sort] > b[sort]) {
                    return 1;
                }
                return 0;
            });
        } else if(numbers.includes(Number(sort))){
            numbers.map(item => {
                if (Number(sort) === item) {
                    sortedData.sort((a, b) => {
                        if (a[item.toString() + "+"] < b[item.toString() + "+"]) {
                            return 1;
                        }
                        if (a[item.toString() + "+"] > b[item.toString() + "+"]) {
                            return -1;
                        }
                        return 0;
                    });
                }
            })
        }else if(others.includes(sort)){
            others.map(item => {
                if (sort === item) {
                    sortedData.sort((a, b) => {
                        if (Number(a[item]) < Number(b[item])) {
                            return 1;
                        }
                        if (Number(a[item]) > Number(b[item])) {
                            return -1;
                        }
                        return 0;
                    });
                }
            })
        }else if (sort === ""){
            sortedData.sort((a, b) => {
                if (a["#"] < b["#"]) {
                    return -1;
                }
                if (a["#"] > b["#"]) {
                    return 1;
                }
                return 0;
            });
        }
            
        

    }

    return (
        <table className='text-sm text-gray-700 bg-white p-2 w-full rounded shadow'>
            <thead className='border-b border-grayborder p-2'>
                <tr>
                    <th className='px-2 py-1 text-left header' >#</th>
                    <th className='px-2 py-1 text-left header' >City</th>
                    <th className='px-2 py-1 text-left header' >Country</th>
                    <th className='px-2 py-1 text-left header' >All Buildings</th>
                    <th className='px-2 py-1 text-left header' >100m+</th>
                    <th className='px-2 py-1 text-left header' >150m+</th>
                    <th className='px-2 py-1 text-left header' >200m+</th>
                    <th className='px-2 py-1 text-left header' >300m+</th>
                    <th className='px-2 py-1 text-left header' >Telecom Towers</th>
                    <th className='px-2 py-1 text-left header' >All Structures</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map(item => (
                    <tr key={item["city"]}>
                        <td className='p-2 border-b border-gray-300 cell' >{item["#"]}</td>
                        <td className='p-2 border-b border-gray-300 cell' >{item["city"]}</td>
                        <td className='p-2 border-b border-gray-300 cell' >{item["country"]}</td>
                        <td className='p-2 border-b border-gray-300 cell' >{item["AllBuildings"]}</td>
                        <td className='p-2 border-b border-gray-300 cell' >{item["100+"]}</td>
                        <td className='p-2 border-b border-gray-300 cell' >{item["150+"]}</td>
                        <td className='p-2 border-b border-gray-300 cell' >{item["200+"]}</td>
                        <td className='p-2 border-b border-gray-300 cell' >{item["300+"]}</td>
                        <td className='p-2 border-b border-gray-300 cell' >{item["TelecomTowers"]}</td>
                        <td className='p-2 border-b border-gray-300 cell' >{item["AllStructures"]}</td>

                    </tr>
                ))}
            </tbody>
        </table>

    )
}

export default Table
