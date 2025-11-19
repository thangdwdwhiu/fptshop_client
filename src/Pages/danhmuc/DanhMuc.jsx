import { useNavigate } from "react-router-dom";
import "./DanhMuc.css";

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
    <div className="danhmuc-container">
      {/* Header */}
      <header className="header">
        <div className="header-top">
          <div className="logo">
            <button onClick={() => navigate("/")} className="logo-btn">
              <img
                src="https://via.placeholder.com/120x40/DC143C/ffffff?text=FPT+Shop"
                alt="FPT Shop"
              />
            </button>
          </div>
          <div className="header-nav">
            <button className="category-btn active">☰ Danh mục</button>
            <input
              type="text"
              placeholder="Nhập tên điện thoại, laptop, phụ kiện... cần tìm"
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div>
          <div className="header-right">
            <button className="account-btn">👤</button>
            <button className="cart-btn">🛒 Giỏ hàng</button>
          </div>
        </div>

        <div className="header-bottom">
          <div className="quick-links">
            <a href="#" className="quick-link">
              <span className="badge">-50%</span> Sản Deal Online
            </a>
            <a href="#" className="quick-link">
              👶 Ghế ô tô cho bé
            </a>
            <a href="#" className="quick-link">
              💍 Sim du lịch
            </a>
            <a href="#" className="quick-link">
              🧊 Máy nước nóng từ 2.29 triệu
            </a>
            <a href="#" className="quick-link">
              📍 Chọn khu vực để xem ưu đãi ▼
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="breadcrumb">
          <button onClick={() => navigate("/")} className="breadcrumb-link">
            Trang chủ
          </button>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">Danh mục</span>
        </div>

        <h1 className="page-title">Danh mục sản phẩm</h1>

        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-name">{category.name}</h3>
              <p className="category-count">1,234 sản phẩm</p>
            </div>
          ))}
        </div>

        {/* Featured Categories */}
        <section className="featured-categories">
          <h2 className="section-title">Danh mục nổi bật</h2>
          <div className="featured-grid">
            <div className="featured-card large">
              <div className="featured-image">
                <img
                  src="https://via.placeholder.com/300x250/f0f0f0/999999?text=iPhone"
                  alt="iPhone"
                />
              </div>
              <div className="featured-info">
                <h3>iPhone</h3>
                <p className="featured-count">2,156 sản phẩm</p>
              </div>
            </div>

            <div className="featured-card">
              <div className="featured-image">
                <img
                  src="https://via.placeholder.com/200x150/f0f0f0/999999?text=Samsung"
                  alt="Samsung"
                />
              </div>
              <div className="featured-info">
                <h3>Samsung</h3>
                <p className="featured-count">1,892 sản phẩm</p>
              </div>
            </div>

            <div className="featured-card">
              <div className="featured-image">
                <img
                  src="https://via.placeholder.com/200x150/f0f0f0/999999?text=Laptop"
                  alt="Laptop"
                />
              </div>
              <div className="featured-info">
                <h3>Laptop</h3>
                <p className="featured-count">758 sản phẩm</p>
              </div>
            </div>

            <div className="featured-card">
              <div className="featured-image">
                <img
                  src="https://via.placeholder.com/200x150/f0f0f0/999999?text=Phukien"
                  alt="Phụ kiện"
                />
              </div>
              <div className="featured-info">
                <h3>Phụ kiện</h3>
                <p className="featured-count">5,234 sản phẩm</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
