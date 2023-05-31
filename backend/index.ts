import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = process.env.EXPRESS_PORT || 8000;

app.use(cors());

app.get('/fs/readfile', async (_, res) => {
  const fileContent = await fs.readFile(
    path.resolve(__dirname, './sample.txt'), { encoding: 'utf-8' }
  );

  res.json({
    fileContent
  });
});

app.listen(PORT, () => {
  console.log(`express server running at port ${PORT}`)
});
