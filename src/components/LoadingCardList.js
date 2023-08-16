import React from 'react'

const isloadingCard = () => {
  return (
    <div className="bg-gray-800  animate-pulse h-[350px] rj-sm:h-[170px] rj-sm:rounded-md rounded-xl rj-lg:h-[300px] rj-md:h-[300px]" >

      <div className="w-[100%] mx-auto my-auto h-[100%]">
        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_mc0ry5ol.json" speed="1" loop autoplay ></lottie-player>
      </div>
    </div>
  )
}

const LoadingCardList = (props) => {
  if (props.isloading) {
    return (
      <div className='grid grid-cols-4 gap-5 mx-5  px-4 pt-4 rj-md:grid-cols-3 rj-sm:gap-3 rj-sm:mx-1 rj-sm:px-1 '>
        {isloadingCard()}
        {isloadingCard()}
        {window.innerWidth > 768 && isloadingCard()}
        {isloadingCard()}


      </div >
    )
  }

}

export default LoadingCardList