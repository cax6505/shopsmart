const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span className="topbar-icon">📱</span>
        <a href="#">Download shopsmart App</a>
      </div>
      <div className="topbar-right">
        <a href="#">Mitra shopsmart</a>
        <a href="#">About shopsmart</a>
        <a href="#">shopsmart Care</a>
        <a href="#">Promo</a>
        <span className="topbar-divider"></span>
        <a href="#" className="font-semibold text-black">
          Sign Up
        </a>
        <a href="#" className="font-semibold text-black">
          Login
        </a>
      </div>
    </div>
  );
};

export default TopBar;
