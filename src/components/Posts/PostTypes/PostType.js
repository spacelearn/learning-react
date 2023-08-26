const PostType = ({ children }) => {
  return (
    <li className="w-full p-2 rounded-md flex justify-center items-center hover:bg-[#3A3B3C]">
      {children}
    </li>
  );
};

export default PostType;
