import { useState, useEffect } from 'react';

const heroImages = [
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-subtitle">#Big Fashion Sale</p>
          <h2 className="hero-title">Limited Time Offer!<br/>Up to <em>50% OFF!</em></h2>
          <p className="hero-description">Redefine Your Everyday Style</p>
          
          <div className="hero-dots">
            {heroImages.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img 
            src={heroImages[currentSlide]} 
            alt="Fashion Sale" 
            className="hero-image" 
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
