import Image from "next/image";
import Google from "@/assets/google_img.png";
import Apple from "@/assets/Apple.png";
import Microsoft from "@/assets/Microsoft.png";
import Slack from "@/assets/Slack.png";

function Sponsors() {
  return (
    <div className="md:h-[450px] py-[100px] px-[20px] lg:px-[220px] text-center">
      <div className="md:h-[87px]">
        <p className="text-5xl md:text-7xl font-bold font-inter leading-87.[14px] tracking-[-2%]">
          Our sponsors
        </p>
      </div>
      <div className="md:mt-20 mt-16 flex md:justify-between justify-center flex-wrap items-center gap-x-16 gap-y-12">
        <Image
          src={Apple}
          alt="apple img img"
          className="h-[68px] w-[55.47px]"
        />
        <Image
          src={Microsoft}
          alt="microsoft img"
          className="h-[62px] w-[200px]"
        />
        <Image src={Slack} alt="slack img" className="h-[68px] w-[200px]" />
        <Image src={Google} alt="google img" className="h-[68px] w-[180px]" />
      </div>
    </div>
  );
}
export default Sponsors;
