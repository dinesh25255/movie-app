import { useGetLatestMovieQuery } from '../../features/MovieApi'
import { useState } from 'react';
import 'swiper/css';
import MovieCard from '../../components/MovieCard';

const Trending = () => {

  const [movieBy, setMovieBy] = useState('day');
  const { data, isLoading } = useGetLatestMovieQuery(movieBy);


  return (

    <div className='mx-10 mt-4 px-4 pt-4 rj-sm:mt-2  rj-sm:mx-3 rj-sm:px-1 rj-sm:pt-2'>
      <div className="flex justify-between">
        <div >
          <h1 className="text-3xl head tracking-normal trending rj-md:text-2xl rj-lg:text-2xl rj-sm:text-base">Trending</h1></div>
        <div className="bttn-wrapper flex  border-t-2 rounded-lg text-base rj-sm:hidden">
          <button className={`rj-md:text-sm ${movieBy === 'day' && 'bg-teal-600'} py-2 px-6 rounded-lg  tracking-wider rj-md:text-base`} onClick={() => { setMovieBy('day') }}>Today</button>
          <button className={`rj-md:text-sm active:bg-red  visited:bg-blue-400 ${movieBy === 'week' && 'bg-teal-600'} tracking-wide py-2 px-6 rounded-lg`} onClick={() => { setMovieBy('week') }}>Weekly</button>

        </div>
      </div>
      <div className="mt-3 pt-2">
        <MovieCard data={data} loading={isLoading} showRating={false} tvdata={false} />
      </div>

    </div>





  )
}

export default Trending