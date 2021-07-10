const express = require("express");

const app = express();

app.use(express.static("public"));

// ?Start listening
app.listen(3000);
// listen from server
