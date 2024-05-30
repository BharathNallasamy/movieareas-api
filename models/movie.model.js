import { Schema, model } from "mongoose";

// Write the schema
const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

// create your model
const Movie = model("movies", schema);

export default Movie;
