const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(morgan("combined"));

app.get("/tin-tuc", (req, res) => {
  var a = 1,
    b = 2;
  var c = a + b;

  res.send(`Hello world ${c}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
