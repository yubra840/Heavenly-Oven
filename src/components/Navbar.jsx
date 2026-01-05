import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../appwrite";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export default function Navbar({ cartCount, toggleTheme, dark }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  // 🔐 Check auth state
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await account.get();
        setIsLoggedIn(true);
      } catch {
        setIsLoggedIn(false);
      }
    };
    checkAuth();
  }, []);

  // 🚪 Logout handler
  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      setIsLoggedIn(false);
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-left">
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </div>

        <Link
  to="/#home"
  className="logo"
  onClick={(e) => {
  setOpen(false);
  setActive("home") ;
  }}
>
  <BakeryDiningIcon className="logo-icon" />
  <span className="heavenly">Heavenly</span>
  <span className="logo-accent">Oven</span>
</Link>

      </div>

      {/* Links */}
      <ul className={`nav-links ${open ? "active" : ""}`}>
        {["home", "about", "products", "contact"].map((link) => (
          <li key={link}>
            <Link
              to={`/#${link}`}
              className={active === link ? "active" : ""}
              onClick={() => {
                setActive(link);
                setOpen(false);
              }}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          </li>
        ))}

        {/* 🔹 MOBILE AUTH BUTTON */}
        <li className="mobile-login">
          {isLoggedIn ? (
            <button onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          )}
        </li>
      </ul>

      {/* Actions */}
      <div className="nav-actions">
        {/* 🔹 DESKTOP AUTH BUTTON */}
        {isLoggedIn ? (
         <button className="logout-btn" onClick={handleLogout}>
  Logout <LogoutOutlinedIcon className="logout-icon" />
</button>
        ) : (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}

        <Link to="/cart" className="cart-icon" onClick={() => setOpen(false)}>
           <ShoppingCartOutlinedIcon />
           <span className="cart-count">{cartCount}</span>
        </Link>

        <button className="theme" onClick={toggleTheme}>
          {dark ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </button>
      </div>
    </nav>
  );
}
