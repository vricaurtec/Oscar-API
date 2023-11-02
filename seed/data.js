import db from "../db/connection.js";
import Movies from "../models/Movies.js";
import movies from "../db/movies.json" assert { type: "json" };
import chalk from "chalk";

const insertData = async () => {
  //Reset database
  await db.dropDatabase();
  //Insert Data
  await Movies.create(movies);

  console.log(chalk.magenta("Movies created!"));

  //Close DB Connection
  await db.close();
};
insertData();
