import Image from "next/image";
import Logo from "@/assets/Logo.png";
import Link from "next/link";

function Footer() {
  return (
    <div className="md:h-[461px] md:py-[140px] py-8 px-[20px] lg:px-[220px] bg-[#043873] md:flex items-center w-full">
      <div className="md:h-[289px] md:w-full md:gap-[100px] gap-9 flex flex-wrap md:justify-between justify-center">
        <div className="lg:w-[295px]">
          <div>
            <Image src={Logo} className="w-[191px] h-9" alt="logo" />
          </div>
          <div className="mt-5">
            <p className="text-lg text-white font-inter">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </p>
          </div>
        </div>
        <div>
          <div>
            <p className="font-inter font-bold text-white">Product</p>
          </div>
          <div className="mt-3">
            <Link className="text-white font-inter block mt-1" href={"#"}>
              Overview
            </Link>
            <Link className="text-white font-inter block mt-1" href={"#"}>
              Pricing
            </Link>
            <Link className="text-white font-inter block mt-1" href={"#"}>
              Customer stories
            </Link>
          </div>
        </div>
        <div>
          <div>
            <p className="font-inter font-bold text-white">Resources</p>
          </div>
          <div className="mt-3">
            <Link className="text-white font-inter block mt-1" href={"#"}>
              Blogs
            </Link>
            <Link className="text-white font-inter block mt-1" href={"#"}>
              Guides & tutorial
            </Link>
            <Link className="text-white font-inter block mt-1" href={"#"}>
              Help center
            </Link>
          </div>
        </div>
        <div>
          <div>
            <p className="font-inter font-bold text-white">Compnay</p>
          </div>
          <div className="mt-3">
            <Link className="text-white font-inter block mt-1" href={"#"}>
              About us
            </Link>
            <Link className="text-white font-inter block mt-1" href={"#"}>
              Careers
            </Link>
            <Link className="text-white font-inter block mt-1" href={"#"}>
              Media kit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
