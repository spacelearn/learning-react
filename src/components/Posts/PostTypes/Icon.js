const Icon = ({
  iconPath,
  iconDescription,
  size = "",
  className: externalClassName = "",
}) => {
  let classes = `inline-block ${externalClassName}`;
  let width = "24px";
  let height = "24px";

  if (size === "sm") {
    width = "12px";
    height = "12px";
  }
  return (
    <img
      className={classes}
      src={iconPath}
      alt={iconDescription}
      width={width}
      height={height}
    />
  );
};

export default Icon;
