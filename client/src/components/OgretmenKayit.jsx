import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OgretmenKayit = () => {
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/ogretmen/kayit",
        {
          ad,
          soyad,
          email,
          sifre,
        }
      );
      console.log(response.data); // Kayıt başarılı mesajını konsolda görüntüle
    } catch (error) {
      console.error(error);
    }
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-xxl-4 my-5 mx-auto">
          <h2 className="text-center">Akademisyen Kayıt</h2>
          <form onSubmit={handleRegister}>
            <div className="d-grid gap-2">
              <input
                className="form-control"
                type="text"
                placeholder="İsim"
                value={ad}
                onChange={(e) => setAd(e.target.value)}
              />
              <input
                className="form-control"
                type="text"
                placeholder="Soyisim"
                value={soyad}
                onChange={(e) => setSoyad(e.target.value)}
              />
              <input
                className="form-control"
                type="email"
                placeholder="E-posta"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="form-control"
                type="password"
                placeholder="Şifre"
                value={sifre}
                onChange={(e) => setSifre(e.target.value)}
              />
              <button type="submit" className="btn btn-success">
                Kayıt Ol
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OgretmenKayit;
