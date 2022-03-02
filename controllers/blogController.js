const { Blog } = require("../model");

module.exports = {
  createBlog: async (req, res) => {
    const { description, userId } = req.body;
    try {
      const newBlog = await Blog.create({ description, userId });
      res.json(newBlog);
    } catch (e) {
      res.json(e);
    }
  },
  getBlogs: async (req, res) => {
    try {
      const blogs = await Blog.find().populate({
        path: "userId",
        select: "-role -powerLevel -email -hobbies",
      });
      res.json(blogs);
    } catch (e) {
      res.json(e);
    }
  },
  getBlogById: async (req, res) => {
    const { blogId } = req.params;
    try {
      const blog = await Blog.findById(blogId);
      res.json(blog);
    } catch (e) {
      res.json(e);
    }
  },
  updateBlogById: async (req, res) => {
    const { blogId } = req.params;
    try {
      const updatedBlog = await Blug.findByIdAndUpdate(
        blogId,
        { ...req.body },
        {
          new: true,
        }
      );
      res.json(updatedBlog);
    } catch (e) {
      res.json(e);
    }
  },
  deleteBlogById: async (req, res) => {
    const { blogId } = req.params;
    try {
      const deletedBlog = await Blog.findOneAndDelete(blogId);
      res.json(deletedBlog);
    } catch (e) {
      res.json(e);
    }
  },
};
