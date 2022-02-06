import express, { Application, Request, Response } from "express";

const cors = require("cors");

const app: Application = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req: Request, res: Response) => {
  res.send("HELLO");
});

app.post("/order/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  console.log("REQ", req.body);
  res.send(id);
});
app.listen(5002, () => console.log("Server running"));
