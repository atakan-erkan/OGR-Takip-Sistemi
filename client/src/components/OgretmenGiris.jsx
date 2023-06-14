import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OgretmenGiris = () => {
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/auth/ogretmen-giris",
        {
          email,
          sifre,
        }
      );

      console.log(response.data); // Başarılı giriş mesajı veya hata işleme
      navigate("/ogretmenHome");
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
          <h2 className="text-center">Akademisyen Girişi</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="d-grid gap-2">
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
              <button type="submit" className="btn btn-primary">
                Giriş Yap
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OgretmenGiris;
