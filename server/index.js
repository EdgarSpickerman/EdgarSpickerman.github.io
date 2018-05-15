const express = require("express");
const routes = require("./routes");
const path = require("path");
const webServer = express();

webServer
  .use(express.static(path.join(__dirname,"../build")))
  .use("/api", routes)
  .use((req, res, next) => {
    const err = new Error("not found");
    err.status = 404;
    next(err);
  })
  .use((err, req, res, next) => {
    if(err.status === 404) return res.json(err);
    res.sendStatus(500).json(err);
  })

module.exports = webServer;