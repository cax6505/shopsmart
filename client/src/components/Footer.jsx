import "../footer.css";

const Footer = () => {
  return (
    <>
      <div className="banner-section">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h2>&quot;Let&apos;s Shop Beyond Boundaries&quot;</h2>
        </div>
      </div>
      <footer className="footer-main">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo">
              <div className="logo-icon-white">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="logo-text">shopsmart</span>
            </div>
            <p className="footer-tagline">
              &quot;Let&apos;s Shop Beyond Boundaries&quot;
            </p>
            <div className="social-icons">
              <button aria-label="Facebook">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </button>
              <button aria-label="Twitter">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </button>
              <button aria-label="YouTube">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </button>
              <button aria-label="Instagram">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </button>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h4 className="footer-title">shopsmart</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">About shopsmart</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
                <li>
                  <a href="#">Mitra Blog</a>
                </li>
                <li>
                  <a href="#">B2B Digital</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-title">Buy</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Bill & Top Up</a>
                </li>
                <li>
                  <a href="#">shopsmart COD</a>
                </li>
                <li>
                  <a href="#">Mitra Blog</a>
                </li>
                <li>
                  <a href="#">Promo</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-title">Sell</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Seller Education Center</a>
                </li>
                <li>
                  <a href="#">Brand Index</a>
                </li>
                <li>
                  <a href="#">Register Official Store</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-title">Guide and Help</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">shopsmart Care</a>
                </li>
                <li>
                  <a href="#">Term and Condition</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Mitra</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 - 2026, shopsmart</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
