import axios from "axios";
import React, { useEffect, useState } from "react";

function OgrenciListesi() {
  const [ogrenciler, setOgrenciler] = useState([]);
  const [newOgrNo, setNewOgrNo] = useState("");
  const [newOgrAd, setNewOgrAd] = useState("");
  const [newOgrSoyad, setNewOgrSoyad] = useState("");
  const [newOgrVizeNot, setNewOgrVizeNot] = useState("");
  const [newOgrOdevNot, setNewOgrOdevNot] = useState("");
  const [newOgrFinalNot, setNewOgrFinalNot] = useState("");
  const [newOgrDevamsizlik, setNewOgrDevamsizlik] = useState("");
  const [newOgrMail, setNewOgrMail] = useState("");
  const [newOgrSifre, setNewOgrSifre] = useState("");

  const getOgrenciler = async () => {
    try {
      const response = await axios.get("http://localhost:3001/tum-ogrenciler");

      setOgrenciler(response.data.ogrenciler[ogrenciler.length]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getOgrenciler();
  }, []);
  useEffect(() => {
    console.log(ogrenciler);
  }, [ogrenciler]);
  const handleGuncelle = async (id) => {
    try {
      const updatedOgrenci = {};

      if (newOgrNo !== "") {
        updatedOgrenci.ogr_no = newOgrNo;
      }
      if (newOgrAd !== "") {
        updatedOgrenci.ogr_ad = newOgrAd;
      }
      if (newOgrSoyad !== "") {
        updatedOgrenci.ogr_soyad = newOgrSoyad;
      }
      if (newOgrVizeNot !== "") {
        updatedOgrenci.ogr_vize_not = newOgrVizeNot;
      }
      if (newOgrOdevNot !== "") {
        updatedOgrenci.ogr_odev_not = newOgrOdevNot;
      }
      if (newOgrFinalNot !== "") {
        updatedOgrenci.ogr_final_not = newOgrFinalNot;
      }
      if (newOgrDevamsizlik !== "") {
        updatedOgrenci.ogr_devamsizlik = newOgrDevamsizlik;
      }
      if (newOgrMail !== "") {
        updatedOgrenci.ogr_mail = newOgrMail;
      }
      if (newOgrSifre !== "") {
        updatedOgrenci.ogr_sifre = newOgrSifre;
      }

      if (Object.keys(updatedOgrenci).length === 0) {
        console.log("Değişiklik yapmadınız.");
        return;
      }

      const response = await axios.put(
        `http://localhost:3001/ogrenci/guncelle/${id}`,
        updatedOgrenci
      );

      console.log(response.data); // Başarılı mesajı veya hata işleme

      // Güncelleme işleminden sonra öğrenci listesini yenilemek için
      getOgrenciler();
      setTimeout(() => {
        window.location.reload();
      }, 1);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSil = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/ogrenci/sil/${id}`
      );

      console.log(response.data); // Başarılı mesajı veya hata işleme
    } catch (error) {
      console.error(error);
    }
    window.location.reload();
  };

  return (
    <div className="container-fluid">
      <h1>Öğrenci Listesi</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Öğrenci No</th>
            <th scope="col">Ad</th>
            <th scope="col">Soyad</th>
            <th scope="col">Notlar</th>
            <th scope="col">Devamsızlık</th>
            <th scope="col">Mail</th>
            <th scope="col">Şifre</th>
            <th scope="col">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {ogrenciler.map((ogrenci, i) => (
            <tr key={ogrenci._id}>
              <th scope="row">{Number(i + 1)}</th>
              <td>{ogrenci.ogr_no}</td>
              <td>{ogrenci.ogr_ad}</td>
              <td>{ogrenci.ogr_soyad}</td>
              <td>
                <td>
                  <b>Vize:</b> {ogrenci.ogr_vize_not} <b>Ödev:</b>{" "}
                  {ogrenci.ogr_odev_not} <b>Final:</b> {ogrenci.ogr_final_not}
                </td>
              </td>
              <td>{ogrenci.ogr_devamsizlik}</td>
              <td>{ogrenci.ogr_mail}</td>
              <td>{ogrenci.ogr_sifre}</td>
              <td>
                <button
                  className="btn btn-warning me-3 fw-bold"
                  onClick={() => handleGuncelle(ogrenci._id)}
                >
                  Güncelle
                </button>
                <button
                  className="btn btn-danger fw-bold"
                  onClick={() => handleSil(ogrenci._id)}
                >
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Öğrenci Güncelleme Formu</h2>
      <div className="row">
        <div className="col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Öğrenci No"
            value={newOgrNo}
            onChange={(e) => setNewOgrNo(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Ad"
            value={newOgrAd}
            onChange={(e) => setNewOgrAd(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Soyad"
            value={newOgrSoyad}
            onChange={(e) => setNewOgrSoyad(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Vize Not"
            value={newOgrVizeNot}
            onChange={(e) => setNewOgrVizeNot(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Ödev Not"
            value={newOgrOdevNot}
            onChange={(e) => setNewOgrOdevNot(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Final Not"
            value={newOgrFinalNot}
            onChange={(e) => setNewOgrFinalNot(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Devamsızlık"
            value={newOgrDevamsizlik}
            onChange={(e) => setNewOgrDevamsizlik(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-2 mb-5">
        <div className="col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Mail"
            value={newOgrMail}
            onChange={(e) => setNewOgrMail(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Şifre"
            value={newOgrSifre}
            onChange={(e) => setNewOgrSifre(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default OgrenciListesi;
