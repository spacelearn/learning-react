import RoundedPhoto from "../components/Posts/RoundedPhoto";
import userPhoto from "../../src/assets/jiyo-profile.jpeg";

export default {
  component: RoundedPhoto,
};

export const Primary = {
  args: {
    photoPath: userPhoto,
    photoDescription: "User Photo",
  },
};
