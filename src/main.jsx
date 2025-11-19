import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import TrangChu from "./Pages/trangchu/TrangChu.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
              <Routes>

                    <Route path="/" element={<App />} >
                          <Route index element={<TrangChu />} />
                        
                    </Route>

              </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
