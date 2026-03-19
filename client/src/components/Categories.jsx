import React from 'react';

const categories = [
  { name: 'T-Shirt', icon: '👕' },
  { name: 'Jacket', icon: '🧥' },
  { name: 'Shirt', icon: '👔' },
  { name: 'Jeans', icon: '👖' },
  { name: 'Bag', icon: '👜' },
  { name: 'Shoes', icon: '👟' },
  { name: 'Watches', icon: '⌚' },
  { name: 'Cap', icon: '🧢' },
  { name: 'All Category', icon: '⊞' },
];

const Categories = () => {
  return (
    <div className="categories-section">
      <div className="categories-container">
        {categories.map((cat, index) => (
          <div key={index} className="category-item">
            <div className="category-icon-wrapper">
              <span className="category-icon">{cat.icon}</span>
            </div>
            <span className="category-name">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
