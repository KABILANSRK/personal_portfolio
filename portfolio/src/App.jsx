import React from "react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Profile from "./views/Profile";
import Projects from "./views/Projects";

import "./App.css";

const App = () => {
    return (
      <><div>
            <NavBar />
        </div><div>
                <Home />
                <Contact />
                <Profile />
                <Projects />
                <Footer />
            </div></>
    );
  }

export default App;