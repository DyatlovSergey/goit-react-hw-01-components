import Profile from "./components/Profile";
import StatisticList from "./components/StatisticList";
import FriendsList from "./components/Friendlist";
import "./App.css";
import users from "./user.json";
import statistics from "./data.json";
import friends from "./friends.json";

// const data = statistics;
// const friend = friends;

export default function App() {
  return (
    <div>
      <Profile
        name={users.username}
        tag={users.tag}
        avatar={users.avatar}
        location={users.location}
        followers={users.stats.followers}
        views={users.stats.views}
        likes={users.stats.likes}
      />
      <StatisticList items={statistics} />
      <FriendsList items={friends} />
    </div>
  );
}
