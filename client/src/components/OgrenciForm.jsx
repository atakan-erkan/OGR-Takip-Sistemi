// OgrenciForm.js
import React, { useState } from "react";
import axios from "axios";

const OgrenciForm = () => {
  const [ogr_no, setOgrNo] = useState("");
  const [ogr_ad, setOgrAd] = useState("");
  const [ogr_soyad, setOgrSoyad] = useState("");
  const [ogr_vize_not, setOgrVizeNot] = useState("");
  const [ogr_odev_not, setOgrOdevNot] = useState("");
  const [ogr_final_not, setOgrFinalNot] = useState("");
  const [ogr_devamsizlik, setOgrDevamsizlik] = useState("");
  const [ogr_mail, setOgrMail] = useState("");
  const [ogr_sifre, setOgrSifre] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/ogrenci/ekle", {
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

      console.log(response.data); // Başarılı mesajı veya hata işleme
    } catch (error) {
      console.error(error);
    }
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="row">
        <h2>Öğrenci Kayıt</h2>
        <div className="col-sm">
          <form onSubmit={handleFormSubmit} className="container">
            <div className="row">
              <div className="col-sm">
                <input
                  className="form-control col-sm"
                  type="text"
                  placeholder="Öğrenci Numarası"
                  value={ogr_no}
                  onChange={(e) => setOgrNo(e.target.value)}
                />
              </div>
              <div className="col-sm">
                <input
                  className="form-control col-sm"
                  type="text"
                  placeholder="Ad"
                  value={ogr_ad}
                  onChange={(e) => setOgrAd(e.target.value)}
                />
              </div>
              <div className="col-sm">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Soyad"
                  value={ogr_soyad}
                  onChange={(e) => setOgrSoyad(e.target.value)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-sm">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Vize Not"
                  value={ogr_vize_not}
                  onChange={(e) => setOgrVizeNot(e.target.value)}
                />
              </div>
              <div className="col-sm">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Ödev Not"
                  value={ogr_odev_not}
                  onChange={(e) => setOgrOdevNot(e.target.value)}
                />
              </div>
              <div className="col-sm">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Final Not"
                  value={ogr_final_not}
                  onChange={(e) => setOgrFinalNot(e.target.value)}
                />
              </div>
              <div className="col-sm">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Devamsızlık"
                  value={ogr_devamsizlik}
                  onChange={(e) => setOgrDevamsizlik(e.target.value)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-sm">
                <input
                  className="form-control"
                  type="email"
                  placeholder="E-posta"
                  value={ogr_mail}
                  onChange={(e) => setOgrMail(e.target.value)}
                />
              </div>
              <div className="col-sm">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Şifre"
                  value={ogr_sifre}
                  onChange={(e) => setOgrSifre(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm d-flex justify-content-center">
                <button
                  style={{ width: "200px" }}
                  type="submit"
                  className="btn btn-success float-end mt-2 fw-bold w-btn"
                >
                  Kaydet
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OgrenciForm;
