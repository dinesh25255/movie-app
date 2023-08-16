import React from 'react'

const MovieBannerSection = ({ data, setPopup }) => {
  let getHours = "1";
  let getMinutes = "";

  const getRunTime = () => {
    [getHours, getMinutes] = parseFloat(data?.runtime / 60).toFixed(2).split('.');
  }
  getRunTime();

  let score = 0;

  const displayRating = (rating) => {
    let number = parseFloat(rating).toFixed(2);
    score = Math.ceil(number * 10);
    return (
      <div className='flex items-center space-x-3'>
        <h2 className={`w-[70px] h-[70px] rj-sm:w-[60px] rj-sm:h-[60px] flex justify-center items-center rounded-full hover:scale-110 ease-in-out duration-150  text-xl  font-medium ${score >= 75 ? "border-4 border-t-green-400 border-r-green-400 border-b-green-400 border-l-gray-400" : score >= 40 || score < 75 ? " border-4 border-t-yellow-300 border-r-yellow-300 border-b-gray-400 border-l-gray-400" : score < 39 ? "border-4   border-t-red-500 border-r-gray-400 border-b-gray-400 border-l-gray-400" : null
          }`}> {score} <sup>%</sup></h2>

        <h2 className='font-medium '>User <br />Score</h2>
      </div>
    )

  }

  return (
    <div className='w-[100%] flex px-10 img-wrapper  bg-blend-darken bg-no-repeat bg-cover  h-[100%] py-10 bg-center rj-sm:block rj-sm:px-5 rj-sm:py-2 rj-md:pl-2 ' style={{ backgroundImage: data?.backdrop_path && data?.backdrop_path !== null && data?.backdrop_path !== undefined && ` url('https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data?.backdrop_path}')` }}>

      <div className="hidden rj-sm:block w-[100%]">
        <h2 className='text-lg text-center font-semibold text-teal-400 rj-sm:pb-3'>{data?.title ?? data?.orginal_title}
          {data?.release_date != null ? <span> ( {data?.release_date.split('-')[0]} )</span> : ""}
        </h2>
      </div>

      <div className="w-[28%] h-auto rj-sm:w-[100%] rj-md:w-[35%]">
        <div className=" w-[70%] rj-sm:w-[50%] mx-auto  rounded-xl  overflow-hidden  ">
          <img src={data?.poster_path && data?.poster_path !== null && data?.poster_path !== undefined && `https://image.tmdb.org/t/p/w600_and_h900_bestv2${data?.poster_path}`} className='w-[100%] h-[100%] rounded-md object-cover' alt='' />
        </div>
      </div>
      <div className="right w-[50%] rj-sm:w-[100%] rj-2xl:w-[70%] rj-3xl:w-[60%] ">

        <h2 className='text-2xl font-semibold text-teal-400 rj-sm:hidden'>{data?.title ?? data?.orginal_title}
          {data?.release_date != null ? <span> ( {data?.release_date.split('-')[0]} )</span> : ""}
        </h2>
        <div className="py-2">

          <div className=" text-base font-medium text-teal-50 rj-sm:text-sm ">
            <div className="flex rj-sm:justify-center">

              {data?.genres.map((gen, index) => {
                return (
                  <div className="text-right" key={gen?.id}>
                    <h2 className=''> {gen?.name} {index !== data?.genres.length - 1 && ' | '}&nbsp;</h2>
                  </div>
                )
              })}
            </div>
            <h3 className='mt-1 rj-sm:text-center rj-sm:text-sm   '>Released Date : {data?.release_date}</h3>

          </div>

        </div>

        <div className="hidden rj-sm:flex justify-center">
          {data?.vote_average != null && displayRating(data?.vote_average)}
        </div>

        <div className="flex items-center space-x-6 py-3 rj-sm:space-x-4 rj-sm:text-sm  rj-sm:justify-center ">

          <div className="rj-sm:hidden">
            {data?.vote_average != null && displayRating(data?.vote_average)}
          </div>

          <div className="flex items-center space-x-2 tracking-wider">
            <i className="fa-solid fa-circle text-xs" style={{ fontSize: 6 }}></i>
            <h3>{getHours}h {getMinutes}m</h3>
          </div>




          <div className="play-wrapper flex items-center space-x-2 hover:text-teal-400 cursor-pointer " onClick={() => {
            setPopup(true);

          }}>
            <i className="fa-solid fa-play"></i>
            <h2 className='text-bold  tracking-wide'>Play Trailer</h2>
          </div>
        </div>
        <div className="py-5 rj-sm:py-2">
          <h2 className='font-medium text-xl pb-2 ' >Overview</h2>
          <p className='text-justify rj-sm:text-sm rj-sm:leading-5'>{data?.overview}</p>
        </div>




        <div className="flex justify-between w-[60%] pt-3 rj-sm:w-[100%] rj-sm:text-sm rj-lg:w-[80%]">
          <div className="">
            <h3 className='font-semibold'>Status</h3>
            <p>{data?.status}</p>
          </div>

          <div className="">
            <h3 className='font-semibold'>Budget</h3>
            {data?.budget === 0 ? <p className=''>-</p> : <p>${new Intl.NumberFormat().format(data?.budget)}</p>}

          </div>

          <div className="">
            <h3 className='font-semibold'>Revenue</h3>
            {data?.revenue === 0 ? <p className=''>-</p> : <p>${new Intl.NumberFormat().format(data?.revenue)}</p>}

          </div>

        </div>

      </div>

    </div>
  )
}

export default MovieBannerSection