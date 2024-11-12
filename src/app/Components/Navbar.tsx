import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-[#043873] h-20 w-full flex justify-between py-4 px-[220px]">
      <Image src={"/assets/Logo.png"} height={34} width={191} alt="logo" />
      <div className="w-[735.5px] h-[60px] flex gap-14">
        <div className="w-[549px] flex h-[23px] gap-8 my-3">
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
          <button className="w-[126px] h-[50px] bg-[#FFE492] text-[#043873]">
            login
          </button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
