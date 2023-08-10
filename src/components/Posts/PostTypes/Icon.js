const Icon = ({ iconPath, iconDescription }) => {
  return (
    <img
      className="inline-block mr-2"
      src={iconPath}
      alt={iconDescription}
      width="24px"
      height="24px"
    />
  );
};

export default Icon;
