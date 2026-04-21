require('dotenv').config();
const express = require('express');
const cors = require('cors');
const boardRoutes = require('./routes/board');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/boards', boardRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
