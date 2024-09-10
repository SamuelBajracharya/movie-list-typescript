import React, { useEffect, useState } from 'react'
import { baseApi } from '../../api/axiosInstance'
import { TopMovieType, TrailerProps } from '../../utils/constant'
import MovieCard from '../Home/MovieCard'
import MovieList from '../Home/MovieList'

function SimilarMovies(movieId:TrailerProps) {

  const [pageNum, setPageNum] = useState('1')
  const [moviesSimilar, setMoviesSimilar] = useState<TopMovieType[]>([])

  const fetchSimilarMovies = async () => {
    try {
      const response = await baseApi.get(`/3/movie/${movieId.movieId}/similar?language=en-US&page=${pageNum}`)
      setMoviesSimilar(response.data.results)
    } catch (error) {
      console.log("Similar Movies Error: ", error)
    }
  }

  useEffect(() => {
    fetchSimilarMovies()
  },[movieId])

  return (
    <div className='w-[90%] mx-auto'>
      <h1 className='text-3xl text-yellow-500 font-bold my-4'>Similar Movies</h1>
      <div className="flex overflow-x-scroll gap-5 items-center noscroll">
        {
          moviesSimilar.map((items, index) => (
            <div className='xl:min-w-[300px] lg:min-w-[280px] md:min-w-[250px] min-w-[200px]'>
            <MovieCard movieCard={items} />
            </div>
            
          ))

        }
      </div>
    </div>
  )
}

export default SimilarMovies