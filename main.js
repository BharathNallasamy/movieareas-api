import express from "express"; // If this import has to work here, "type":"module" has to be added in the package.json.

const app = express();
const PORT = 6969;

app.get("/", (req, res) => {
  res.json({ msg: "Hello!" });
});

// CRUD functionalities of movies
// R - For Reading
app.get("/", ()=>{})
// C - For Creating movies 
app.post("/", ()=>{})
// U - For Updating movies
app.put("/:id", ()=>{})
// D - For Deleting movies
app.delete("/:id", ()=>{})

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});

// DRY => Don't repeat yourself
// KISS => Keep It Simple, Stupid

// If the port is already in use globally, then npx kill-port <port-number>