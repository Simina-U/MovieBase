import { fetcher } from "../../../utils/api";

const getMovieUrl = (id) =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`;

const getCastFromMovie = (id) =>
  `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}&language=en-US`;
export default async function handler(req, res) {
  const movie = await fetcher(getMovieUrl(req.query.id));
  const { cast } = await fetcher(getCastFromMovie(req.query.id));
  const castToDisplay = cast
    .slice(0, 10)
    .filter((actor) => actor.profile_path !== null);
  console.log(castToDisplay.length);
  res.status(200).json({ movie, castToDisplay });
}
