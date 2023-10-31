import mongoose from "mongoose";

const Schema = mongoose.Schema;

let MoviesSchema = new Schema({
  name: { type: String },
  year: { type: Number },
  leading_actor_actress: { type: String },
  awards: [{ type: String }],
});
export default mongoose.model("movies", MoviesSchema);
