import Movies from "../models/Movies.js";

export const getmovies = async (req, res) => {
  try {
    const movies = await Movies.find({});
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getmovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await Movies.findById(id);

    if (movies) {
      return res.json(movies);
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

export const updateMovies = async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await Awards.findByIdAndUpdate(id, req.body);

    res.status(201).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteMovies = async (req, res) => {
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
