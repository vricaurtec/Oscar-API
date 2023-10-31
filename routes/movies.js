import { Router } from "express";
import * as controllers from "../controllers/movies.js";
//import controller functions

const router = Router();

router.get("/", controllers.getmovies);
router.get("/movies/:id", controllers.getmovies);
router.post("/", controllers.createMovies);
router.put("/movies/:id", controllers.updateMovies);
router.delete("/movies/:id", controllers.deleteMovies);
//Define my routes

export default router;
