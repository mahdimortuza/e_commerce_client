const MainButton = (props) => {
  const { text } = props;
  return (
    <div>
      <button className="btn btn-sm rounded-full text-sm text-white outline-none hover:text-black bg-[#e6005c] hover:bg-transparent border-transparent hover:border-1 hover:border-[#e6005c]">
        {text}
      </button>
    </div>
  );
};

export default MainButton;
