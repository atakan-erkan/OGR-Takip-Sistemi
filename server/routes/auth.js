import express from "express";
import Ogrenci from "../models/Ogrenci.js";
import Ogretmen from "../models/Ogretmen.js";

const router = express.Router();

// Öğretmen giriş
router.post("/ogretmen-giris", async (req, res) => {
  try {
    const { email, sifre } = req.body;

    // E-posta ve şifre kontrolü
    const ogretmen = await Ogretmen.findOne({ email });
    if (!ogretmen || sifre !== ogretmen.sifre) {
      return res.status(401).json({ error: "E-posta veya şifre hatalı." });
    }
    res.status(200).json({ message: "Giriş başarılı.", ogretmen });
  } catch (error) {
    res.status(500).json({ error: "Bir hata oluştu, lütfen tekrar deneyin." });
  }
});

// Öğrenci giriş
router.post("/ogrenci-giris", async (req, res) => {
  try {
    const { ogr_mail, ogr_sifre } = req.body;

    // E-posta ve şifre kontrolü
    const ogrenci = await Ogrenci.findOne({ ogr_mail });
    if (!ogrenci || ogr_sifre !== ogrenci.ogr_sifre) {
      return res.status(401).json({ error: "E-posta veya şifre hatalı." });
    }

    res.status(200).json({ message: "Giriş başarılı.", ogrenci });
  } catch (error) {
    res.status(500).json({ error: "Bir hata oluştu, lütfen tekrar deneyin." });
  }
});

export default router;
