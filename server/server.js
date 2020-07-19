const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('../client/public'));


require('./routes/api-routes')(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
}

app.use('*', (request, response) => {
  console.log(`************************`)
  console.log(`*******App use**********`)
  console.log(`************************`)
  response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

console.log(`************************`)
console.log(`*******${PORT}**********`)
console.log(`************************`)

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  autoIndex: false,
  poolSize: 10,
  bufferMaxEntries: 0
};

const {
  MONGO_HOSTNAME,
  MONGO_DB,
  MONGO_PORT
} = process.env;

const dbConnectionURL = {
  'LOCALURL': `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`
};

mongoose.connect(dbConnectionURL.LOCALURL, options);
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Take-A-Hike",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }
// );





app.listen(PORT, () => {
  console.log(` server listening on port ${PORT}`);
});
