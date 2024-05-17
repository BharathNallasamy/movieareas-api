export const MovieIndex = (req, res) => {
  res.send("Get all movies lists");
};

export const MovieCreate = (req, res) => {
  // res.send("Create a movie");
  // id, title, desc
  console.log(req.body);
  return res.json(req.body)
  // Create the movie Info.

};

export const MovieUpdate = (req, res) => {
  res.send("Update a movie");
};

export const MovieDelete = (req, res) => {
  res.send("Delete a movie");
};
