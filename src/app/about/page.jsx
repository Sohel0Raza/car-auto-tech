import Image from "next/image";
import img1 from "@/../public/assets/images/about_us/parts.jpg";
import img2 from "@/../public/assets/images/about_us/person.jpg";
import { FaHome } from "react-icons/fa";
const AboutPage = () => {
  return (
    <div>
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
          <path
            fill="#273036"
            fill-opacity="1"
            d="M0,256L40,256C80,256,160,256,240,229.3C320,203,400,149,480,154.7C560,160,640,224,720,234.7C800,245,880,203,960,170.7C1040,139,1120,117,1200,122.7C1280,128,1360,160,1400,176L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
        <h3 className="text-xl md:text-3xl absolute top-[10%] md:top-[45%]  md:left-[5%] px-7 md:px-0 text-secondary font-semibold flex justify-between items-center">
          <FaHome className="text-primary" />
          /About Us
        </h3>
      </div>
      <div className="md:w-[90%] mx-auto pb-7 mb-10 md:flex justify-between items-center">
        <div className="relative md:w-1/2 md:mr-20">
          <Image className="rounded px-7 md:p-0" src={img2} />
          <Image
            className="hidden md:block absolute top-[50%] left-[50%] md:w-[60%] border-[6px] rounded border-white"
            src={img1} height={400}
          />
        </div>
        <div className=" px-7 md:px-0 md:w-1/2">
          <h2 className="text-3xl font-bold pt-5 md:pt-0 md:pb-5">
            Affordable, Reliable and Quality Car Repair Shop.
          </h2>
          <p className="py-3">
            We are passionate about providing
            top-notch car services that keep your vehicle running smoothly and
            safely. With years of experience in the automotive industry, our
            skilled technicians are dedicated to delivering high-quality
            maintenance, repairs, and diagnostics to meet all your car care
            needs. Whether it's routine maintenance, complex repairs, or
            advanced diagnostics, we pride ourselves on offering transparent,
            reliable, and efficient services. Customer satisfaction is at the
            heart of everything we do, and we go the extra mile to ensure that
            your car is treated with the utmost care. Our state-of-the-art
            facility is equipped with the latest tools and technology, ensuring
            that we can handle vehicles of all makes and models. From oil
            changes and brake repairs to engine diagnostics and tire services,{" "}
            <strong>Auto Tech</strong> is your one-stop shop for comprehensive
            car care. Trust us to keep your car in peak condition, so you can
            drive with confidence. At <strong>Auto Tech</strong>, we're not just
            fixing cars—we're building trust, one vehicle at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
