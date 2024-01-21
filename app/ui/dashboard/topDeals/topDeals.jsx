import styles from "./topDeals.module.css";
import { topDealUsers } from "../../../../data";
import OverviewList from "../overviewList/overviewList";

const TopDeals = () => {
  return (
    <div className={styles.container}>
      <h6 className={styles.title}>Top Deals</h6>
      {topDealUsers.map((user) => (
        <OverviewList {...user} key={user.id} />
      ))}
    </div>
  );
};

export default TopDeals;
