import express, { Request, Response } from 'express';
import DotEnv from 'dotenv';

DotEnv.config();
const app = express();

const port: number = parseInt(process.env.APPLICATION_PORT) || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
