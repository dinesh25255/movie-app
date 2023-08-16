
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '856e58d8b2da73f28956140a0a38a981';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({

    getLatestMovie: builder.query({
      query: (query) => ({
        url: `/trending/all/${query}`,
        params: {
          api_key: apiKey
        }
      })
    }),

    getPopularMovie: builder.query({
      query: ({ query, page }) => ({
        url: `/movie/${query}`,
        params: {
          api_key: apiKey,
          page: page,
        }
      })
    }),

    getPopularTVShow: builder.query({
      query: (page) => ({
        url: '/tv/popular',
        params: {
          api_key: apiKey,
          language: 'en-US',
          region: 'KR',
          page: page,
        }
      })
    }),


    getIndividualDetail: builder.query({
      query: (query) => ({
        url: `${query.type}/${query.id}`,
        params: {
          api_key: apiKey
        }
      })
    }),


    getStarCast: builder.query({
      query: (query) => ({
        url: `${query.type}/${query.id}/credits`,
        params: {
          api_key: apiKey
        }
      })
    }),

    getMovieTrailer: builder.query({
      query: (query) => ({
        url: `${query.type}/${query.id}/videos`,
        params: {
          api_key: apiKey
        }
      })
    }),

    getSearchedMovie: builder.query({
      query: (query) => ({
        url: '/search/movie',
        params: {
          api_key: apiKey,
          query: query
        }
      })
    })




  })
});


export const { useGetLatestMovieQuery, useGetPopularMovieQuery, useGetPopularTVShowQuery, useGetIndividualDetailQuery, useGetStarCastQuery, useGetMovieTrailerQuery, useGetSearchedMovieQuery } = movieApi;