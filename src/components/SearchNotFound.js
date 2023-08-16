import React from 'react'

const SearchNotFound = ({ searchquery }) => {
  return (
    <div className='text-center mt-[5%] rj-2xl:mt-[2%] pt-[1%] pb-[11%] rj-2xl:p-[4%]  rj-lg:pb-[6%] rj-md:pb-[9%] rj-sm:pb-[31%] rj-sm:pt-[15%]'>
      <h2 className=' text-3xl font-bold text-teal-400 pb-[1%] mb-2 rj-2xl:text-2xl rj-sm:text-xl '>No Search Results Found </h2>
      <h3 className='text-2xl pt-3 rj-2xl:pt-0 text-teal-400 rj-sm:text-xl '>for {searchquery.toUpperCase()}</h3>

      <div className="w-[300px] h-[200px] mx-auto  mt-[-2%] rj-sm:mt-[-9%]">
        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_0jgvpwqy.json" background="transparent" speed="1" loop autoplay ></lottie-player>
      </div>

      <p className=' text-teal-400 rj-sm:mt-[-5%]'>It seems we can’t find what you’re looking for.</p>
    </div>
  )
}

export default SearchNotFound