import PostTypes from "./PostTypes/PostTypes";
import userPhoto from "../../assets/jiyo-profile.jpeg";
import RoundedPhoto from "./RoundedPhoto";
import RoundedTextbox from "./RoundedTextbox";
import videoIcon from "../../assets/icon/video.png";
import photoIcon from "../../assets/icon/photo.png";
import feelingIcon from "../../assets/icon/feeling.png";
import Card from "../UI/Card";

const CreatePost = () => {
  const user = "Jiyo Collin";
  const types = [
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
        <RoundedTextbox placeholder={`What's on your mind, ${user}?`} />
      </div>
      <PostTypes types={types} />
    </Card>
  );
};

export default CreatePost;
