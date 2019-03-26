const express = require("express");

const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3000;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(routes);

app.listen(PORT, () => {
    console.log(` server listening on port https://localhost:${PORT}`);
})