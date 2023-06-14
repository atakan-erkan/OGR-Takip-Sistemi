import mongoose from "mongoose";

const ogretmenSchema = new mongoose.Schema({
  ad: { type: String, required: true },
  soyad: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  sifre: { type: String, required: true },
});

const Ogretmen = mongoose.model("Ogretmen", ogretmenSchema);

export default Ogretmen;
