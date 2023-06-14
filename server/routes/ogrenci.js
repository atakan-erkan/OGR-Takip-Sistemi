// ogrenci.js
import express from "express";
import Ogrenci from "../models/Ogrenci.js";

const router = express.Router();

// Öğrenci ekleme
router.post("/ekle", async (req, res) => {
  try {
    const {
      ogr_no,
      ogr_ad,
      ogr_soyad,
      ogr_vize_not,
      ogr_odev_not,
      ogr_final_not,
      ogr_devamsizlik,
      ogr_mail,
      ogr_sifre,
    } = req.body;

    // E-posta kontrolü
    const existingOgrenci = await Ogrenci.findOne({ ogr_mail });
    if (existingOgrenci) {
      return res.status(400).json({ error: "Bu e-posta zaten kayıtlı." });
    }

    const ogrenci = new Ogrenci({
      ogr_no,
      ogr_ad,
      ogr_soyad,
      ogr_vize_not,
      ogr_odev_not,
      ogr_final_not,
      ogr_devamsizlik,
      ogr_mail,
      ogr_sifre,
    });
    await ogrenci.save();

    res.status(201).json({ message: "Öğrenci başarıyla sisteme eklendi." });
  } catch (error) {
    res.status(500).json({ error: "Bir hata oluştu, lütfen tekrar deneyin." });
  }
});

// Öğrenci güncelleme
router.put("/guncelle/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      ogr_no,
      ogr_ad,
      ogr_soyad,
      ogr_vize_not,
      ogr_odev_not,
      ogr_final_not,
      ogr_devamsizlik,
      ogr_mail,
      ogr_sifre,
    } = req.body;

    const ogrenci = await Ogrenci.findByIdAndUpdate(
      id,
      {
        ogr_no,
        ogr_ad,
        ogr_soyad,
        ogr_vize_not,
        ogr_odev_not,
        ogr_final_not,
        ogr_devamsizlik,
        ogr_mail,
        ogr_sifre,
      },
      { new: true }
    );

    if (!ogrenci) {
      return res.status(404).json({ error: "Öğrenci bulunamadı." });
    }

    res
      .status(200)
      .json({ message: "Öğrenci bilgileri güncellendi.", ogrenci });
  } catch (error) {
    res.status(500).json({ error: "Bir hata oluştu, lütfen tekrar deneyin." });
  }
});

// Öğrenci silme
router.delete("/sil/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const ogrenci = await Ogrenci.findByIdAndDelete(id);

    if (!ogrenci) {
      return res.status(404).json({ error: "Öğrenci bulunamadı." });
    }

    res.status(200).json({ message: "Öğrenci silindi.", ogrenci });
  } catch (error) {
    res.status(500).json({ error: "Bir hata oluştu, lütfen tekrar deneyin." });
  }
});

export default router;
