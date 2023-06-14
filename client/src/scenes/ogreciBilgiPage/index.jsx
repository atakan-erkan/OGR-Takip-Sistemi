import axios from "axios";
import React, { useEffect, useState } from "react";

function OgreciBilgiPage() {
  const [ogrenci, setOgrenci] = useState([]);

  const getOgrenci = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/ogrenciId`);

      setOgrenci(response.data.ogrenci);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getOgrenci();
  }, []);
  return (
    <div className="container-fluid">
      <h1>Öğrenci Bilgileri</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Öğrenci No</th>
            <th scope="col">Ad</th>
            <th scope="col">Soyad</th>
            <th scope="col">Notlar</th>
            <th scope="col">Devamsızlık</th>
            <th scope="col">Mail</th>
            <th scope="col">Şifre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ogrenci.ogr_no}</td>
            <td>{ogrenci.ogr_ad}</td>
            <td>{ogrenci.ogr_soyad}</td>
            <td>
              <td>
                <b>Vize:</b> {ogrenci.ogr_vize_not}
              </td>
              <td>
                <b>Ödev:</b> {ogrenci.ogr_odev_not}
              </td>
              <td className="me-5">
                <b>Final:</b> {ogrenci.ogr_final_not}
              </td>
            </td>
            <td>{ogrenci.ogr_devamsizlik}</td>
            <td>{ogrenci.ogr_mail}</td>
            <td>{ogrenci.ogr_sifre}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OgreciBilgiPage;
