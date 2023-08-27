const Card = ({ children, className }) => {
  const classes = `px-4 pt-3 pb-2.5 mb-4 rounded-md ${className}`;
  return (
    <div className={classes} style={{ backgroundColor: "#242526" }}>
      {children}
    </div>
  );
};

export default Card;
