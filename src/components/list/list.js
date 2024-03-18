import styles from "./list.module.scss";
import Image from "next/image";
import { SlBasket } from "react-icons/sl";

const List = ({ listItems }) => {
  return (
    <ul className={styles.list}>
      {listItems.map((item) => (
        <li key={item.name} className={styles.listItem}>
          <Image src={item.imageUrl} alt="image" height={200} width={200} />
          <p className={styles.price}>{item.price},00лв</p>
          <p className={styles.onlinePrice}>{item.onlinePrice},00лв</p>
          <p className={styles.name}>{item.name}</p>
          <div className={styles.buy}>
            <SlBasket />
            <a href="/buy">КУПИ ОНЛАЙН</a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
