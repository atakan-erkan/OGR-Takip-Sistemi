import React from "react";
import { useNavigate } from "react-router-dom";

function OgretmenLoginPage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-xxl-4 my-5 mx-auto"></div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-xxl-4 my-5 mx-auto">
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary"
              onClick={() => navigate(`/login`)}
            >
              Akademisyen Giriş
            </button>
            <button
              className="btn btn-success"
              onClick={() => navigate(`/register`)}
            >
              Akademisyen Kayıt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OgretmenLoginPage;
