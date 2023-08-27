const Label = ({
  children,
  className: externalClassName,
  style: externalStyle,
}) => {
  let className = `font-semibold text-sm text-[#B0B3B8]`;

  if (externalClassName && externalClassName.includes("text-")) {
    let newTextColor = "text-white";
    if (externalClassName.split(" ").length > 1) {
      const filteredClassName = externalClassName
        .split(" ")
        .filter((val) => val.startsWith("text-"));
      newTextColor = filteredClassName[filteredClassName.length - 1];
    } else if (externalClassName.split(" ").length === 1) {
      newTextColor = externalClassName;
    }
    className = className.replace("text-[#B0B3B8]", newTextColor);
  }
  return (
    <span className={className} style={externalStyle}>
      {children}
    </span>
  );
};

export default Label;
