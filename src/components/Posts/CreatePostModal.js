import Card from "../UI/Card";
import RoundedPhoto from "./RoundedPhoto";
import userPhoto from "../../assets/jiyo-profile.jpeg";
import Label from "./PostTypes/Label";
import friendIcon from "../../assets/icon/friends.png";
import Icon from "./PostTypes/Icon";
import dropdownIcon from "../../assets/icon/dropdown.png";

const CreatePostModal = () => {
  return (
    <Card className="text-white">
      <div className="flex justify-center">
        <div className="inline-block font-semibold text-xl bg-[#242526]">
          Create Post
        </div>
      </div>
      <div className="flex">
        <div>
          <RoundedPhoto photoPath={userPhoto} photoDescription="User Photo" />
        </div>
        <div>
          <Label className="text-white">Jiyo Collin Pagtananan</Label>
          <div>
            <div className="inline-block px-2 bg-[#3A3B3C] text-white rounded-md">
              <span className="mr-2">
                <Icon
                  className="filter invert"
                  size="sm"
                  iconPath={friendIcon}
                  iconDescription="Friends"
                />
              </span>
              <span className="text-xs font-semibold">Friends</span>
              <Icon
                className="filter invert"
                iconPath={dropdownIcon}
                iconDescription="Dropdown"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <textarea name="" id="" cols="30" rows="10">
          What's on your mind, Jiyo Collin?
        </textarea>
      </div>
      <div>Add to your post</div>
      <div>
        <button>Post</button>
      </div>
    </Card>
  );
};

export default CreatePostModal;
