import PropTypes from "prop-types";
import { useState } from "react";

function ProductCard({ product }) {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <div className="product-card" data-testid={`product-${product.id}`}>
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        <button
          className={`favourite-btn ${isFavourite ? "favourite-btn--active" : ""}`}
          onClick={() => setIsFavourite(!isFavourite)}
          data-testid={`fav-btn-${product.id}`}
          aria-label={
            isFavourite
              ? `Remove ${product.name} from favourites`
              : `Add ${product.name} to favourites`
          }
        >
          {isFavourite ? "♥" : "♡"}
        </button>
        {product.colors && (
          <div className="color-swatches">
            {product.colors.map((color, i) => (
              <span
                key={i}
                className="color-swatch"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
      <div className="product-info">
        <div className="product-meta">
          {product.badge && (
            <span className="product-badge">{product.badge}</span>
          )}
          <h3 className="product-name">{product.name}</h3>
        </div>
        <span className="product-price" data-testid={`price-${product.id}`}>
          ${product.price}
        </span>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string),
    badge: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default ProductCard;
