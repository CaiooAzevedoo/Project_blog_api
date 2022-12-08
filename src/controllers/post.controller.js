const { postService } = require('../services');

const addNewPost = async (req, res) => {
  try {
    const post = req.body;
    await postService.addNewPost(post);

    if (!post) throw Error;

    return res.status(201).json({ post });
    } catch (err) {
    return res.status(400).json({ message: 'Some required fields are missing' });
    }
};

const getAllPost = async (_req, res) => {
  try {
    const allPost = await postService.getAllPost();
    if (!allPost) throw Error;
    return res.status(200).json(allPost);
  } catch (err) {
    return res.status(500).json({
      message: 'Error',
  });
  }
};

module.exports = {
  addNewPost,
  getAllPost,
};