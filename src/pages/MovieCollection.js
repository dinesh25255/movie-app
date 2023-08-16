import { useParams } from 'react-router';
import { useGetPopularMovieQuery } from '../features/MovieApi';
import GridCardList from '../components/GridCardList';
import CustomPagination from '../components/CustomPagination';
import React, { useState } from 'react'
import LoadingAnimation from '../components/LoadingAnimation';

const MovieCollection = () => {
  const { categories } = useParams();
  let query = "";
  if (categories === 'top-rated') {
    query = 'top_rated';
  } else {
    query = categories
  }

  const [page, setPage] = useState(1);


  const { data, isLoading } = useGetPopularMovieQuery({ query, page });


  return (
    <div className='px-5  mx-5 rj-sm:px-1 rj-sm:mx-2'>
      <LoadingAnimation isLoading={isLoading} />

      <h1 className='text-2xl pb-4 text-center text-teal-500 rj-sm:text-base w-[100%] rj-sm:pb-1 rj-lg:pt-3 rj-sm:pt-0'> {categories === "top-rated" ? "Top Rated" : categories.charAt(0).toUpperCase() + categories.slice(1)} Movie</h1>

      <GridCardList data={data} type={'movie'} />
      <CustomPagination setPage={setPage} page={page} />

    </div >
  )
}

export default MovieCollection