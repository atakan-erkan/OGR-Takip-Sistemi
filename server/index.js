import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import ogrenciRoutes from "./routes/ogrenci.js";
import ogretmenRoutes from "./routes/ogretmen.js";
import postsRoutes from "./routes/posts.js";
import Ogrenci from "./models/Ogrenci.js";

dotenv.config();
const app = express();
// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/auth", authRoutes);
app.use("/ogrenci", ogrenciRoutes);
app.use("/ogretmen", ogretmenRoutes);
app.use("/posts", postsRoutes);

// Tüm öğrenciler
app.get("/tum-ogrenciler", async (req, res) => {
  try {
    const ogrenciler = [await Ogrenci.find()];

    res.status(200).json({ ogrenciler });
  } catch (error) {
    res.status(500).json({ error: "Bir hata oluştu, lütfen tekrar deneyin." });
  }
});
app.get("/ogrenciId", async (req, res) => {
  try {
    const { id } = req.body;

    const ogrenci = await Ogrenci.findOne(id);

    res.status(200).json({ ogrenci });
  } catch (error) {
    res.status(500).json({ error: "Bir hata oluştu, lütfen tekrar deneyin." });
  }
});

// Database connection
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`${error} did not connect`);
  });
// Start the server
