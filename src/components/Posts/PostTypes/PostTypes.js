import Icon from "./Icon";
import Label from "./Label";
import PostType from "./PostType";

const PostTypes = ({ children }) => {
  return (
    <ul
      style={{ borderColor: "rgba(255,255,255,.1)" }}
      className="mt-3 pt-2 border-t border-white flex justify-evenly list-none"
    >
      {children}
    </ul>
  );
};

export default PostTypes;
