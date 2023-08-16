import React from 'react'

const PageNotFound = () => {
  return (
    <div className='flex justify-center  mt-[2%]  pb-[10%]  rj-2xl:pb-[5%] rj-2xl:mt-0 rj-sm:pb-[32%]'>
      <div className="pb-[3px] ">
        <div className="w-[500px] h-[350px] mx-auto rj-sm:w-[300px] rj-sm:h-[300px]  ">
          <lottie-player src=" https://assets2.lottiefiles.com/packages/lf20_IrueHv2Ybx.json" background="transparent" speed="1" loop autoplay ></lottie-player>

        </div>
        <div className="mt-[-15%] rj-sm:mt-[-25%]  text-teal-400 ">
          <h2 className=' text-right text-lg pr-8  animate-pulse '>Page Not Found</h2>
          <h2 className=' text-lg rj-sm:mt-[-5%]  text-center pt-10'>Oops !! We can't find the page you're looking for</h2>
        </div>
      </div>

    </div>
  )
}

export default PageNotFound