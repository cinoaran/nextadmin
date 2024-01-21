import Link from "next/link";
import { FaHeartCircleCheck } from "react-icons/fa6";
import styles from "./wishlist.module.css";

const Wishlist = ({ title = "Wishlist checked", number = 20 }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wishInfo}>
        <span className={styles.title}>
          <FaHeartCircleCheck size="25" className={styles.wishIcon} />
          {title}
        </span>
      </div>
      <h5 className={styles.infoText}>{number} Times</h5>
      <Link
        href="/dashboard/wishlist"
        alt="Wishlist"
        className={styles.pageLink}
      >
        <span>View All</span>
      </Link>
    </div>
  );
};

export default Wishlist;
