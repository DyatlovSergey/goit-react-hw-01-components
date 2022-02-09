import Profile from "./components/Profile/Profile";
import StatisticList from "./components/Statistic/StatisticList";
import FriendsList from "./components/FriendList/Friendlist";
import TransactionHistory from "./components/TransactionHistory";
import "./App.css";
import users from "./user.json";
import statistics from "./data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

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
      <StatisticList title="Upload stats" items={statistics} />
      <FriendsList items={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
