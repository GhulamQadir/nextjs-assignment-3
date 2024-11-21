function ExtensionBanner() {
  return (
    <div className="md:h-[729px] md:py-[140px] py-8 px-[20px] lg:px-[220px] bg-[#043873] md:flex items-center w-full">
      <div className="md:h-[361px] md:w-[656px] gap-14 mb-5 content-center">
        <p className="text-white text-[55px] md:text-[65px] font-bold font-inter leading-[77.45px]">
          Use as Extension
        </p>
        <p className="text-base md:text-[18px] font-inter text-white mt-5">
          Use the web clipper extension, available on Chrome and Firefox, to
          save web pages or take screenshots as notes.
        </p>
        <button className="h-[50px] w-[190px] md:h-[63px] md:w-[219px] bg-[#4F9CF9] p-5 text-white font-inter font-medium rounded-lg mt-10 mb-7">
          Let's Go
        </button>
      </div>
      <div className="w-full h-[400px] lg:h-[549px] lg:w-[700px] bg-[#C4DEFD]"></div>
    </div>
  );
}
export default ExtensionBanner;
