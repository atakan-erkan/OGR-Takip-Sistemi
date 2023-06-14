import mongoose from "mongoose";

const ogrenciSchema = new mongoose.Schema({
  ogr_no: { type: String, required: true, unique: true },
  ogr_ad: { type: String, required: true },
  ogr_soyad: { type: String, required: true },
  ogr_vize_not: { type: Number },
  ogr_odev_not: { type: Number },
  ogr_final_not: { type: Number },
  ogr_devamsizlik: { type: Number },
  ogr_mail: { type: String, required: true, unique: true },
  ogr_sifre: { type: String, required: true },
});

const Ogrenci = mongoose.model("Ogrenci", ogrenciSchema);

export default Ogrenci;
