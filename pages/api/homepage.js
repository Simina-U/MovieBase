import { fetcher } from "../../utils/api";
import Watchlist from "../../models/Watchlist";
import History from "../../models/History";
import dbConnect from "../../utils/dbConnect";

export default async function handleRecommended(req, res) {
  await dbConnect();
  const movieFromHistory = await History.aggregate().sample(1);
  const idFromHistoryMovie = movieFromHistory[0].id;
  const movieFromWatchlist = await Watchlist.aggregate().sample(1);
  const idFromWatchlistMovie = movieFromWatchlist[0].id;

  const getRecommBasedOnMovieID = (id) =>
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`;

  const getSimilarToWatchlist = (id) =>
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`;
  //
  const getTopRatedMovies = () =>
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`;

  const getUpcomingMovies = () =>
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`;
  const getPopularMovies = () =>
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1 `;

  const recMovies = await fetcher(getRecommBasedOnMovieID(idFromHistoryMovie));
  const similarMovs = await fetcher(
    getSimilarToWatchlist(idFromWatchlistMovie)
  ); //no results as of 13.01
  const topRated = await fetcher(getTopRatedMovies());
  const upcomingMovies = await fetcher(getUpcomingMovies());
  const popularMovies = await fetcher(getPopularMovies());
  //   const watchlist = await Watchlist.aggregate().sample(4);

  res
    .status(200)
    .json({ recMovies, similarMovs, topRated, upcomingMovies, popularMovies });
}
