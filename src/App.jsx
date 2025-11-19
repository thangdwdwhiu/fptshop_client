import { Routes, Route } from "react-router-dom";
import Login from "./Pages/login/Login";
import TrangChu from "./Pages/trangchu/TrangChu";
import DanhMuc from "./Pages/danhmuc/DanhMuc";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TrangChu />} />
      <Route path="/login" element={<Login />} />
      <Route path="/danh-muc" element={<DanhMuc />} />
    </Routes>
  );
}

export default App;
