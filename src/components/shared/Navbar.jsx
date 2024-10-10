"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { LuEqual } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const pathName = usePathname();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  const toggleMenu = () => setOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="text-secondary">
      {/* top content */}
      <div className={isScrolled ? "hidden" : "block"}>
        <div className="hidden md:flex justify-between transition-all duration-500 ease-in-out">
          <div className=" md:flex justify-between relative pointer items-center md:w-1/2 py-3 bg-black pl-7 pr-5 md:pl-16">
            <p className="flex items-center md:px-2">
              <MdOutlineMail className="text-xl mr-2" />
              <span className="font-semibold"> Email:</span>
              <a
                className="hover:text-primary"
                href="mailto:soheldot1239@gmail.com"
              >
                soheldot1239@gmail.com
              </a>
            </p>
            <div className="flex items-center space-x-4 md:space-x-6 text-base">
              <FaFacebookF className="cursor-pointer hover:text-primary" />
              <FaGoogle className="cursor-pointer hover:text-primary" />
              <FaTwitter className="cursor-pointer hover:text-primary" />
              <FaLinkedinIn className="cursor-pointer hover:text-primary" />
            </div>
          </div>
          <div className="md:w-1/2 md:text-end text-center">
            <p className="py-3 md:pr-14 px-5 bg-[#F63B56] text-base">
              Customer Support: +880181481491, 0283989499
            </p>
          </div>
        </div>
      </div>

      {/* navbar */}
      <div
        className={`md:fixed z-30 w-full px-5 md:px-14 shadow-2xl transition-all duration-500 ease-in-out text-[#473b3b] ${
          isScrolled ? "bg-white" : "bg-[#f0ecec] py-2"
        }`}
      >
        <nav className="flex justify-between items-center">
          <Link href="/">
              <Image
                src="/assets/logo.png"
                alt="Website logo"
                width={90}
                height={60}
              />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex justify-between items-center space-x-8 ml-10">
              {navItems.map((item) => (
                <Link
                  href={item.path}
                  key={item.name}
                  className={`${
                    pathName === item.path
                      ? "text-primary"
                      : "hover:text-[#9b8484] transition-all duration-300 ease-in-out"
                  }`}
                >
                  <li className="uppercase text-base font-semibold">
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-2xl">
            {!isOpen ? <LuEqual /> : <RxCross2 />}
          </button>

          {/* Appointment Button (Desktop Only) */}
          <button className="btn-outline hidden md:block">Appointment</button>
        </nav>
      </div>

      {/* mobile navbar */}
      {isOpen && (
        <div className="block md:hidden bg-white p-8">
          <ul className="flex flex-col space-y-5">
            {navItems.map((item) => (
              <Link
                href={item.path}
                key={item.name}
                className={`${
                  pathName === item.path
                    ? "text-primary"
                    : "text-[#473b3b] hover:text-[#9b8484] transition-all duration-300 ease-in-out"
                }`}
              >
                <li className="uppercase text-base font-semibold">
                  {item.name}
                </li>
              </Link>
            ))}
            <li>
              <button className="btn-outline block w-full text-center">
                Appointment
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
