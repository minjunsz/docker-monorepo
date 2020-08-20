import express, { Request, Response } from 'express'
import cors from 'cors';

const app = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("server is running");
})

const port = 4000;
app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
})