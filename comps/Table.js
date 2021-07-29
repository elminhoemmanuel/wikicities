import React from 'react'
import { TableData } from './TableData'

const Table = ({ sort, changeSort }) => {

    let data = TableData
    let sortedData = [...data];
    let numbers = [100, 150, 200, 300]

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
        }else{
            sortedData.sort((a, b) => {
                if (Number(a[sort]) < Number(b[sort])) {
                    return 1;
                }
                if (Number(a[sort]) > Number(b[sort])) {
                    return -1;
                }
                return 0;
            });
        }
            
        

    }

    return (
        <table className='text-sm text-gray-700 bg-white p-2 w-full rounded shadow'>
            <thead className='border-b border-grayborder p-2'>
                <tr>
                    <th className='px-2 py-1 text-left'>#</th>
                    <th className='px-2 py-1 text-left'>City</th>
                    <th className='px-2 py-1 text-left'>Country</th>
                    <th className='px-2 py-1 text-left'>All Buildings</th>
                    <th className='px-2 py-1 text-left'>100m+</th>
                    <th className='px-2 py-1 text-left'>150m+</th>
                    <th className='px-2 py-1 text-left'>200m+</th>
                    <th className='px-2 py-1 text-left'>300m+</th>
                    <th className='px-2 py-1 text-left'>Telecom Towers</th>
                    <th className='px-2 py-1 text-left'>All Structures</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map(item => (
                    <tr key={item["city"]}>
                        <td className='p-2 border-b border-gray-300'>{item["#"]}</td>
                        <td className='p-2 border-b border-gray-300'>{item["city"]}</td>
                        <td className='p-2 border-b border-gray-300'>{item["country"]}</td>
                        <td className='p-2 border-b border-gray-300'>{item["AllBuildings"]}</td>
                        <td className='p-2 border-b border-gray-300'>{item["100+"]}</td>
                        <td className='p-2 border-b border-gray-300'>{item["150+"]}</td>
                        <td className='p-2 border-b border-gray-300'>{item["200+"]}</td>
                        <td className='p-2 border-b border-gray-300'>{item["300+"]}</td>
                        <td className='p-2 border-b border-gray-300'>{item["TelecomTowers"]}</td>
                        <td className='p-2 border-b border-gray-300'>{item["AllStructures"]}</td>

                    </tr>
                ))}
            </tbody>
        </table>

    )
}

export default Table
