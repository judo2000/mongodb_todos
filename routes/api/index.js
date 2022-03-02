const router = require("express").Router();
const userRoutes = require("./user/index");
const todoRoutes = require("./todo/index");
const blogRoutes = require("./blog/index");

router.use("/users", userRoutes);
router.use("/todos", todoRoutes);
router.use("/blogs", blogRoutes);

module.exports = router;
