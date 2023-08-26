const RoundedTextbox = ({ children }) => {
  return (
    <button className="text-[#B8BBBF] rounded-full w-full bg-[#3A3B3C] text-left px-3 py-2 hover:bg-[rgb(61,62,63)]">
      {children}
    </button>
  );
};

export default RoundedTextbox;
