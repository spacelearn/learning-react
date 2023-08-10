const Card = ({ children }) => {
  return (
    <div
      className="px-4 pt-3 pb-2.5 mb-4 rounded-md"
      style={{ backgroundColor: "#242526" }}
    >
      {children}
    </div>
  );
};

export default Card;
