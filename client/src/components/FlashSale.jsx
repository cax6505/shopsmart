import React from 'react';

const products = [
  {
    id: 1,
    name: "EliteShield Performance Men's Jackets",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80",
    price: "₹2,55,000",
    oldPrice: "₹5,25,000",
    sale: "9/10"
  },
  {
    id: 2,
    name: "Gentlemen's Summer Gray Hat - Premium Blend",
    image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=400&q=80",
    price: "₹99,000",
    oldPrice: "₹1,50,000",
    sale: "9/10"
  },
  {
    id: 3,
    name: "OptiZoom Camera Shoulder Bag",
    image: "https://images.unsplash.com/photo-1548883354-94cbffee4e03?auto=format&fit=crop&w=400&q=80",
    price: "₹2,50,000",
    oldPrice: "₹4,25,000",
    sale: "5/10"
  },
  {
    id: 4,
    name: "Cloudy Chic - Grey Peep Toe Heeled Sandals",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=400&q=80",
    price: "₹2,70,000",
    oldPrice: "₹5,80,000",
    sale: "5/10"
  }
];

const FlashSale = () => {
  return (
    <div className="section-container flash-sale-section">
      <div className="section-header">
        <div className="header-left-aligned">
          <div className="flash-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/>
            </svg>
          </div>
          <h2 className="section-title">Flash Sale</h2>
          <div className="timer">
            <span className="timer-box">08</span>
            <span className="timer-colon">:</span>
            <span className="timer-box">17</span>
            <span className="timer-colon">:</span>
            <span className="timer-box">56</span>
          </div>
        </div>
        <div className="header-nav">
          <button className="nav-btn outline">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
          </button>
          <button className="nav-btn dark">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>

      <div className="product-carousel">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} />
              <button className="heart-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </button>
            </div>
            <div className="product-content">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-pricing">
                <span className="current-price">{product.price}</span>
                <span className="old-price">{product.oldPrice}</span>
              </div>
              <div className="product-progress">
                <div className="progress-bar-container">
                  <div className="progress-bar-fill" style={{width: eval(product.sale) * 100 + '%'}}></div>
                </div>
                <span className="progress-text">{product.sale} Sale</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
