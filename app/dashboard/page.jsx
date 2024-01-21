import Chart from "../ui/dashboard/chart/chart";
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxConversion,
} from "../../data";
import TopDeals from "../ui/dashboard/topDeals/topDeals";
import styles from "./dashboard.module.css";
import Transactions from "../ui/dashboard/transactions/transactions";
import DashedChart from "../ui/dashboard/dashedChart/dashedChart";
import Stock from "../ui/dashboard/stock/stock";
import Wishlist from "../ui/dashboard/wishlist/wishlist";

const DashboardPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.contentWrapper}>
        <div className={`${styles.box} ${styles.box1}`}>
          <TopDeals />
        </div>
        <div className={`${styles.box} ${styles.box2}`}>
          <Chart {...chartBoxUser} />
        </div>
        <div className={`${styles.box} ${styles.box3}`}>
          <Chart {...chartBoxProduct} />
        </div>
        <div className={`${styles.box} ${styles.box4}`}>
          <Transactions />
        </div>
        <div className={`${styles.box} ${styles.box5}`}>
          <Chart {...chartBoxRevenue} />
        </div>
        <div className={`${styles.box} ${styles.box6}`}>
          <Chart {...chartBoxConversion} />
        </div>
        <div className={`${styles.box} ${styles.box7}`}>
          <DashedChart />
        </div>
        <div className={`${styles.box} ${styles.box8}`}>
          <Stock />
        </div>
        <div className={`${styles.box} ${styles.box9}`}>
          <Wishlist />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
