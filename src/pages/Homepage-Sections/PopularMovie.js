import { useGetPopularMovieQuery, useGetPopularTVShowQuery } from '../../features/MovieApi'
import { useState } from 'react';
import 'swiper/css';
import MovieCard from '../../components/MovieCard';

const Popular = () => {

  const [movieBy, setMovieBy] = useState(true);
  const { data: tvData, isLoad } = useGetPopularTVShowQuery();
  const { data, isLoading } = useGetPopularMovieQuery({ query: 'popular', page: 1 });


  return (
    <div className='mx-10 mt-1 px-4 pt-2 rj-sm:mt-2  rj-sm:mx-3 rj-sm:px-1 rj-sm:pt-2 '>
      <div className="flex justify-between">
        <div >
          <h1 className="text-3xl head tracking-normal trending rj-md:text-2xl rj-lg:text-2xl rj-sm:text-base">Popluar </h1></div>
        <div className="bttn-wrapper flex rj-sm:border-t-1  border-t-2 rounded-lg text-base rj-sm:hidden">
          <button className={`  rj-md:text-sm  ${!movieBy && 'bg-teal-600'} rj-sm:px-2 py-2 px-6 rounded-lg  tracking-wider   `} onClick={() => { setMovieBy(false) }}>On TV</button>
          <button className={` rj-sm:px-2 rj-md:text-sm  ${movieBy && 'bg-teal-600'} tracking-wide py-2 px-6 rounded-lg rj-md:text-base`} onClick={() => { setMovieBy(true) }}>In Theaters</button>

        </div>
      </div>
      <div className="mt-3 p-2 rj-sm:px-0 ">
        {movieBy ? <MovieCard data={data} loading={isLoading} showRating={true} tvdata={false} /> : <MovieCard data={tvData} loading={isLoad} showRating={true} tvdata={true} />}

      </div>
    </div>




  )
}

export default Popular