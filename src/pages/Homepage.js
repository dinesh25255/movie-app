import React from 'react'
import Trending from './Homepage-Sections/Trending';
import Popular from './Homepage-Sections/PopularMovie';
import AudienceChoice from './Homepage-Sections/AudienceChoice';
import MovieBanner from './Homepage-Sections/MovieBanner';

const Homepage = () => {

  return (
    <>
      <MovieBanner />
      <Trending />
      <Popular />
      <AudienceChoice />


    </>
  )


}

export default Homepage