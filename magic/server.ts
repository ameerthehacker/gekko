import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.EXPRESS_PORT || 8000;

app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
  const { functionName, functionParams } = req.body;
  // execute the actual function in the server
  const result = await require('../frontend/fs.server').default[functionName](...functionParams);
  // send the result over the wire
  res.json({
    result
  });
});

app.listen(PORT, () => {
  console.log(`express server running at port ${PORT}`);
});
