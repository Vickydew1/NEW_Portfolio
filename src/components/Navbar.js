import React, { useState } from "react";
import {
  FaTimes,
  FaBars,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assests/logo.png";
import { Link } from "react-scroll";
import Resume from "../assests/resume123.pdf"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="hover:animate-spin">
        <img src={Logo} alt="Logo image" style={{ width: "100px" }} />
      </div>
      {/* menu */}

      <ul className="hidden md:flex">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute  top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py6 text-4xl">
          {' '}<Link onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link></li>
        <li className="py6 mt-2 text-4xl">  {' '} <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link></li>
        <li className="py6 mt-2 text-4xl">  {' '}<Link onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link></li>
        <li className="py6 mt-2 text-4xl">  {' '}<Link onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
          >
            Project
          </Link></li>
        <li className="py6 mt-2 text-4xl">  {' '}
          <Link onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link></li>
      
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w=[160px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              className="flex items-center justify-between w-full text-grey-300"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w=[160px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-black">
            <a
              className="flex items-center justify-between w-full text-grey-300"
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w=[160px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex items-center justify-between w-full text-grey-300"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w=[160px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#809780]">
            <a
              className="flex items-center justify-between w-full text-grey-300"
              href={Resume} download
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
