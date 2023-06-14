import React from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-xxl-4 my-3 mx-auto"></div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-xxl-4 my-5 mx-auto">
          <div className="d-grid gap-2">
            <h2 className="fw-bold text-center">
              Birinci Sınıf <br /> Öğrenci Takip Sistemi
            </h2>
            <button
              className="btn btn-success"
              onClick={() => navigate(`/ogrenciLogin`)}
            >
              Öğrenci Girişi
            </button>
            <button
              className="btn btn-dark"
              onClick={() => navigate(`/ogretmenLoginPage`)}
            >
              Akademisyen Girişi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
