const RoundedPhoto = ({ photoPath, photoDescription }) => {
  return (
    <img
      src={photoPath}
      alt={photoDescription}
      width="50px"
      height="40px"
      className="rounded-full mr-2"
    />
  );
};

export default RoundedPhoto;
