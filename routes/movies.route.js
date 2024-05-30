import express from "express";
import {
  GetMovies,
  MovieCreate,
  MovieUpdate,
  MovieDelete,
  MovieDetail,
} from "../controllers/movies.controller.js";

const router = express.Router();

// R - For Reading
router.get("/", GetMovies);

router.get("/:id", MovieDetail);

// C - For Creating movies
router.post("/", MovieCreate);

// U - For Updating movies
router.put("/:id", MovieUpdate);

// D - For Deleting movies
router.delete("/:id", MovieDelete);

export default router;
