// src/NavBar.jsx
import React from "react";

const NavBar = () => {
  return (
    <div style={styles.rect}>
        <nav style={styles.navbar}>
            <ul style={styles.navList}>
                <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
                <li style={styles.navItem}><a href="#about" style={styles.navLink}>About</a></li>
                <li style={styles.navItem}><a href="#projects" style={styles.navLink}>Projects</a></li>
                <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
            </ul>
        </nav>
    </div>
  );
};

const styles = {
  rect: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "50px",
    backgroundColor: "black",
    zIndex: "1",
  },
  navbar: {
    position: "fixed",
    top: "0",
    right: "0",
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    overflow: "hidden",
  },
  navList: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    float: "left",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    padding: "14px 16px",
    fontSize: "17px",
  },
};

export default NavBar;
