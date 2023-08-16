
import React, { useState } from 'react'


const CustomPagination = ({ setPage, page }) => {
  let displayUpto = 5;
  const [maxlength, setLength] = useState(displayUpto);

  let pageList = [];
  let [start, setStart] = useState(1);

  const generatePageList = () => {

    for (start; start <= maxlength; start++) {
      pageList = [...pageList, start];
    }

  }
  generatePageList();

  const increasePage = () => {
    if (page === 1) {
      generatePageList();
    }
    else if (page === maxlength) {
      setStart(maxlength);
      setLength(maxlength + displayUpto);
    }
    setPage(page + 1);
  }

  const decreasePage = () => {
    if (page < maxlength && page > displayUpto) {
      setStart(page - 1);
      setLength(page + 3);
    }
    else if (page <= displayUpto) {
      setStart(1);
      setLength(displayUpto);
    }
    setPage(page - 1);
  }

  return (
    <div className={`  pagination   flex space-x-5 justify-between cursor-pointer  bg-gray-900 rounded-md py-2 
    rj-lg:w-[40%] rj-md:w-[50%] rj-sm:w-[100%] rj-sm:space-x-1
    mx-auto  mt-8 mb-8 text-base px-5 rj-sm:mt-3  rj-sm:mb-7 ${page === 1 ? "w-[18%] " : "w-[27%]"}  rj-sm:text-sm`}>

      {page > 1 &&
        <div className="flex items-center space-x-2 rj-sm:space-x-2 hover:scale-110 ease-in-out duration-100" onClick={() => { decreasePage(); }}>

          <i className="fa-solid fa-chevron-left pt-1 rj-sm:pt-0"></i>
          <h2 >Prev</h2>
        </div>
      }
      <div className="flex space-x-1">
        {pageList?.map((pg, i) => {
          return (

            <h2 key={i} onClick={() => { setPage(pg) }} className={` px-2 rounded-md ${page === pg ? "bg-teal-400  " : null} `}>{pg}</h2>
          )
        })}
      </div>

      <div className="flex items-center space-x-2 hover:scale-110 ease-in-out duration-100" onClick={() => { increasePage() }}>
        <h2 >Next</h2>
        <i className="fa-solid fa-chevron-right pt-1 rj-sm:pt-0"></i>
      </div>

    </div>

  )
}

export default CustomPagination