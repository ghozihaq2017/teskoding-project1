/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import destinations from '../utils/destinations';
import { LuArrowUpDown } from 'react-icons/lu';

function TableData() {
  const [destinationsData, setDestinationsData] = useState(destinations);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    const sortedData = [...destinationsData].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    setDestinationsData(sortedData);
    setSortConfig({ key, direction });
  };
  return (
    <div className="table-top-25 my-[3rem] md:px-[4rem] px-[2rem]">
      <div className="overflow-x-auto">
        <table className="table table-zebra ">
          {/* head */}
          <thead>
            <tr>
              <th
                className="cursor-pointer text-sm md:py-[0.75rem] px-1 py-1 md:px-[1rem]"
                onClick={() => requestSort('id')}
              >
                <span className="inline-flex items-center">
                  No
                  <LuArrowUpDown className="ml-2" />
                </span>
              </th>
              <th
                className="cursor-pointer text-sm text-sm px-1 py-1 md:px-[1rem] md:py-[0.75rem]"
                onClick={() => requestSort('name')}
              >
                <span className="inline-flex items-center">
                  Nama
                  <LuArrowUpDown className="ml-2" />
                </span>
              </th>
              <th
                className="cursor-pointer text-sm px-1 py-1 md:px-[1rem] md:py-[0.75rem]"
                onClick={() => requestSort('location')}
              >
                <span className="inline-flex items-center">
                  Lokasi
                  <LuArrowUpDown className="ml-2" />
                </span>
              </th>
              <th
                className="cursor-pointer text-sm px-1 py-1 md:px-[1rem] md:py-[0.75rem]"
                onClick={() => requestSort('description')}
              >
                <span className="inline-flex items-center">
                  Keterangan
                  <LuArrowUpDown className="ml-2" />
                </span>
              </th>
              <th
                className="cursor-pointer text-sm px-1 py-1 md:px-[1rem] md:py-[0.75rem]"
                onClick={() => requestSort('score')}
              >
                <span className="inline-flex items-center">
                  Skor
                  <LuArrowUpDown className="ml-2" />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {destinationsData.map((row) => (
              <tr key={row.id}>
                <th className="text-xs md:text-sm px-1 py-1 md:px-[1rem] md:py-[0.75rem]">
                  {row.id}
                </th>
                <td className="text-xs md:text-sm px-1 py-1 md:px-[1rem] md:py-[0.75rem]">
                  {row.name}
                </td>
                <td className="text-xs md:text-sm px-1 py-1 md:px-[1rem] md:py-[0.75rem]">
                  {row.location}
                </td>
                <td className="text-xs md:text-sm px-1 py-1 md:px-[1rem] md:py-[0.75rem]">
                  {row.description}
                </td>
                <td className="text-xs md:text-sm px-1 py-1 md:px-[1rem] md:py-[0.75rem]">
                  {row.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableData;
