import express from "express";

const router = express.Router();

// R - For Reading
router.get("/", (req, res) => {
  res.send("Get all movies");
});

// C - For Creating movies
router.post("/", (req, res) => {
  res.send("Create a movie");
});

// U - For Updating movies
router.put("/:id", (req, res) => {
  res.send("Update a movie");
});

// D - For Deleting movies
router.delete("/:id", (req, res) => {
  res.send("Delete a movie");
});

export default router;
