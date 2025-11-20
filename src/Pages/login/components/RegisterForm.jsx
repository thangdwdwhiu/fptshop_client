import { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import styles from "../Login.module.css";

export default function RegisterForm() {
  const { register } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};

    if (!formData.fullname.trim()) e.fullname = "Họ và tên là bắt buộc";
    else if (formData.fullname.trim().length < 3)
      e.fullname = "Họ và tên phải có ít nhất 3 ký tự";

    if (!formData.email.trim()) e.email = "Email là bắt buộc";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = "Email không hợp lệ";

    if (!formData.password.trim()) e.password = "Mật khẩu là bắt buộc";
    else if (formData.password.length < 6)
      e.password = "Mật khẩu phải có ít nhất 6 ký tự";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    await register(formData.fullname, formData.email, formData.password);

    setFormData({ fullname: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form_container}>
      <div className={styles.form_group}>
        <label>Họ và tên *</label>
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          className={`${styles.input_field} ${errors.fullname ? styles.input_field_error : ""}`}
        />
        {errors.fullname && <span className={styles.error_text}>{errors.fullname}</span>}
      </div>

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
        <label>Password *</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={`${styles.input_field} ${errors.password ? styles.input_field_error : ""}`}
        />
        {errors.password && <span className={styles.error_text}>{errors.password}</span>}
      </div>

      <button className={styles.submit_button}>Đăng ký</button>
    </form>
  );
}
