import { useState } from "react";
import styles from "./Login.module.css";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("register");

  return (
    <div className={styles.login_container}>
      <div className={styles.login_card}>
        {/* Header */}
        <div className={`${styles.login_header} d-flex align-items-center justify-content-center`}>
          <h1 className={`${styles.login_title} text-danger`}>FPT SHOP </h1>
          <img
            src="https://fptshop.com.vn/favicon.ico"
            alt="FPT Shop Icon"
            width="40"
          />

        </div>

        {/* Tabs */}
        <div className={styles.tabs_container}>
          <button
            className={`${styles.tab_button} ${activeTab === "register" ? styles.tab_button_active : ""
              }`}
            onClick={() => setActiveTab("register")}
          >
            Đăng ký
          </button>

          <button
            className={`${styles.tab_button} ${activeTab === "login" ? styles.tab_button_active : ""
              }`}
            onClick={() => setActiveTab("login")}
          >
            Đăng nhập
          </button>
        </div>

        {/* hien thi form */}
        {activeTab === "register" && <RegisterForm />}
        {activeTab === "login" && <LoginForm />}
      </div>
    </div>
  );
}
