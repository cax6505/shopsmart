import '../best-selling.css';

const stores = [
  {
    id: 1,
    name: "Nike Sae Mall",
    tagline: '"Just do it bro!"',
    logoLetter: "N",
    products: [
      { image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=150&q=80", price: "₹6,50,000" },
      { image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=150&q=80", price: "₹2,70,000" },
      { image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=150&q=80", price: "₹99,000" }
    ]
  },
  {
    id: 2,
    name: "Barudak Disaster Mall",
    tagline: '"Unleash Your Fashion"',
    logoLetter: "B",
    products: [
      { image: "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=150&q=80", price: "₹3,24,000" },
      { image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=150&q=80", price: "₹1,99,000" },
      { image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=150&q=80", price: "₹1,20,000" }
    ]
  },
  {
    id: 3,
    name: "Galaxy Galleria Mall",
    tagline: '"Be Extraordinary"',
    logoLetter: "G",
    products: [
      { image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=150&q=80", price: "₹1,79,000" },
      { image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=150&q=80", price: "₹1,99,000" },
      { image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=150&q=80", price: "₹2,53,000" }
    ]
  },
  {
    id: 4,
    name: "Aurora Well Mall",
    tagline: '"Chic, Bold, Confident"',
    logoLetter: "A",
    products: [
      { image: "https://images.unsplash.com/photo-1548883354-94cbffee4e03?auto=format&fit=crop&w=150&q=80", price: "₹2,50,000" },
      { image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=150&q=80", price: "₹1,62,000" },
      { image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=150&q=80", price: "₹2,55,000" }
    ]
  }
];

const BestSellingStore = () => {
  return (
    <div className="section-container store-section">
      <h2 className="store-section-title">Best Selling Store</h2>
      
      <div className="store-layout">
        <div className="store-mall-card">
          <div className="mall-image-wrapper">
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80" alt="Mall Shopping Bags" />
          </div>
          <div className="mall-card-content">
            <h3 className="mall-title">shopsmart Mall</h3>
            <p className="mall-desc">Shop, Explore, Delight and<br/>Experience Mall Magic!</p>
          </div>
        </div>

        <div className="store-grid">
          {stores.map(store => (
            <div key={store.id} className="store-card">
              <div className="store-header">
                <div className="store-logo-container">
                  <div className="store-logo-circle">{store.logoLetter}</div>
                  <div className="verified-badge">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                </div>
                <div className="store-info">
                  <h4 className="store-name">{store.name}</h4>
                  <p className="store-tagline">{store.tagline}</p>
                </div>
              </div>
              <div className="store-products">
                {store.products.map((prod, idx) => (
                  <div key={idx} className="store-product-item">
                    <div className="store-product-image">
                      <img src={prod.image} alt={`product ${idx}`} />
                    </div>
                    <span className="store-product-price">{prod.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellingStore;
