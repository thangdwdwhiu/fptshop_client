import { useState } from "react";
import styles from "./Login.module.css";

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
    <div className={styles.login_container}>
      <div className={styles.login_card}>
        {/* Header với logo */}
        <div className={styles.login_header}>
          <div className={styles.logo_group}>
            <img
              src="https://via.placeholder.com/80"
              alt="FPT ID"
              className={styles.logo}
            />
            <span className={styles.arrow}>⇄</span>
            <img
              src="https://via.placeholder.com/80"
              alt="Shop"
              className={styles.logo}
            />
          </div>
          <h1 className={styles.login_title}>
            Tài khoản sử dụng mọi dịch vụ 🌐
          </h1>
        </div>

        {/* Tabs */}
        <div className={styles.tabs_container}>
          <button
            className={`${styles.tab_button} ${
              activeTab === "register" ? styles.tab_button_active : ""
            }`}
            onClick={() => {
              setActiveTab("register");
              setErrors({});
            }}
          >
            Đăng ký
          </button>
          <button
            className={`${styles.tab_button} ${
              activeTab === "login" ? styles.tab_button_active : ""
            }`}
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
          <form
            onSubmit={handleRegisterSubmit}
            className={styles.form_container}
          >
            <div className={styles.form_group}>
              <label htmlFor="fullName">
                Họ và tên <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={registerData.fullName}
                onChange={handleRegisterChange}
                placeholder="Nhập họ và tên"
                className={`${styles.input_field} ${
                  errors.fullName ? styles.input_field_error : ""
                }`}
              />
              {errors.fullName && (
                <span className={styles.error_text}>{errors.fullName}</span>
              )}
            </div>

            <div className={styles.form_group}>
              <label htmlFor="registerEmail">
                Email <span className={styles.required}>*</span>
              </label>
              <input
                type="email"
                id="registerEmail"
                name="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                placeholder="Nhập email"
                className={`${styles.input_field} ${
                  errors.email ? styles.input_field_error : ""
                }`}
              />
              {errors.email && (
                <span className={styles.error_text}>{errors.email}</span>
              )}
            </div>

            <div className={styles.form_group}>
              <label htmlFor="registerPassword">
                Mật khẩu <span className={styles.required}>*</span>
              </label>
              <input
                type="password"
                id="registerPassword"
                name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                placeholder="Nhập mật khẩu (tối thiểu 6 ký tự)"
                className={`${styles.input_field} ${
                  errors.password ? styles.input_field_error : ""
                }`}
              />
              {errors.password && (
                <span className={styles.error_text}>{errors.password}</span>
              )}
            </div>

            <button type="submit" className={styles.submit_button}>
              Đăng ký
            </button>

            <div className={styles.divider}>
              <span>Hoặc đăng ký bằng</span>
            </div>

            <div className={styles.social_buttons}>
              <button type="button" className={styles.social_button}>
                📱
              </button>
              <button type="button" className={styles.social_button}>
                👆
              </button>
              <button type="button" className={styles.social_button}>
                🍎
              </button>
              <button type="button" className={styles.social_button}>
                🔎
              </button>
              <button type="button" className={styles.social_button}>
                📘
              </button>
            </div>

            <p className={styles.note}>
              Bằng cách tiếp tục, bạn đồng ý với{" "}
              <span className={styles.link}>Điều khoản</span> và{" "}
              <span className={styles.link}>Chính sách</span> bảo mật của FPT ID
            </p>
          </form>
        )}

        {activeTab === "login" && (
          <form onSubmit={handleLoginSubmit} className={styles.form_container}>
            <div className={styles.form_group}>
              <label htmlFor="loginEmail">
                Email <span className={styles.required}>*</span>
              </label>
              <input
                type="email"
                id="loginEmail"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                placeholder="Nhập email"
                className={`${styles.input_field} ${
                  errors.email ? styles.input_field_error : ""
                }`}
              />
              {errors.email && (
                <span className={styles.error_text}>{errors.email}</span>
              )}
            </div>

            <div className={styles.form_group}>
              <label htmlFor="loginPassword">
                Mật khẩu <span className={styles.required}>*</span>
              </label>
              <input
                type="password"
                id="loginPassword"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                placeholder="Nhập mật khẩu"
                className={`${styles.input_field} ${
                  errors.password ? styles.input_field_error : ""
                }`}
              />
              {errors.password && (
                <span className={styles.error_text}>{errors.password}</span>
              )}
            </div>

            <button type="submit" className={styles.submit_button}>
              Đăng nhập
            </button>

            <div className={styles.divider}>
              <span>Hoặc đăng nhập bằng</span>
            </div>

            <div className={styles.social_buttons}>
              <button type="button" className={styles.social_button}>
                📱
              </button>
              <button type="button" className={styles.social_button}>
                👆
              </button>
              <button type="button" className={styles.social_button}>
                🍎
              </button>
              <button type="button" className={styles.social_button}>
                🔎
              </button>
              <button type="button" className={styles.social_button}>
                📘
              </button>
            </div>

            <p className={styles.note}>
              Bằng cách tiếp tục, bạn đồng ý với{" "}
              <span className={styles.link}>Điều khoản</span> và{" "}
              <span className={styles.link}>Chính sách</span> bảo mật của FPT ID
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
