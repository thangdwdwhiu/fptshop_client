import { useNavigate } from "react-router-dom";
import "./TrangChu.css";

export default function TrangChu() {
  const navigate = useNavigate();

  return (
    <div className="trangchu-container">
      {/* Header */}
      <header className="header">
        <div className="header-top">
          <div className="logo">
            <img
              src="https://via.placeholder.com/120x40/DC143C/ffffff?text=FPT+Shop"
              alt="FPT Shop"
            />
          </div>
          <div className="header-nav">
            <button
              className="category-btn"
              onClick={() => navigate("/danh-muc")}
            >
              ☰ Danh mục
            </button>
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
        {/* Banner Section */}
        <section className="banner-section">
          <div className="banner-left">
            <div className="product-promo">
              <h2 className="promo-title">Galaxy A07</h2>
              <span className="new-badge">Mới</span>
              <p className="promo-spec">📱 Pin khủng 5000mAh</p>
              <button className="promo-btn">Mua ngay</button>
            </div>
          </div>
          <div className="banner-center">
            <div className="product-image">
              <img
                src="https://via.placeholder.com/300x400/f0f0f0/999999?text=Galaxy+A07"
                alt="Galaxy A07"
              />
            </div>
          </div>
          <div className="banner-right">
            <div className="promo-card">
              <div className="promo-badge">Đổi điện thoại cũ bắt kỳ</div>
              <p className="promo-price">
                Chi từ <strong>2.89 Triệu</strong> + Trả <strong>0% góp</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="products-grid">
          <div className="product-card large">
            <div className="product-image">
              <img
                src="https://via.placeholder.com/400x300/2c2c2c/ffffff?text=VENU+4"
                alt="VENU 4"
              />
            </div>
            <div className="product-info">
              <h3>VENU 4</h3>
              <p className="price">Giá 14.990.000đ</p>
              <div className="product-extras">
                <div className="extra-item">
                  Thẻ giới hạn cùng với lợi nhuận Trieu
                </div>
                <div className="extra-item">Aó + Vó Garmin</div>
              </div>
            </div>
          </div>

          <div className="product-card large">
            <div className="product-image">
              <img
                src="https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Tivi+Trung+Bay"
                alt="Tivi Trung Bầy"
              />
            </div>
            <div className="product-info">
              <div className="badge-new">Like new</div>
              <h3>Tivi Trung Bầy</h3>
              <p className="subtitle">Giá Hôi Hơn Mãi</p>
              <button className="discount-badge">Giảm đến 50%</button>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="featured-section">
          <h2 className="section-title">Danh mục nổi bật</h2>
          <div className="featured-grid">
            <div className="featured-item">
              <div className="featured-image">
                <img
                  src="https://via.placeholder.com/200x200/f0f0f0/999999?text=iPhone"
                  alt="iPhone"
                />
              </div>
              <p>iPhone</p>
            </div>
            <div className="featured-item">
              <div className="featured-image">
                <img
                  src="https://via.placeholder.com/200x200/f0f0f0/999999?text=Laptop"
                  alt="Laptop"
                />
              </div>
              <p>Laptop</p>
            </div>
            <div className="featured-item">
              <div className="featured-image">
                <img
                  src="https://via.placeholder.com/200x200/f0f0f0/999999?text=Samsung"
                  alt="Samsung"
                />
              </div>
              <p>Samsung</p>
            </div>
            <div className="featured-item">
              <div className="featured-image">
                <img
                  src="https://via.placeholder.com/200x200/f0f0f0/999999?text=Accessories"
                  alt="Accessories"
                />
              </div>
              <p>Phụ kiện</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
