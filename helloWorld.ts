import express, { Request, Response } from "express";
const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World usando Express y TypeScript del grupo 6");
});

app.listen(port, () => {
  console.log(`El servidor está corriendo en http://localhost:${port}`);
});
