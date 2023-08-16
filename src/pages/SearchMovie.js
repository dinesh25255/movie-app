import React from 'react'
import { useParams } from 'react-router'
import { useGetSearchedMovieQuery } from '../features/MovieApi';
import GridCardList from '../components/GridCardList';
import SearchNotFound from '../components/SearchNotFound';

export const SearchMovie = () => {
  const { searchquery } = useParams();
  const { data, isloading } = useGetSearchedMovieQuery(searchquery);

  if (data?.total_results === 0) {
    return (
      <SearchNotFound searchquery={searchquery} />
    )
  }

  if (isloading) {
    return (
      <div className="w-[250px] h-[500px] mx-auto">
        <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_6cuizr4s.json" background="transparent" speed="1" loop autoplay></lottie-player>
      </div>

    )
  }

  return (
    <div className='px-5  mx-5 rj-sm:px-1 rj-sm:mx-2'>
      <h1 className='text-xl pb-4 text-left  text-teal-500 rj-sm:text-sm'> Search Result : {searchquery.toUpperCase()}</h1>

      {data?.result?.length !== 0 && data?.total_results > 0 &&
        <GridCardList data={data} type={'movie'} />
      }

      {/* <GridCardList data={data} type={'movie'} />
      <CustomPagination setPage={setPage} page={page} /> */}

    </div >
  )
}
