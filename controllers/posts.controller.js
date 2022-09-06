const { query } = require("express");

const getPosts = (req, res) => {
    res.status(200).send(`Get All Posts filtered by"${req.query.tittle}"`)
};

const getPost = (req, res) => {
  res.status(200).send("Get single post");
};

const createPost = (req, res) => {
  res.status(200).send("Create post");
};

const updatePost = (req, res) => {
  res.status(201)
  .send(`Post with ID ${req.params.postId} has been updated`);
};

const deletePost = (req, res) => {
  res.status(200).send("Delete post");
};

module.exports = {
    getPost,
    getPosts,
    createPost,
    updatePost,
    deletePost,
}