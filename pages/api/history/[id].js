import { fetcher } from "../../../utils/api";
import History from "../../../models/History";
import dbConnect from "../../../utils/dbConnect";
import Watchlist from "../../../models/Watchlist";

const getMovieUrl = (id) =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`;

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;
  const { id } = req.query;

  if (method === "GET") {
    const history = await History.findOne({ id });

    if (history) {
      res.status(200).json({ found: true });
    } else {
      res.status(404).json({ found: false });
    }
  } else if (method === "PUT") {
    const movie = await fetcher(getMovieUrl(id));
    await Watchlist.findOne({ id })?.deleteOne({ id });

    const history = new History({
      id,
      title: movie.title,
      plot: movie.overview,
      image: movie.poster_path,
      genres: movie.genres,
    });

    await history.save();
    res.status(200).json(movie);
  } else if (method === "DELETE") {
    await History.deleteOne({ id });
    res.status(200).end("Ok");
  }
  res.status(400).end();
}
