import Profile from "./components/profile";
import "./App.css";
import users from "./user.json";

const user = users;

export default function App() {
  return (
    <div>
      <Profile
        name={user.username}
        tag={user.tag}
        avatar={user.avatar}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
}
