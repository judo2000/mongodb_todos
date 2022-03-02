const router = require("express").Router();
const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
} = require("../../../controllers/blogController");

router.route("/").post(createBlog).get(getBlogs);

router
  .route("/:blogId")
  .get(getBlogById)
  .put(updateBlogById)
  .delete(deleteBlogById);

module.exports = router;
