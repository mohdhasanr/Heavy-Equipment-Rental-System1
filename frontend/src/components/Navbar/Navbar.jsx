import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [activeMenu, setActiveMenu] = useState(''); // Track current active menu

  useEffect(() => {
    // Set active menu based on path or hash
    if (location.pathname === '/') {
      setActiveMenu('home');
    } else if (location.pathname.startsWith('/explore-menu')) {
      setActiveMenu('products');
    } else if (location.pathname === '/aboutus') {
      setActiveMenu('aboutus');
    } else if (location.hash === '#footer') {
      setActiveMenu('contact');
    }
  }, [location]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  };

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
      setActiveMenu('contact'); // Highlight Contact Us
    }
  };

  return (
    <div className='navbar'>
      <Link to='/'>
        <img className='logo' src={assets.logo} alt="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link 
          to="/" 
          className={activeMenu === "home" ? "active" : ""}
        >
          Home
        </Link>

        <Link 
          to="/explore-menu" 
          className={activeMenu === "products" ? "active" : ""}
        >
          Products
        </Link>

        <Link 
          to="/aboutus" 
          className={activeMenu === "aboutus" ? "active" : ""}
        >
          About Us
        </Link>

        <button 
          onClick={scrollToFooter} 
          className={activeMenu === "contact" ? "active" : ""}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 'inherit', color: 'inherit', padding: 0 }}
        >
          Contact us
        </button>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon" />

        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="basket icon" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="profile icon" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="orders icon" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="logout icon" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
