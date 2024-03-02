import { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">-LOGO- Snap `N Ride</span>
        </Link>

        <div className="navItems">
          {user ? (
            <>
              <Link to={`/profile/${user._id}`} style={{ textDecoration: "none" }}>
    <button className="profile-button">{user.username}</button>
  </Link>
            </>
          ) : (
            <>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <button className="navButton1">Register</button>
              </Link>

              <Link to="/login" style={{ textDecoration: "none" }}>
                <button className="navButton2">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
