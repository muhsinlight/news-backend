const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRouter = require('./routers/auth');
const newsRouter = require('./routers/news');

const { connectDb } = require('./models/index');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/news', newsRouter);

connectDb().then(() => {
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
  });
});
