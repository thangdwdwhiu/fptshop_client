import { useNavigate } from "react-router-dom";
import styles from "./DanhMuc.module.css";

export default function DanhMuc() {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: "iPhone", icon: "📱" },
    { id: 2, name: "Samsung", icon: "📱" },
    { id: 3, name: "Laptop", icon: "💻" },
    { id: 4, name: "iPad", icon: "📄" },
    { id: 5, name: "Apple Watch", icon: "⌚" },
    { id: 6, name: "Phụ kiện", icon: "🎧" },
    { id: 7, name: "Sim", icon: "🛂" },
    { id: 8, name: "Máy nước nóng", icon: "🌡" },
  ];

  return (
    <div className={styles.danhmuc_container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.header_top}>
          <div className={styles.logo}>
            <button onClick={() => navigate("/")} className={styles.logo_btn}>
              <img
                src="https://via.placeholder.com/120x40/DC143C/ffffff?text=FPT+Shop"
                alt="FPT Shop"
              />
            </button>
          </div>
          <div className={styles.header_nav}>
            <button className={`${styles.category_btn} ${styles.active}`}>
              ☰ Danh mục
            </button>
            <input
              type="text"
              placeholder="Nhập tên điện thoại, laptop, phụ kiện... cần tìm"
              className={styles.search_input}
            />
            <button className={styles.search_btn}>🔍</button>
          </div>
          <div className={styles.header_right}>
            <button className={styles.account_btn}>👤</button>
            <button className={styles.cart_btn}>🛒 Giỏ hàng</button>
          </div>
        </div>

        <div className={styles.header_bottom}>
          <div className={styles.quick_links}>
            <a href="#" className={styles.quick_link}>
              <span className={styles.badge}>-50%</span> Sản Deal Online
            </a>
            <a href="#" className={styles.quick_link}>
              👶 Ghế ô tô cho bé
            </a>
            <a href="#" className={styles.quick_link}>
              💍 Sim du lịch
            </a>
            <a href="#" className={styles.quick_link}>
              🧊 Máy nước nóng từ 2.29 triệu
            </a>
            <a href="#" className={styles.quick_link}>
              📍 Chọn khu vực để xem ưu đãi ▼
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.main_content}>
        <div className={styles.breadcrumb}>
          <button
            onClick={() => navigate("/")}
            className={styles.breadcrumb_link}
          >
            Trang chủ
          </button>
          <span className={styles.breadcrumb_separator}>›</span>
          <span className={styles.breadcrumb_current}>Danh mục</span>
        </div>

        <h1 className={styles.page_title}>Danh mục sản phẩm</h1>

        <div className={styles.categories_grid}>
          {categories.map((category) => (
            <div key={category.id} className={styles.category_card}>
              <div className={styles.category_icon}>{category.icon}</div>
              <h3 className={styles.category_name}>{category.name}</h3>
              <p className={styles.category_count}>1,234 sản phẩm</p>
            </div>
          ))}
        </div>

        {/* Featured Categories */}
        <section className={styles.featured_categories}>
          <h2 className={styles.section_title}>Danh mục nổi bật</h2>
          <div className={styles.featured_grid}>
            <div
              className={`${styles.featured_card} ${styles.featured_card_large}`}
            >
              <div className={styles.featured_image}>
                <img
                  src="https://via.placeholder.com/300x250/f0f0f0/999999?text=iPhone"
                  alt="iPhone"
                />
              </div>
              <div className={styles.featured_info}>
                <h3>iPhone</h3>
                <p className={styles.featured_count}>2,156 sản phẩm</p>
              </div>
            </div>

            <div className={styles.featured_card}>
              <div className={styles.featured_image}>
                <img
                  src="https://via.placeholder.com/200x150/f0f0f0/999999?text=Samsung"
                  alt="Samsung"
                />
              </div>
              <div className={styles.featured_info}>
                <h3>Samsung</h3>
                <p className={styles.featured_count}>1,892 sản phẩm</p>
              </div>
            </div>

            <div className={styles.featured_card}>
              <div className={styles.featured_image}>
                <img
                  src="https://via.placeholder.com/200x150/f0f0f0/999999?text=Laptop"
                  alt="Laptop"
                />
              </div>
              <div className={styles.featured_info}>
                <h3>Laptop</h3>
                <p className={styles.featured_count}>758 sản phẩm</p>
              </div>
            </div>

            <div className={styles.featured_card}>
              <div className={styles.featured_image}>
                <img
                  src="https://via.placeholder.com/200x150/f0f0f0/999999?text=Phukien"
                  alt="Phụ kiện"
                />
              </div>
              <div className={styles.featured_info}>
                <h3>Phụ kiện</h3>
                <p className={styles.featured_count}>5,234 sản phẩm</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
