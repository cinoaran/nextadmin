import { FaBoxOpen } from "react-icons/fa6";
import styles from "./stock.module.css";
import Link from "next/link";

const Stock = ({ title = "Out of stock", number = 20 }) => {
  return (
    <div className={styles.container}>
      <div className={styles.stockInfo}>
        <span className={styles.title}>
          <FaBoxOpen size="25" className={styles.stockIcon} />
          {title}
        </span>
      </div>
      <h5 className={styles.infoText}>{number} Products</h5>
      <Link
        href="/dashboard/products"
        alt="Products out of stock"
        className={styles.pageLink}
      >
        <span>View All</span>
      </Link>
    </div>
  );
};

export default Stock;
