import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("HELLO");
});

app.post("/order/:id", (req: Request, res: Response) => {
  res.send("HELLO");
});
app.listen(5002, () => console.log("Server running"));
