import { latestTransactions } from "../../../../data";
import styles from "./transactions.module.css";
import OverviewList from "../overviewList/overviewList";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h6 className={styles.title}>Latest Transactions</h6>
      {latestTransactions.map((transaction) => (
        <OverviewList {...transaction} key={transaction.id} />
      ))}
    </div>
  );
};

export default Transactions;
