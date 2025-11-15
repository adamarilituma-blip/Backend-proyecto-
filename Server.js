require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const gamesRouter = require('./routes/games');

const app = express();
app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/gametracker';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Error MongoDB:', err.message));

app.use('/api/games', gamesRouter);

app.get('/', (req,res)=> res.json({ message: 'API GameTracker funcionando' }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('Servidor en puerto', PORT));
