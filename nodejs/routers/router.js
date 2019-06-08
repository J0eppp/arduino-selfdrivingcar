const router = require("express").Router();
const postRouter = require("./postRouter");
const apiRouter = require("./apiRouter");

router.use("/api/", apiRouter);
router.post(postRouter);

router.get("/", (req, res) => {
  res.send("Homepage")
});

router.get("/radar/", (req, res) => {
  res.render("radar");
});

module.exports = router;
