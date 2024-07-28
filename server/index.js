import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Welcome to afrishop API service');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

export default app;
