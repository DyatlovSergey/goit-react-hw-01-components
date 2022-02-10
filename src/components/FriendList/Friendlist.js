import Friend from "../Friend/Friend";
import propTypes from "prop-types";
import s from ".//FriendList.module.css";
export default function FriendsList({ items }) {
  return (
    <section className={s.friends}>
      <ul>
        {items.map((item) => (
          <Friend
            key={item.id}
            isOnline={item.isOnline}
            avatar={item.avatar}
            name={item.name}
          />
        ))}
      </ul>
    </section>
  );
}

FriendsList.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({ id: propTypes.string.isRequired })
  ),
};
