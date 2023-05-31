import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.EXPRESS_PORT || 8000;

app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {

});

app.listen(PORT, () => {
  console.log(`express server running at port ${PORT}`);
});
