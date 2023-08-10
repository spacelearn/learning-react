import Icon from "./Icon";
import Label from "./Label";

const PostTypes = ({ types }) => {
  return (
    <div
      className="mt-3 pt-2 border-t border-white flex list-none justify-evenly"
      style={{ borderColor: "rgba(255,255,255,.1)" }}
    >
      {types.map((type) => (
        <li className="w-full p-2 rounded-md flex justify-center items-center hover:bg-[#3A3B3C]">
          <Icon iconPath={type.icon} iconDescription={type.description} />
          <Label>{type.label}</Label>
        </li>
      ))}
    </div>
  );
};

export default PostTypes;
