import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

router.post("/post", async (req, res) => {
  try {
    const { ad, soyad, description } = req.body;

    const post = new Post({
      ad,
      soyad,
      description,
    });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
});

router.get("/post", async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});
export default router;
