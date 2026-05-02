import React, { useEffect, useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();
  const toggleMenu = () => setShowMenu((prev) => !prev);

  const scrollToSection = (id) => {
    const sec = document.getElementById(id);
    if (!sec) return;
    const y = sec.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
    setShowMenu(false);
  };

  const handleSearch = () => {
    const text = searchText.trim().toLowerCase();
    if (!text) return;

    if (text === "all") navigate("/");
    else if (text.includes("fruit")) navigate("/?category=Fruits");
    else if (text.includes("vegetable")) navigate("/?category=Vegetables");
    else navigate(`/?search=${encodeURIComponent(searchText)}`);

    setShowMenu(false);

    setTimeout(() => scrollToSection("products"), 200);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "drop-shadow-[0_4px_20px_rgba(0,0,0,.3)]" : ""
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-5 md:px-10 md:h-[14vh] h-[12vh] flex justify-between items-center relative">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => scrollToSection("home")}
          className="text-3xl font-bold"
        >
          Home<span className="text-teal-500">S</span>hop
        </Link>

        {/* Desktop Menu */}
        <ul className="md:flex gap-x-12 hidden">
          <li>
            <span
              onClick={() => scrollToSection("home")}
              className="cursor-pointer text-teal-500 font-semibold"
            >
              Home
            </span>
          </li>
          <li>
            <span
              onClick={() => scrollToSection("about")}
              className="cursor-pointer hover:text-teal-500 font-semibold"
            >
              About
            </span>
          </li>
          <li>
            <span
              onClick={() => scrollToSection("process")}
              className="cursor-pointer hover:text-teal-500 font-semibold"
            >
              Process
            </span>
          </li>
          <li>
            <span
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer hover:text-teal-500 font-semibold"
            >
              Contact
            </span>
          </li>
        </ul>

        {/* Right Actions */}
        <div className="flex gap-x-5 items-center">
          {/* Desktop search */}
          <div className="md:flex hidden p-2 border-2 border-teal-500 rounded-full">
            <input
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="px-3 outline-none"
            />
            <button
              onClick={handleSearch}
              className="bg-teal-500 text-white w-7 h-7 flex justify-center items-center rounded-full"
            >
              <IoSearch />
            </button>
          </div>

          <GoHeartFill className="text-2xl" />
          <HiShoppingBag className="text-2xl" />

          {/* Hamburger - mobile only */}
          <button onClick={toggleMenu} className="md:hidden text-2xl">
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </button>
        </div>

        {/* ✅ Mobile Menu */}
        <ul
          className={`flex flex-col gap-y-6 bg-teal-500/15 backdrop-blur-xl rounded-xl p-8 items-center md:hidden absolute top-[70px] left-1/2 -translate-x-1/2 transition-all duration-300 ${
            showMenu
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="font-semibold tracking-wider text-teal-500"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="font-semibold tracking-wider text-zinc-800 hover:text-teal-500"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("process")}
              className="font-semibold tracking-wider text-zinc-800 hover:text-teal-500"
            >
              Process
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-semibold tracking-wider text-zinc-800 hover:text-teal-500"
            >
              Contact
            </button>
          </li>

          {/* Mobile Search */}
          <li className="flex p-2 border-2 border-teal-500 rounded-full w-full">
            <input
              type="text"
              placeholder="Search..."
              autoComplete="off"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1 h-[4vh] px-3 focus:outline-none bg-transparent"
            />
            <button
              onClick={handleSearch}
              className="bg-gradient-to-b from-green-500 to-teal-500 text-white w-7 h-7 flex justify-center items-center rounded-full text-xl "
            >
              <IoSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
