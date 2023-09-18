const express = require("express");
const app = express();
const port = 3000;

let numberOfBottles = 99;

app.get("/", (req, res) => {
  res.send(
    `<h1> ${numberOfBottles} Bottles of Saki on the Wall</h1>
    <a href="/${numberOfBottles - 1}">Take one down, pass it around</a>`
  );
});

app.get("/:numberofbottles", (req, res) => {
  res.send(
    `<h1>${req.params.numberofbottles} Bottles of Saki on the Wall</h1>
    <a href="/${
      req.params.numberofbottles - 1
    }">Take one down, pass it around</a>`
  );
});

app.listen(port, () => {
  console.log("Listening on port", port);
});
