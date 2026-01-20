import React from 'react'

const TableFooter = () => {
  return (
          <div className="w-[97%] mx-auto mb-2 text-[1.24rem] font-bold text-[#a9512b] mt-3">
            For more information and queries, please write to: Prof. R. D. Garg,
            Dean of Resources & Alumni Affairs 
            (Email: {" "} 
            <a className='text-blue-700' href="mailto:dora@iitr.ac.in">
               dora@iitr.ac.in </a>,{" "}
               <a className='text-blue-700' href="mailto:dora.office@iitr.ac.in">
               dora.office@iitr.ac.in </a>
            )
          </div>
  )
}

export default TableFooter