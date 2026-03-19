import PropTypes from 'prop-types';

const Header = ({ orderCount, backendStatus }) => {
  return (
    <header className="header-main">
      <div className="header-container">
        
        {/* LOGO */}
        <div className="header-logo">
          <div className="logo-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="var(--color-text)"/>
              <path d="M2 17L12 22L22 17" stroke="var(--color-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="var(--color-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1>shopsmart</h1>
        </div>
        
        {/* SEARCH BAR */}
        <div className="header-search">
          <div className="search-category-dropdown">
            <span>All Category</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
          <div className="search-divider"></div>
          <div className="search-input-wrapper">
            <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.3-4.3"/>
            </svg>
            <input type="text" placeholder="Search product or brand here..." className="search-input" />
          </div>
        </div>
        
        {/* ACTIONS & TOGGLES */}
        <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          
          <div style={{ display: 'none' }}>
            <span>Dashboard</span>
            <span>Website</span>
            {backendStatus && <span data-testid="backend-status" className={`status-indicator--${backendStatus}`}></span>}
          </div>

          <button className="icon-button" data-testid="cart-btn" style={{ position: 'relative' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <path d="M3 6h18"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {orderCount !== undefined && (
              <span className="order-count" style={{ position: 'absolute', top: '-5px', right: '-5px', background: 'red', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '10px' }}>
                {orderCount}
              </span>
            )}
          </button>
          
          <button className="icon-button">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
};

Header.propTypes = {
  orderCount: PropTypes.number,
  backendStatus: PropTypes.string,
};

export default Header;
