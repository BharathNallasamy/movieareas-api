import express from "express"; // Ensure "type": "module" is added in package.json.
import movieRoutes from "./routes/movies.route.js";

const app = express();
const PORT = 6969;

app.get("/", (req, res) => {
  res.json({ msg: "Hello!" });
});

// CRUD functionalities of movies
// CLIENT -> MIDDLEWARE -> SERVER
app.use("/movies", movieRoutes);

app
  .listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
  })
  .on("error", (err) => {
    console.error("Error starting server:", err);
  });

// DRY => Don't repeat yourself
// KISS => Keep It Simple, Stupid

// If the port is already in use globally, then npx kill-port <port-number>
