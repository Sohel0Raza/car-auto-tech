import logo from "@/../public/assets/logo2.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Galllery", path: "/galllery" },
    { name: "Contact Us", path: "/contact" },
  ];
  return (
    <div>
      <div className="md:flex justify-between">
        <div className="flex justify-between relative md:pointer items-center md:w-1/2 py-3 bg-black px-5 md:pl-16 text-secondary">
          <p className="flex items-center md:px-2">
            <MdOutlineMail className="text-xl mr-2" />
            <span className="font-semibold"> Email:</span>
            <a href="mailto:soheldot1239@gmail.com">soheldot1239@gmail.com</a>
          </p>
          <div className="flex items-center space-x-4 md:space-x-6">
            <FaFacebookF />
            <FaGoogle />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="md:w-1/2 md:text-end text-center">
          <p className="py-3 md:pr-14 px-5 bg-[#F63B56] text-base text-secondary">Customer Soppurt: +880181481491, 0283989499</p>
        </div>
      </div>
      <div className="flex justify-between items-center md:px-14 shadow-2xl bg-[#211B16] text-white">
        <div>
          <Image src={logo} alt="Website logo" height={100} width={100}></Image>
        </div>
        <div>
          <ul className="flex justify-between items-center space-x-7">
            {navItems.map((item) => (
              <Link href={item.path} key={item.name}>
                <li className="uppercase text-base font-semibold">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <button className="btn-outline">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
