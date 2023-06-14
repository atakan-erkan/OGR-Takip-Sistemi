import React from "react";
import { useNavigate } from "react-router-dom";
import "./OgrenciPage.css";

function OgrenciPage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8"></div>
        <div className="col-sm-4">
          <div className="col-sm">
            <button
              className="btn btn-success me-3"
              onClick={() => navigate(`/ogretmenDuyuru`)}
            >
              Akademisyen Duyuruları
            </button>

            <button
              className="btn btn-success"
              onClick={() => navigate(`/ogrenciBilgileri`)}
            >
              Öğrenci Profili
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <h3>DUYURULAR</h3>
        <div className="row mt-5">
          <div className="col-sm-1">
            <div className="tarih">
              <div className="ay">Haziran</div>
              <div className="gun">02</div>
            </div>
          </div>
          <div className="col-sm-11">
            <div class="media-body">
              <h4 class="media-heading">
                Yaz Okulunda Başka Bir Üniversiteden Ders Alacak Öğrencilerin
                Dikkatine
              </h4>
              <p>
                -Başka fakülte veya üniversitelerden ders almak isteyen
                öğrenciler “Başka Bir Üniversiteden Ders Alma Talep Formunu”
                eksiksiz olarak doldurulduktan sonra Bölüm Başkanının uygun
                görüşünü ve ayrıca Fakülte Yönetim Kurulunun onayını almak
                zorundadırlar. Fakülte Yönetim Kurulu onayı alınmadan başka bir
                üniversiteden ders alınamaz, alınması halinde de geçersiz kabul
                edilir. (Öğrencilerimizin Başka bir Üniversiteden Ders Alma
                Talep Formu'nu doldurup çıktısını alarak imzalamaları ve ekleri
                (ders programı ve ders içerikleri) ile birlikte
                rabia.uyar@dpu.edu.tr veya gulistan.colak@dpu.edu.tr e-posta
                adresine PDF formatında göndermelidirler)
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-1">
            <div className="tarih">
              <div className="ay">Haziran</div>
              <div className="gun">09</div>
            </div>
          </div>
          <div className="col-sm-11">
            <div class="media-body">
              <h4 class="media-heading">
                Mezuniyet Töreni Etkinlikleri İçin Cübbe ve Kep Satın Almak
                İsteyen Öğrencilerimiz
              </h4>
              <p>
                Üniversitemiz Mezuniyet Töreni için kep ve cübbe satışları DPÜ
                Dükkan tarafından gerçekleştirilecektir. Satışlar internet
                sitesi üzerinden çevrim içi olarak yapılacaktır. Kep ve cübbe
                teslimatları 3 Temmuz Pazartesi gününden itibaren yapılacak olup
                daha önceki bir tarihte teslimat kesinlikle yapılmayacaktır.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-1">
            <div className="tarih">
              <div className="ay">Haziran</div>
              <div className="gun">08</div>
            </div>
          </div>
          <div className="col-sm-11">
            <div class="media-body">
              <h4 class="media-heading">
                2022-2023 Bahar Dönemi Final Sınav Programı
              </h4>
              <p>
                Bölümümüzde yapılan sınavlarda uyulması gereken kuralları iyi
                inceleyiniz. Sınav Kuralları için tıklayınız. 2022-2023 Bahar
                Dönemi Final Sınav Programı için tıklayınız.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-1">
            <div className="tarih">
              <div className="ay">Mayıs</div>
              <div className="gun">31</div>
            </div>
          </div>
          <div className="col-sm-11">
            <div class="media-body">
              <h4 class="media-heading">
                Mühendislik Çözümlemesi/mühendislik Tasarımı ve Bitirme Projesi
                Dersi Fyk Kararı Hakkında
              </h4>
              <p>
                2 Eylül 2019 tarihli 2019.Senato.235 sayılı Senato kararı gereği
                2019 yılı girişli ve sonrası öğrencilerin "1. ve 2. sınıftan
                dersleri olması halinde 4.sınıftan zorunlu çözümleme, tasarım,
                proje derslerini alamaz" kararı olmasına rağmen OBS sisteminden
                kaynaklı sorundan dolayı bu hatadan etkilenebilecek bölüm
                öğrencilerinin durumları üzerine görüşülmüştür.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-1">
            <div className="tarih">
              <div className="ay">Şubat</div>
              <div className="gun">23</div>
            </div>
          </div>
          <div className="col-sm-11">
            <div class="media-body">
              <h4 class="media-heading">
                2022-2023 Bahar Döneminde Staj Başvurusu Yapacak Olan
                Öğrencilerimizin Dikkatine
              </h4>
              <p>
                2022-2023 bahar döneminde bölümümüzün dersleri uzaktan eğitim
                ile yürütüleceğinden, bahar dönemi içinde staj başvurusu yapacak
                olan öğrencilerimiz staj başvurularını e-mail yoluyla
                yapabilecektir. Staj başvurusu için hazırlanan belgeler, ilgili
                tarihlerde eksiksiz olarak ve PDF dosya formatında, staj
                komisyonundaki öğretim elemanlarından yalnızca birinin kurumsal
                e-mail adresine gönderilmelidir. Belgeleriniz kontrol edildikten
                sonra bir eksiklik yok ise onaylı Staj Sicil Fişiniz size tekrar
                e-posta yoluyla gönderilecektir. Staj başvuruları, yalnızca daha
                önce duyurulan ve ekte de verilen dökümanda belirtilen
                tarihlerde yapılabilecektir. Bu tarihler dışında gönderilen
                başvuru mailleri dikkate alınmayacaktır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OgrenciPage;
