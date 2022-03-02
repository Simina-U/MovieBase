import mongoose from "mongoose";

global.models = global.models || {};

global.models.History =
  global.models.History ||
  mongoose.model("History", {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    plot: { type: String, required: false },
    image: { type: String, required: false },
    runtime: { type: Number, required: false },
    genres: { type: Object, required: true },
    popularity: { type: Number, required: false },
    date: { type: Date, default: Date.now },
  });

export default global.models.History;
