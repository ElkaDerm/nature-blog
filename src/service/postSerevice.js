const Post = require("../models/Post.js");
const User = require("../models/User.js");

async function addPost(postData, userId) {
  let createdPost = await Post.create(postData);

  let user = await User.findById(userId);
  user.myPosts.push(createdPost);

  return await user.save();
}
async function getAllPosts() {
  return await Post.find().lean();
}
async function getOnePost(postId) {
  return Post.findById(postId).populate("postVotes").populate("owner");
}
async function getOnePost(postId) {
  return Post.findById(postId);
}
async function updatePost(postId, newPost) {
  return Post.findByIdAndUpdate(postId, newPost);
}
async function removePost(postId) {
  return Post.findByIdAndDelete(postId);
}

async function addVotesUp(postId, userId) {
  let onePost = await Post.findById(postId);
  onePost.postVotes.push({ _id: userId });
  onePost.rating += 1;
  return await onePost.save();
}
async function addVotesDown(postId, userId) {
  let onePost = await Post.findById(postId);
  onePost.postVotes.push(userId);
  onePost.rating -= 1;
  return await onePost.save();
}

async function author(postId) {
  let onePost = await Post.findById(postId);
  let user = await User.findById(onePost.owner);

  return `${user.nameFirst} ${user.nameSecond}`;
}
async function getAllmyPost (userId) {

    const allPosts= await Post.find().populate('owner').lean()
    const myPosts= allPosts.filter(x=>x.owner._id==userId);
     return myPosts
 }

module.exports = {
  addPost,
  getAllPosts,
  getOnePost,
  getOnePost,
  updatePost,
  removePost,
  author,
  addVotesUp,
  addVotesDown,
  getAllmyPost,
};
