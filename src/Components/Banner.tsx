import { FaArrowRight } from "react-icons/fa";
function Banner() {
  return (
    <div className="md:h-[729px] md:py-[140px] py-8 px-[20px] lg:px-[220px] bg-[#043873] md:flex items-center w-full">
      <div className="md:h-[361px] md:w-[656px] gap-14 mb-5">
        <div>
          <p className="text-white text-[45px] md:text-[55px] font-bold font-inter leading-[77.45px]">
            Get More Done with whitepace
          </p>
          <p className="text-base md:text-[18px] font-inter text-white mt-5">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
          <button className="h-[63px] w-[219px] bg-[#4F9CF9] p-5 text-white font-inter font-medium rounded-lg mt-7">
            Try Whitespace free{" "}
            <FaArrowRight fontSize={15} className="inline-block" />
          </button>
        </div>
      </div>
      <div className="w-full h-[400px] lg:h-[549px] lg:w-[724px] bg-[#C4DEFD]"></div>
    </div>
  );
}
export default Banner;
