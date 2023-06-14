// OgrenciForm.js
import React, { useState } from "react";
import axios from "axios";

const OgretmenPost = () => {
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/posts/post", {
        ad,
        soyad,
        description,
      });

      console.log(response.data); // Başarılı mesajı veya hata işleme
    } catch (error) {
      console.error(error);
    }
    window.location.reload();
  };

  return (
    <div className="container mb-5">
      <div className="row">
        <h2>Akademisyen Paylaşımı</h2>
        <div className="col-sm">
          <form onSubmit={handleFormSubmit} className="container">
            <div className="row">
              <div className="col-sm">
                <input
                  className="form-control col-sm"
                  type="text"
                  placeholder="Akademisyen Adı"
                  value={ad}
                  onChange={(e) => setAd(e.target.value)}
                />
              </div>
              <div className="col-sm">
                <input
                  className="form-control col-sm"
                  type="text"
                  placeholder="Akademisyen Soyadı"
                  value={soyad}
                  onChange={(e) => setSoyad(e.target.value)}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm">
                <textarea
                  className="form-control"
                  type="text"
                  placeholder="Aklınızdan ne geçiyor..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                  Paylaş
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OgretmenPost;
