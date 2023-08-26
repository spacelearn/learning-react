import PostTypes from "./PostTypes/PostTypes";
import RoundedPhoto from "./RoundedPhoto";
import RoundedTextbox from "./RoundedTextbox";
import videoIcon from "../../assets/icon/video.png";
import photoIcon from "../../assets/icon/photo.png";
import feelingIcon from "../../assets/icon/feeling.png";
import Card from "../UI/Card";
import PostType from "./PostTypes/PostType";
import Icon from "./PostTypes/Icon";
import Label from "./PostTypes/Label";

const CreatePost = ({ userPhoto, userName }) => {
  const defaultTypes = [
    {
      icon: videoIcon,
      description: "Video Icon",
      label: "Live video",
    },
    {
      icon: photoIcon,
      description: "Photo Icon",
      label: "Photo/video",
    },
    {
      icon: feelingIcon,
      description: "Feeling Icon",
      label: "Feeling/activity",
    },
  ];

  return (
    <Card>
      <div className="flex">
        <RoundedPhoto photoPath={userPhoto} photoDescription="User Photo" />
        <RoundedTextbox>{`What's on your mind, ${userName}?`}</RoundedTextbox>
      </div>
      <PostTypes>
        {defaultTypes.map((type) => (
          <PostType>
            <span className="mr-2">
              <Icon
                className="text-white"
                iconPath={type.icon}
                iconDescription={type.description}
              />
            </span>
            <Label>{type.label}</Label>
          </PostType>
        ))}
      </PostTypes>
    </Card>
  );
};

export default CreatePost;
