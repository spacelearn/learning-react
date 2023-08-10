const RoundedTextbox = ({ placeholder }) => {
  return (
    <button className="text-[#B8BBBF] rounded-full flex-grow bg-[#3A3B3C] text-left px-3 py-2 hover:bg-[rgb(61,62,63)]">
      {placeholder}
    </button>
  );
};

export default RoundedTextbox;
