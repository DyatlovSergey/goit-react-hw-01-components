import Friend from "../Friend/Friend";
import s from ".//FriendList.module.css";
export default function FriendsList({ items }) {
  return (
    <section class="friends">
      <ul>
        FRIENDS LIST
        {items.map((item) => (
          <Friend key={item.id} avatar={item.avatar} name={item.name} />
        ))}
      </ul>
    </section>
  );
}
