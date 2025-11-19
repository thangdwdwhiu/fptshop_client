import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [activeTab, setActiveTab] = useState("register");
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validateFullName = (name) => {
    return name.trim().length >= 3;
  };

  // Register validation
  const validateRegister = () => {
    const newErrors = {};

    if (!registerData.fullName.trim()) {
      newErrors.fullName = "Họ và tên là bắt buộc";
    } else if (!validateFullName(registerData.fullName)) {
      newErrors.fullName = "Họ và tên phải có ít nhất 3 ký tự";
    }

    if (!registerData.email.trim()) {
      newErrors.email = "Email là bắt buộc";
    } else if (!validateEmail(registerData.email)) {
      newErrors.email = "Email không hợp lệ (phải chứa @)";
    }

    if (!registerData.password) {
      newErrors.password = "Mật khẩu là bắt buộc";
    } else if (!validatePassword(registerData.password)) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Login validation
  const validateLogin = () => {
    const newErrors = {};

    if (!loginData.email.trim()) {
      newErrors.email = "Email là bắt buộc";
    } else if (!validateEmail(loginData.email)) {
      newErrors.email = "Email không hợp lệ (phải chứa @)";
    }

    if (!loginData.password) {
      newErrors.password = "Mật khẩu là bắt buộc";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (validateRegister()) {
      console.log("Register:", registerData);
      alert("Đăng ký thành công!");
      setRegisterData({ fullName: "", email: "", password: "" });
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateLogin()) {
      console.log("Login:", loginData);
      alert("Đăng nhập thành công!");
      setLoginData({ email: "", password: "" });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Header với logo */}
        <div className="login-header">
          <div className="logo-group">
            <img
              src="https://via.placeholder.com/80"
              alt="FPT ID"
              className="logo"
            />
            <span className="arrow">⇄</span>
            <img
              src="https://via.placeholder.com/80"
              alt="Shop"
              className="logo"
            />
          </div>
          <h1 className="login-title">Tài khoản sử dụng mọi dịch vụ 🌐</h1>
        </div>

        {/* Tabs */}
        <div className="tabs-container">
          <button
            className={`tab-button ${activeTab === "register" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("register");
              setErrors({});
            }}
          >
            Đăng ký
          </button>
          <button
            className={`tab-button ${activeTab === "login" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("login");
              setErrors({});
            }}
          >
            Đăng nhập
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "register" && (
          <form onSubmit={handleRegisterSubmit} className="form-container">
            <div className="form-group">
              <label htmlFor="fullName">
                Họ và tên <span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={registerData.fullName}
                onChange={handleRegisterChange}
                placeholder="Nhập họ và tên"
                className={`input-field ${errors.fullName ? "error" : ""}`}
              />
              {errors.fullName && (
                <span className="error-text">{errors.fullName}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="registerEmail">
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                id="registerEmail"
                name="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                placeholder="Nhập email"
                className={`input-field ${errors.email ? "error" : ""}`}
              />
              {errors.email && (
                <span className="error-text">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="registerPassword">
                Mật khẩu <span className="required">*</span>
              </label>
              <input
                type="password"
                id="registerPassword"
                name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                placeholder="Nhập mật khẩu (tối thiểu 6 ký tự)"
                className={`input-field ${errors.password ? "error" : ""}`}
              />
              {errors.password && (
                <span className="error-text">{errors.password}</span>
              )}
            </div>

            <button type="submit" className="submit-button">
              Đăng ký
            </button>

            <div className="divider">
              <span>Hoặc đăng ký bằng</span>
            </div>

            <div className="social-buttons">
              <button type="button" className="social-button qr">
                📱
              </button>
              <button type="button" className="social-button fingerprint">
                👆
              </button>
              <button type="button" className="social-button apple">
                🍎
              </button>
              <button type="button" className="social-button google">
                🔎
              </button>
              <button type="button" className="social-button facebook">
                📘
              </button>
            </div>

            <p className="note">
              Bằng cách tiếp tục, bạn đồng ý với{" "}
              <span className="link">Điều khoản</span> và{" "}
              <span className="link">Chính sách</span> bảo mật của FPT ID
            </p>
          </form>
        )}

        {activeTab === "login" && (
          <form onSubmit={handleLoginSubmit} className="form-container">
            <div className="form-group">
              <label htmlFor="loginEmail">
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                id="loginEmail"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                placeholder="Nhập email"
                className={`input-field ${errors.email ? "error" : ""}`}
              />
              {errors.email && (
                <span className="error-text">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="loginPassword">
                Mật khẩu <span className="required">*</span>
              </label>
              <input
                type="password"
                id="loginPassword"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                placeholder="Nhập mật khẩu"
                className={`input-field ${errors.password ? "error" : ""}`}
              />
              {errors.password && (
                <span className="error-text">{errors.password}</span>
              )}
            </div>

            <button type="submit" className="submit-button">
              Đăng nhập
            </button>

            <div className="divider">
              <span>Hoặc đăng nhập bằng</span>
            </div>

            <div className="social-buttons">
              <button type="button" className="social-button qr">
                📱
              </button>
              <button type="button" className="social-button fingerprint">
                👆
              </button>
              <button type="button" className="social-button apple">
                🍎
              </button>
              <button type="button" className="social-button google">
                🔎
              </button>
              <button type="button" className="social-button facebook">
                📘
              </button>
            </div>

            <p className="note">
              Bằng cách tiếp tục, bạn đồng ý với{" "}
              <span className="link">Điều khoản</span> và{" "}
              <span className="link">Chính sách</span> bảo mật của FPT ID
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
