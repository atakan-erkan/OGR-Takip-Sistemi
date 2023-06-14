import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OgrenciGiris = () => {
  const [ogr_mail, setOgrMail] = useState("");
  const [ogr_sifre, setOgrSifre] = useState("");
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/auth/ogrenci-giris",
        {
          ogr_mail,
          ogr_sifre,
        }
      );

      console.log(response.data); // Başarılı giriş mesajı veya hata işleme
      navigate("/ogrenciHome");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-xxl-4 my-5 mx-auto"></div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-xxl-4 my-5 mx-auto">
          <div className="d-grid gap-2">
            <h2 className=" text-center">Öğrenci Girişi</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="d-grid gap-2">
                <input
                  className="form-control"
                  type="email"
                  placeholder="E-posta"
                  value={ogr_mail}
                  onChange={(e) => setOgrMail(e.target.value)}
                />
                <input
                  className="form-control"
                  type="password"
                  placeholder="Şifre"
                  value={ogr_sifre}
                  onChange={(e) => setOgrSifre(e.target.value)}
                />
                <button className="btn btn-primary" type="submit">
                  Giriş Yap
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OgrenciGiris;
