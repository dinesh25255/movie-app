import React, { useState } from 'react'

import { useGetPopularTVShowQuery } from '../features/MovieApi';
import GridCardList from '../components/GridCardList';
import CustomPagination from '../components/CustomPagination';

const TVCollection = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetPopularTVShowQuery(page);

  if (isLoading) {
    return (
      <div className="w-[250px] h-[500px] mx-auto">
        <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_6cuizr4s.json" background="transparent" speed="1" loop autoplay></lottie-player>
      </div>

    )
  }

  return (
    <div className=' px-5  mx-5 rj-sm:px-1 rj-sm:mx-2'>
      <h1 className='text-2xl pb-4 text-center text-teal-500 rj-sm:text-base w-[100%] rj-sm:pb-1 rj-lg:pt-3 rj-sm:pt-0 '> TV Shows</h1>

      <GridCardList data={data} type={'tv'} />

      <CustomPagination setPage={setPage} page={page} />
    </div >
  )
}

export default TVCollection