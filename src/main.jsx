import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/home/Home.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Category from "./Pages/category/Category.jsx";
import Login from "./Pages/login/Login.jsx";
import './styles/styles.css'
import ProtectedRouter from "./components/protected/ProtectedRouter.jsx";
import Profile from "./Pages/profile/Profile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/login" element={<Login />} />
          </Route>


        {/* auth router */}
        <Route element={<ProtectedRouter />}> 
                  <Route path="/profile" element={<Profile />}/>
                  <Route path="/profile/:id" element={<Profile />}/>
        </Route>
        </Routes>



      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
