import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./scenes/navbar";
import Error404 from "./scenes/error404/Error404";
import MainPage from "./scenes/mainPage";
import LoginPage from "./scenes/ogretmenLoginPage/loginPage";
import RegisterPage from "./scenes/ogretmenLoginPage/registerPage";
import OgretmenPage from "./scenes/ogretmenPage";
import OgrenciPage from "./scenes/ogrenciPage";
import OgrenciLoginPage from "./scenes/ogrenciLogin";

import OgretmenLoginPage from "./scenes/ogretmenLoginPage";
import OgreciBilgiPage from "./scenes/ogreciBilgiPage";
import OgretmenDuyuruPage from "./scenes/ogretmenDuyuruPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ogretmenLoginPage" element={<OgretmenLoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/ogrenciLogin" element={<OgrenciLoginPage />} />
          <Route path="/ogretmenHome" element={<OgretmenPage />} />
          <Route path="/ogrenciHome" element={<OgrenciPage />} />
          <Route path="/ogretmenDuyuru" element={<OgretmenDuyuruPage />} />
          <Route path="/ogrenciBilgileri" element={<OgreciBilgiPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
