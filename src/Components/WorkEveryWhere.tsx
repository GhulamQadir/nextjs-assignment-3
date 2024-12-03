import { FaArrowRight } from "react-icons/fa";
function WorkEveryWhere() {
  return (
    <div className="md:h-[500px] md:py-[140px] py-8 px-[20px] lg:px-[220px] bg-[#043873] content-center text-center w-full">
      <div className="md:h-[294px]">
        <div>
          <p className="text-white text-[50px] md:text-[60px] font-bold font-inter leading-tight md:leading-[77.45px]">
            Your work, everywhere you are
          </p>
          <p className="text-base md:text-lg text-white mt-7">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>
        </div>
        <div className="mt-14">
          <button className="h-[55px] w-[186px] rounded-md  bg-[#4F9CF9] text-white text-lg font-medium font-inter">
            Try Taskkey <FaArrowRight fontSize={15} className="inline-block" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default WorkEveryWhere;
