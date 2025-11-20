import { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import styles from "../Login.module.css";

export default function LoginForm() {
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};

    if (!formData.email.trim()) e.email = "Email là bắt buộc";

    if (!formData.password.trim()) e.password = "Mật khẩu là bắt buộc";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    await login(formData.email, formData.password);

    setFormData({ email: "", password: "" });
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <form onSubmit={handleSubmit} className={styles.form_container}>
      <div className={styles.form_group}>
        <label>Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`${styles.input_field} ${errors.email ? styles.input_field_error : ""}`}
        />
        {errors.email && <span className={styles.error_text}>{errors.email}</span>}
      </div>

      <div className={styles.form_group}>
        <label>Mật khẩu *</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={`${styles.input_field} ${errors.password ? styles.input_field_error : ""}`}
        />
        {errors.password && <span className={styles.error_text}>{errors.password}</span>}
      </div>

      <button className={styles.submit_button}>Đăng nhập</button>
    </form>
  );
}
