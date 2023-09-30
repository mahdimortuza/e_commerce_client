const MainHeader = ({ heading, subHeading }) => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-[#e6005c] font-bold md:text-4xl text-2xl">
        -- {heading} --
      </h1>
      <p className="text-md md:text-xl">{subHeading}</p>
    </div>
  );
};

export default MainHeader;
