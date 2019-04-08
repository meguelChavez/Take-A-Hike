const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});
require('./routes/api-routes')(app);

app.listen(PORT, () => {
  console.log(` server listening on port ${PORT}`);
});
