import Movies from "../models/Movies.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await Movies.find();
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movies.findById(id);

    if (movie) {
      return res.json(movie);
    }

    res.status(404).json({ message: "movies not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createMovies = async (req, res) => {
  try {
    const movies = new Movies(req.body);
    await movies.save();
    res.status(201).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movies.findByIdAndUpdate(id, req.body);

    res.status(201).json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Movies.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Movie deleted!");
    }

    throw new Error("Movie not found!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
