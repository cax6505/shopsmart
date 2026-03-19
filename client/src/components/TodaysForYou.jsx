
const products = [
  {
    id: 1,
    name: "Classic Bomber Jacket Men's Outerwear",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=400&q=80",
    price: "₹2,10,000",
    oldPrice: "₹4,50,000",
  },
  {
    id: 2,
    name: "Urban Style Classic Denim Jacket",
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=400&q=80",
    price: "₹3,50,000",
    oldPrice: "₹6,50,000",
  },
  {
    id: 3,
    name: "Athletic Running Shoes Dark Edition",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80",
    price: "₹4,20,000",
    oldPrice: "₹8,00,000",
  },
  {
    id: 4,
    name: "Casual Gray Long Sleeve T-Shirt",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
    price: "₹1,20,000",
    oldPrice: "₹2,50,000",
  }
];

const TodaysForYou = () => {
  return (
    <div className="section-container todays-for-you-section">
      <div className="section-header">
        <h2 className="section-title">Todays For You!</h2>
        <div className="filter-tags">
          <button className="tag-btn active">Best Seller</button>
          <button className="tag-btn">Keep Stylish</button>
          <button className="tag-btn">Special Discount</button>
          <button className="tag-btn">Official Store</button>
          <button className="tag-btn">Coveted Product</button>
        </div>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} />
              <button className="heart-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: '#ff4d4f'}}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </button>
            </div>
            <div className="product-content">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-pricing">
                <span className="current-price">{product.price}</span>
                <span className="old-price">{product.oldPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaysForYou;
