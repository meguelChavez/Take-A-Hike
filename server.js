const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Take-A-Hike");


require('./routes/api-routes')(app);

app.listen(PORT, () => {
  console.log(` server listening on port ${PORT}`);
});
