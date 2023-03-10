const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.set("strictQuery", false);
mongoose.connect(uri,{});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const constellationsRouter = require('./routes/constellations');
const starsRouter = require('./routes/stars');

app.use('/constellations', constellationsRouter);
app.use('/stars', starsRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})