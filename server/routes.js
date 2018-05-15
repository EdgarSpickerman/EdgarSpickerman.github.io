const router = require("express").Router();

router
  .get("/", (req, res, next) => {
    res.send("this is the GET /api route");
  })

module.exports = router;