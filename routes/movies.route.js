import express from "express";
import {
  MovieIndex,
  MovieCreate,
  MovieUpdate,
  MovieDelete,
} from "../controllers/movies.controller.js";

const router = express.Router();

// R - For Reading
router.get("/", MovieIndex);

// C - For Creating movies
router.post("/", MovieCreate);

// U - For Updating movies
router.put("/:id", MovieUpdate);

// D - For Deleting movies
router.delete("/:id", MovieDelete);

export default router;
