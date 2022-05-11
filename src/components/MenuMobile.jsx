import React from "react";
import imgURL from "../assets/icons/menu.svg";
const MenuMobile = () => {
  const openModalMenu = () => {
    const menuDesplegado = document.querySelector("#hiddenMenu");
    menuDesplegado.style.display = "block";
  };

  const handleClose = () => {
    const menuDesplegado = document.querySelector("#hiddenMenu");
    menuDesplegado.style.display = "none";
  };
  return (
    <>
      <div className="menuDesplegado" id="hiddenMenu">
        <button className="closeButton" onClick={handleClose}>
          X
        </button>
        <ul className="menuItemsContainer">
          <li className="menuItems">Home</li>
          <li className="menuItems">About</li>
          <li className="menuItems">Services</li>
          <li className="menuItems">Proyects</li>
          <li className="menuItems">New</li>
          <li className="menuItems">Contact</li>
        </ul>
      </div>

      <div className="header__menuIcon">
        <button className="buttonMenu" onClick={openModalMenu}>
          <img src={imgURL} alt="" />
        </button>
      </div>
    </>
  );
};

export default MenuMobile;
