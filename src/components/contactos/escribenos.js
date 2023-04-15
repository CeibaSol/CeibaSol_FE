import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const FloatingButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const scrollPosition = window.scrollY;
    
    if (scrollPosition + windowHeight >= fullHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const location = useLocation();
  if (location.pathname === "/contactos") {
    return null; // Si no estás en la página principal, no muestra el botón
  }


  return (
    
    <a href="contactos#form" className={`btn-flotante relative inline-block px-4 py-2 font-medium group${isScrolled ? " btn-flotante-scrolled" : ""}${isScrolled && window.innerHeight + window.scrollY >= document.body.clientHeight ? " btn-flotante-bottom" : ""}`}>
  <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-lime-800 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
  <span class="absolute inset-0 w-full h-full bg-white border-2 border-lime-800 group-hover:bg-lime-600"></span>
  <span class="relative text-black group-hover:text-white">Escríbenos</span>
</a>
 

  );
};

export default FloatingButton;
