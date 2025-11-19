import { useNavigate } from "react-router-dom";
import styles from "./TrangChu.module.css";

export default function TrangChu() {
  const navigate = useNavigate();

  return (
    <div className={styles.trangchu_container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.header_top}>
          <div className={styles.logo}>
            <img
              src="https://via.placeholder.com/120x40/DC143C/ffffff?text=FPT+Shop"
              alt="FPT Shop"
            />
          </div>
          <div className={styles.header_nav}>
            <button
              className={styles.category_btn}
              onClick={() => navigate("/danhmuc")}
            >
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
        {/* Banner Section */}
        <section className={styles.banner_section}>
          <div className={styles.banner_left}>
            <div className={styles.product_promo}>
              <h2 className={styles.promo_title}>Galaxy A07</h2>
              <span className={styles.new_badge}>Mới</span>
              <p className={styles.promo_spec}>📱 Pin khủng 5000mAh</p>
              <button className={styles.promo_btn}>Mua ngay</button>
            </div>
          </div>
          <div className={styles.banner_center}>
            <div className={styles.product_image}>
              <img
                src="https://via.placeholder.com/300x400/f0f0f0/999999?text=Galaxy+A07"
                alt="Galaxy A07"
              />
            </div>
          </div>
          <div className={styles.banner_right}>
            <div className={styles.promo_card}>
              <div className={styles.promo_badge}>Đổi điện thoại cũ bắt kỳ</div>
              <p className={styles.promo_price}>
                Chi từ <strong>2.89 Triệu</strong> + Trả <strong>0% góp</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className={styles.products_grid}>
          <div
            className={`${styles.product_card} ${styles.product_card_large}`}
          >
            <div className={styles.product_image}>
              <img
                src="https://via.placeholder.com/400x300/2c2c2c/ffffff?text=VENU+4"
                alt="VENU 4"
              />
            </div>
            <div className={styles.product_info}>
              <h3>VENU 4</h3>
              <p className={styles.price}>Giá 14.990.000đ</p>
              <div className={styles.product_extras}>
                <div className={styles.extra_item}>
                  Thẻ giới hạn cùng với lợi nhuận Trieu
                </div>
                <div className={styles.extra_item}>Aó + Vó Garmin</div>
              </div>
            </div>
          </div>

          <div
            className={`${styles.product_card} ${styles.product_card_large}`}
          >
            <div className={styles.product_image}>
              <img
                src="https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Tivi+Trung+Bay"
                alt="Tivi Trung Bầy"
              />
            </div>
            <div className={styles.product_info}>
              <div className={styles.badge_new}>Like new</div>
              <h3>Tivi Trung Bầy</h3>
              <p className={styles.subtitle}>Giá Hôi Hơn Mãi</p>
              <button className={styles.discount_badge}>Giảm đến 50%</button>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className={styles.featured_section}>
          <h2 className={styles.section_title}>Danh mục nổi bật</h2>
          <div className={styles.featured_grid}>
            <div className={styles.featured_item}>
              <div className={styles.featured_image}>
                <img
                  src="https://via.placeholder.com/200x200/f0f0f0/999999?text=iPhone"
                  alt="iPhone"
                />
              </div>
              <p>iPhone</p>
            </div>
            <div className={styles.featured_item}>
              <div className={styles.featured_image}>
                <img
                  src="https://via.placeholder.com/200x200/f0f0f0/999999?text=Laptop"
                  alt="Laptop"
                />
              </div>
              <p>Laptop</p>
            </div>
            <div className={styles.featured_item}>
              <div className={styles.featured_image}>
                <img
                  src="https://via.placeholder.com/200x200/f0f0f0/999999?text=Samsung"
                  alt="Samsung"
                />
              </div>
              <p>Samsung</p>
            </div>
            <div className={styles.featured_item}>
              <div className={styles.featured_image}>
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
