import React from 'react'
import { Link } from 'react-router-dom'
import { CarouselMovieType, img } from '../../utils/constant'
import { FiThumbsUp } from 'react-icons/fi'

interface carousalCardProps{
    movies: CarouselMovieType[];
    item: number
    index: number
}

function HomeCarousalCard({movies, item, index}:carousalCardProps) {
  return (
    <div className='col-xl-12 col'>
        <Link className="group flex gap-3 my-8 " to={`/details/${movies[item].id}`}>
            <img
              className="w-[110px] cursor-pointer aspect-[5/7]"
              src={img + movies[item]?.poster_path}
              alt="carousalListMovie"
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-lg font-semibold group-hover:underline cursor-pointer">
                {movies[item]?.title}
              </h1>
              <h1 className="text-md line-clamp-3 text-zinc-400">
                {movies[item]?.overview}
              </h1>
              <div className="flex items-center gap-1 text-zinc-400 text-md">
                <FiThumbsUp />
                <h1>{movies[item]?.vote_count}</h1>
              </div>
            </div>
          </Link>
    </div>
  )
}

export default HomeCarousalCard