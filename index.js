const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const apiRouter = require("./routes/api");

const app = express();

require("./startup/db");

app.use(cors());
app.use(bodyParser.json());

app.use("/api", apiRouter);

app.listen(3030, () => {
  console.log("Server initiated...");
});
