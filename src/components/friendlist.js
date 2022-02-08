import Friend from "./Friend";

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
