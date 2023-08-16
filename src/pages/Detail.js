import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useGetIndividualDetailQuery, useGetStarCastQuery, useGetMovieTrailerQuery } from '../features/MovieApi'
import StarCast from './Details-Sections/StarCast'
import VideoPopup from './Details-Sections/VideoPopup'
import TvBannerSection from './Details-Sections/TvBannerSection'
import MovieBannerSection from './Details-Sections/MovieBannerSection'
import LoadingAnimation from '../components/LoadingAnimation'

const Detail = () => {
  const { type, id } = useParams();
  const [popup, setPopup] = useState(false);

  const { data, isLoading } = useGetIndividualDetailQuery({ type, id });
  const { data: starCast } = useGetStarCastQuery({ type, id });

  const { data: trailer } = useGetMovieTrailerQuery({ type, id });




  return (
    <div className="relative">
      <LoadingAnimation isLoading={isLoading} />

      {popup === true ?
        <VideoPopup setPopup={setPopup} trailerName={data?.title ?? data?.orginal_title} videoID={trailer?.results[0]?.key} />
        : null}


      {type === 'movie' ? <MovieBannerSection data={data} setPopup={setPopup} /> : <TvBannerSection data={data} setPopup={setPopup} showTrailer={trailer?.results.length !== 0 ? true : false} />}

      <div className="">
        {starCast?.cast != null && <StarCast cast={starCast?.cast} />}
      </div>


    </div>
  )
}

export default Detail