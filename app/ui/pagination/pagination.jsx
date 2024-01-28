import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./pagination.module.css";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <FaChevronLeft className={styles.left} />
      <FaChevronRight className={styles.right} />
    </div>
  );
};

export default Pagination;
