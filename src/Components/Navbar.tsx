import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <div className="bg-[#043873] h-14 items-center md:h-20 flex justify-between py-4 lg:px-[220px] md:px-[50px] px-[20px]">
      <Image
        src={"/assets/Logo.png"}
        className="md:h-[34px] md:w-[191px] h-[25px] w-[140px]"
        height={34}
        width={191}
        alt="logo"
      />
      <div className="lg:hidden">
        <button className="text-white">
          <GiHamburgerMenu />
        </button>
      </div>
      <div className="lg:w-[735.5px] hidden h-[60px] lg:flex gap-14 items-center">
        <div className="lg:w-[549px]  object-none flex h-[23px] gap-8 my-3">
          <div className="w-[78px] gap-[10px]">
            <Link className="text-white" href={"#"}>
              Products
            </Link>
          </div>
          <div className="w-[79px] gap-[10px]">
            <Link className="text-white" href={"#"}>
              Solutions
            </Link>
          </div>
          <div className="w-[89px] gap-[10px] ">
            <Link className=" text-white" href={"#"}>
              Resources
            </Link>
          </div>
          <div className="w-[58px] gap-[10px]">
            <Link className=" text-white" href={"#"}>
              Pricing
            </Link>
          </div>
        </div>
        <div>
          <button className="lg:w-[126px] sm:w-[100px] h-[50px] bg-[#FFE492] text-[#043873]">
            login
          </button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
