import React from 'react'

const VideoPopup = ({ setPopup, trailerName, videoID }) => {
  return (
    <div className="">
      <div className='bg-gray-900 bg-blend-darken z-10 opacity-70  w-[100%] h-[100%] absolute' onClick={() => { setPopup(false) }}>
      </div>

      <div className=" z-40 fixed rounded-md overflow-hidden top-[6%]  w-[80%] h-[85%] rj-lg:w-[90%] left-[50%] translate-x-[-50%]  ">
        <div className="topbar py-1 z-20 absolute border-1  px-6 flex justify-between bg-black w-[100%]">
          <h2 className='text-base rj-sm:text-sm'>{trailerName}</h2>
          <i className="fa-sharp fa-solid fa-xmark text-lg rj-sm:text-sm hover:text-teal-500" onClick={() => { setPopup(false) }}></i>
        </div>

        <iframe className="w-full aspect-video  absolute bottom-0 rj-lg:top-[7%] rj-lg:translate-y-[-7%] " src={`https://www.youtube.com/embed/${videoID}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title='Movie Trailer'></iframe>

      </div>
    </div>


  )
}

export default VideoPopup