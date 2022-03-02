import { fetcher } from "../../utils/api";
import Watchlist from "../../models/Watchlist";
import History from "../../models/History";
import dbConnect from "../../utils/dbConnect";

export default async function handleRecommended(req, res) {
  await dbConnect();
  const getSearchMovieUrl = () =>
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.TMDB_API_KEY}`;

  const trending = await fetcher(getSearchMovieUrl());
  const history = await History.aggregate().sample(4);
  const watchlist = await Watchlist.aggregate().sample(4);

  if (history.length > 0 && watchlist.length > 0) {
    res.status(200).json({ watchlist, history, trending });
  } else {
    res.status(404).json({ found: false });
  }
}
