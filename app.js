require("dotenv/config");

const express = require("express");
const app = express();

require("./config")(app);

const projectName = "LAB  | Axios CRUD exercise";
app.locals.appTitle = `${projectName}`;

const index = require("./routes/index.routes");
app.use("/", index);

app.use('/',require('./routes/crud-exercise.routes'))

require("./error-handling")(app);

module.exports = app;
