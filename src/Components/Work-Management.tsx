import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Work_Together_Image from "@/assets/Work_Together_Image.png";
function WorkManagement() {
  return (
    <div className="md:h-[1370px] py-[100px] px-[20px] lg:px-[220px] gap-24">
      <div className="md:h-[547px] md:flex gap-16 items-center">
        <div className="md:h-[411px] md:w-3/6">
          <p className="text-[52px] md:text-[72px] font-inter font-bold leading-[87.14px]">
            Project Management
          </p>
          <p className="text-base font-inter font-normal leading-7 mt-3">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <button className="h-[63px] bg-[#4F9CF9] p-5 text-white font-inter font-medium rounded-lg md:mt-10 my-5">
            Try Whitespace free{" "}
            <FaArrowRight fontSize={15} className="inline-block" />
          </button>
        </div>
        <div className="w-full h-[400px] lg:h-[500px] lg:w-[824px] bg-[#C4DEFD]"></div>
      </div>
      <div className="mt-32 md:flex md:h-[560px]  gap-24 items-center">
        <div>
          <Image
            width={500}
            src={Work_Together_Image}
            alt="work image"
            className="h-[450px]"
          />
        </div>
        <div className="lg:w-[670px] mt-4">
          <div>
            <p className="text-[52px] md:text-[72px] font-bold leading-[87.14px] font-inter">
              Work Together
            </p>
          </div>
          <div className="mt-4">
            <p className="text-base font-normal font-inter leading-[30px]">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>
          </div>
          <div className="mt-8">
            <button className="h-[55px] w-[186px] rounded-md  bg-[#4F9CF9] text-white text-lg font-medium">
              Try it now <FaArrowRight fontSize={15} className="inline-block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WorkManagement;
