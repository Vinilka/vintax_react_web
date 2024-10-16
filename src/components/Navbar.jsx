import React, { useState } from "react";
import "./Navbar.css";
import MenuButton from "./MenuButton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const [tripType, setTripType] = useState('в одну сторону');
  const [fromLocation, setFromLocation] = useState('Нарочь');
  const [toLocation, setToLocation] = useState('Минск');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [passengers, setPassengers] = useState(1);


  return (
  <header className="navbar">
        <nav className="navbar_menu">
          <div className="container">
            <a href="#home" className="flex items-center">
              <img src="./images/logo.svg" className="logo" alt="logo" />
              <span className="logo-text">Винтакс</span>
            </a>

            <div className="flex items-center lg:order-2">
              <div className="hidden mt-2 mr-4 sm:inline-block"></div>
              <a
                href="profile-page"
                className="contact-button"
              >
                Вход
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => {
                  toggleMenu();
                } }
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="mobile-menu"
                aria-controls="mobile-menu-2"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                ) : (<svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            <div
              className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${isMenuOpen ? "menu-visible" : "menu-hidden"}`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <MenuButton href="/" text="Поиск билетов" isActive onClick={closeMenu} />
                <MenuButton href="/routes" text="Маршруты" onClick={closeMenu} />
                <MenuButton href="/rent-transport" text="Аренда транспорта" onClick={closeMenu} />
                <MenuButton href="/taxi" text="Такси" onClick={closeMenu} />
                <MenuButton href="/about" text="О компании" onClick={closeMenu} />
                <MenuButton href="/clients" text="Для клиентов" onClick={closeMenu} />
              </ul>
            </div>
          </div>
        </nav>
      </header>
  );
}
