import express from "express";
import Ogretmen from "../models/Ogretmen.js";

const router = express.Router();

// Öğretmen kaydı
router.post("/kayit", async (req, res) => {
  try {
    const { ad, soyad, email, sifre } = req.body;

    // E-posta kontrolü
    const existingOgretmen = await Ogretmen.findOne({ email });
    if (existingOgretmen) {
      return res.status(400).json({ error: "Bu e-posta zaten kayıtlı." });
    }

    const ogretmen = new Ogretmen({ ad, soyad, email, sifre });
    await ogretmen.save();

    res.status(201).json({ message: "Öğretmen başarıyla kaydedildi." });
  } catch (error) {
    res.status(500).json({ error: "Bir hata oluştu, lütfen tekrar deneyin." });
  }
});

// Diğer API endpoint'lerini buraya ekleyebilirsiniz

export default router;
