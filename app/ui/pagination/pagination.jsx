import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./pagination.module.css";

const Pagination = ({ title }) => {
  return (
    <div className={styles.container}>
      <FaChevronLeft className={styles.left} />
      <h3 className={styles.pageTitle}>{title}</h3>
      <FaChevronRight className={styles.right} />
    </div>
  );
};

export default Pagination;
