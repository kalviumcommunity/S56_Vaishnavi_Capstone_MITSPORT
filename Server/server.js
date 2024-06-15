const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes');
require('dotenv').config();
const {Mitsport} = require('./models/sport.js');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/sport', router);
app.use(router);

mongoose.connect(process.env.URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Database connection error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post('/register', async (req, res) => {
  console.log('Received registration data:', req.body);
  try {
    const newRegistration = new Mitsport(req.body);
    await newRegistration.save();
    res.status(201).json(newRegistration);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
