import {
  FaSearch,
  FaShoppingCart,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="navbar">

      {/* Logo */}

      <div className="logo">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
        />
        <span>.in</span>
      </div>

      {/* Location */}

      <div className="location">
        <FaMapMarkerAlt />

        <div>
          <p>Delivering to Bengaluru 562130</p>
          <h4>Update location</h4>
        </div>
      </div>

      {/* Search */}

      <div className="searchBar">

        <select>
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Mobiles</option>
            <option>Books</option>
            <option>Home</option>
            <option>Kitchen</option>
            <option>Beauty</option>
            <option>Appliances</option>
            <option>Computers</option>
            <option>Toys</option>
        </select>

        <input
          type="text"
          placeholder="Search Amazon.in"
        />

        <button>
          <FaSearch />
        </button>

      </div>

      {/* Language */}

      <div className="language">
        🇮🇳 EN
      </div>

      {/* Account */}

      <div className="navItem">
        <p>Hello, sign in</p>
        <h4>Account & Lists</h4>
      </div>

      {/* Orders */}

      <div className="navItem">
        <p>Returns</p>
        <h4>& Orders</h4>
      </div>

      {/* Cart */}

      <div className="cart">
        <FaShoppingCart />
        <span>Cart</span>
      </div>

    </div>
  );
};

export default Header;