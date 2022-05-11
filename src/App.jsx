import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { LayoutProvider } from "./context/LayoutContent";

function App() {
  return (
    <LayoutProvider>

      <section className="grid-container">
        <Header />
        <Aside />
        <MainContent />
        <Footer />
      </section>

    </LayoutProvider>
  );
}

export default App;
