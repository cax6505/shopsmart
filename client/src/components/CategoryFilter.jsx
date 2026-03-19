import PropTypes from "prop-types";
import { categories } from "../data/products";

function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="category-filter" data-testid="category-filter">
      <h1 className="explore-title">Explore</h1>
      <div className="filter-row">
        <div className="filter-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${activeCategory === cat ? "filter-pill--active" : ""}`}
              onClick={() => onCategoryChange(cat)}
              data-testid={`filter-${cat.toLowerCase()}`}
            >
              {cat === "All" && <span className="pill-icon">📦</span>}
              {cat === "Men" && <span className="pill-icon">👔</span>}
              {cat === "Women" && <span className="pill-icon">👗</span>}
              {cat}
            </button>
          ))}
        </div>
        <div className="filter-actions">
          <button className="filter-btn" data-testid="filters-btn">
            Filters
          </button>
          <button className="search-btn" data-testid="search-btn">
            🔍
          </button>
        </div>
      </div>
    </div>
  );
}

CategoryFilter.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
