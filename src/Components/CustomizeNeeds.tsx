function CustomizeNeeds() {
  return (
    <div className="md:h-[750px] py-[100px] px-[20px] lg:px-[220px] gap-24 md:flex items-center">
      <div className="w-full h-[400px] lg:h-[500px] lg:w-[824px] bg-[#C4DEFD]"></div>
      <div className="lg:w-[670px] mt-4">
        <div>
          <p className="text-[50px] md:text-[65px] font-bold leading-[87.14px] font-inter">
            Customize it to your needs
          </p>
        </div>
        <div className="mt-4">
          <p className="text-base font-normal font-inter leading-[30px]">
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </p>
        </div>
        <div className="mt-10">
          <button className="h-[55px] w-[186px] rounded-md  bg-[#4F9CF9] text-white text-lg font-medium font-inter">
            Let's Go
          </button>
        </div>
      </div>
    </div>
  );
}
export default CustomizeNeeds;
