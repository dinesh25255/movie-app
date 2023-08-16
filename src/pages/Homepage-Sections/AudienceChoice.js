import React from 'react'
import { favMovies } from '../../components/FavMovieData'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper'


const AudienceChoice = () => {


  return (
    <Swiper
      slidesPerView={1}
      modules={[Autoplay, EffectFade]}
      effect='fade'
      autoplay={{ delay: 85000 }}
    >
      {
        favMovies.map((data, i) => {
          return (
            < SwiperSlide key={i}>
              < div className="relative   mt-3 px-8 py-9 img-wrapper bg-no-repeat object-cover mb-10 rj-md:mb-5  rj-sm:mb-0 bg-blend-darken  bg-cover rj-sm:px-4 rj-sm:pt-4 rj-sm:pb-0" style={{ backgroundImage: `url('${data.bgImage}')` }
              } >

                <h1 className='text-2xl font-medium tracking-normal mb-4 pb-2 rj-sm:text-sm rj-sm:pb-0'>Audience Choice</h1>

                <div className="flex justify-between align items-center px-2 pb-4  rj-sm:px-0 rj-sm:block ">
                  <div className="w-[48%]  rj-sm:w-[100%]  ">
                    <video className='w-[100%] h-[100%] aspect-video object-cover ' muted loop={true} autoPlay="autoPlay" >
                      <source src={data.videoUrl} type="video/mp4">
                      </source>
                    </video>
                  </div>

                  <div className="content  w-[50%] space-y-1 text-white  rj-sm:w-[100%] rj-sm:text-sm ">
                    <h2 className='text-2xl  font-semibold text-teal-500 rj-sm:pt-2 rj-sm:text-base'>
                      {data.name}</h2>
                    <h2 className=' text-teal-200 font-medium '>Genre: {data.genre}</h2>
                    <h3 className=' pt-5 text-justify mb-2 rj-sm:pt-2' >Overview : &nbsp;
                      {data.desc}
                    </h3>
                    <div className="flex justify-between pt-9 mt-2 w-[80%] rj-sm:hidden  rj-sm:pt-2 rj-md:w-[90%] rj-md:space-x-2 ">
                      {data.team.map((t, index) => {
                        return (
                          <div className="" key={index}>
                            <h2 className='text-base rj-md:text-sm'>{t.teamName}</h2>
                            <h3 className='text-sm rj-md:text-xs'>{t.role}</h3>
                          </div>
                        )
                      })}

                    </div>

                  </div>
                </div>
              </div >
            </SwiperSlide>
          )
        })
      }
    </Swiper >
  )
}

export default AudienceChoice