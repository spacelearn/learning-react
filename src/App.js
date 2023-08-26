import CreatePost from "./components/Posts/CreatePost";
import ExercisePanel from "./components/Layout/ExercisePanel";
import userPhoto from "./assets/jiyo-profile.jpeg";
import CreatePostModal from "./components/Posts/CreatePostModal";

function App() {
  return (
    <ExercisePanel>
      <CreatePost userPhoto={userPhoto} userName="Jiyo Collin" />
      <CreatePostModal />
    </ExercisePanel>
  );
}

export default App;
