import Image from "next/image";
import Work_Together_Image from "@/assets/Work_Together_Image.png";
function WorkManagement() {
  return (
    <div className="md:h-[1588px] md:py-[140px] py-8 px-[20px] lg:px-[220px] gap-24 flex-wrap">
      <div className="md:h-[547px] md:flex gap-16 items-center">
        <div className="md:h-[411px] md:w-3/6">
          <p className="text-[72px] font-inter font-bold leading-[87.14px]">
            Project Management
          </p>
          <p className="text-base font-inter font-normal leading-7 mt-3">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <button className="h-[63px] w-[201px] bg-[#4F9CF9] p-5 text-white font-inter font-medium rounded-lg md:mt-10 my-5">
            Try Whitespace free
          </button>
        </div>
        <div className="w-full h-[400px] lg:h-[500px] lg:w-[824px] bg-[#C4DEFD]"></div>
      </div>
      <div className="mt-32 md:flex ">
        <Image
          height={150}
          width={300}
          src={Work_Together_Image}
          alt="work image"
        />
      </div>
    </div>
  );
}
export default WorkManagement;
