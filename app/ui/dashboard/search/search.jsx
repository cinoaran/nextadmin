import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  return (
    <div className={styles.search}>
      <MdSearch className={styles.icon} />
      <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  );
};

export default Search;
