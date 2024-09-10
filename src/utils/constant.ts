export const img = "https://image.tmdb.org/t/p/original";

export interface CarouselMovieType {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  vote_count: number;
}

export interface TopMovieType {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
  original_language: string;
}

export interface CategoryType {
  name: string;
  url: string;
}

export const category:CategoryType[] = [
  {name: "Now Playing", url: "now_playing"},
  {name: "Popular", url: "popular"},
  {name: "Top Rated", url: "top_rated"},
  {name: "Upcoming", url: "upcoming"}
]

export interface MovieDetailsType {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
  release_date: string;
  tagline: string;
  overview: string;
  genres: { name:string }[];
  vote_average: number;
  original_language: string;

}

export interface TrailerProps {
  movieId: string;
}