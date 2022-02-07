const express = require("express");
const api = require("./postgres");
const app = express();
const port = 3001;

const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:4001",
  })
);

app.use(express.json());
app.use(express.urlencoded());

app.get("/", api.index);

app.post("/order/:id", api.save);

app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});
