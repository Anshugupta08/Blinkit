const Header = () => {
  return (
    <header>
      <h1>This is a Header</h1>
      <div className="header-content">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <div className="user-actions">
          <button>Login</button>
          <div className="cart-icon">
            <img src="" alt="Cart" />
            <span>0</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
