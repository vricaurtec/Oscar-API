import { Router } from "express";
import * as controllers from "../controllers/movies.js";
//import controller functions

const router = Router();

router.get("/", controllers.getMovies);
router.get("/:id", controllers.getMovie);
router.post("/", controllers.createMovies);
router.put("/:id", controllers.updateMovie);
router.delete("/:id", controllers.deleteMovie);
//Define my routes

export default router;
