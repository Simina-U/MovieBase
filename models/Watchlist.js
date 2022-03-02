import mongoose from "mongoose";

global.models = global.models || {};

global.models.Watchlist =
  global.models.Watchlist ||
  mongoose.model("Watchlist", {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    plot: { type: String, required: false },
    image: { type: String, required: false },
    runtime: { type: Number, required: false },
    genres: { type: Object, required: true },
    popularity: { type: Number, required: false },
    dateAdded: { type: Date, default: Date.now },
  });

export default global.models.Watchlist;
