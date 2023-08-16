import React from 'react'
import LoadingCardList from './LoadingCardList';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useNavigate } from 'react-router';

const MovieCard = ({ data, loading, showRating, tvdata }) => {
  const nav = useNavigate();
  if (loading) {
    return (<LoadingCardList isloading={true} />)
  }


  const displayRating = (rating) => {
    let number = parseFloat(rating).toFixed(2);
    const score = Math.ceil(number * 10);

    return (

      <div className="absolute bottom-[30%] translate-y-[-30%] right-0 rj-sm:hidden">
        <h1 className={`hover:scale-110 img-wrapper ease-in-out duration-150 w-[60px] h-[60px] flex justify-center items-center rounded-full  text-lg  ${score >= 75 ? "border-4 border-t-green-400 border-r-green-400 border-b-green-400 border-l-gray-400" : score >= 40 ? " border-4 border-t-yellow-300 border-r-yellow-300 border-b-gray-400 border-l-gray-400" : score < 39 ? "border-4   border-t-red-500 border-r-gray-400 border-b-gray-400 border-l-gray-400" : null}`}> {score} <sup>%</sup></h1>
      </div>
    )

  }


  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={5}

      breakpoints={{
        280: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        375: {
          slidesPerView: 3,
          spaceBetween: 100
        },


        768: {

          slidesPerView: 3,
          spaceBetween: 20
        },

        910: {

          slidesPerView: 4,
          spaceBetween: 20
        },
        1280: {

          slidesPerView: 5,
          spaceBetween: 20
        },
        2000: {
          slidesPerView: 8,
          spaceBetween: 20
        },




      }}
      navigation
      className='movie-card '
    >
      {data && data?.results.map((movie, index) => {
        return (
          <SwiperSlide key={movie.id} onClick={() => { tvdata === true ? nav(`tv/detail/${movie.id}`) : movie?.media_type === 'tv' ? nav(`tv/detail/${movie.id}`) : nav(`movie/detail/${movie.id}`) }} className='hover:scale-110 ease-in-out duration-150 '>
            <div className="relative">
              <div className=" w-[250px] h-[350px] rj-sm:w-[140px] rj-sm:h-[180px] rj-xl:w-[200px] rj-xl:h-[300px] rj-2xl:w-[230px] ">
                <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} className='w-[100%] h-[100%] rounded-md object-cover' alt='' />

              </div>

              <div className=" text-center pt-3 h-[80px] px-2  rj-sm:text-sm rj-sm:pt-2 rj-sm:px-1 rj-sm:h-[50px]  ">
                <h2 className=''>{movie.title ?? movie.name ?? movie.original_name}</h2>
              </div>
              <div className="absolute bottom-[10%] right-0">
                {showRating && displayRating(movie.vote_average)}
              </div>

            </div>

          </SwiperSlide>


        )
      })}




    </Swiper >

  )
}

export default MovieCard