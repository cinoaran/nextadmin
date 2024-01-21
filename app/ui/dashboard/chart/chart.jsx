"use client";
import Link from "next/link";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { MdBarChart } from "react-icons/md";
import styles from "./chart.module.css";

const Chart = ({ title, number, chartData, dataKey, color, percentage }) => {
  return (
    <div className={styles.container}>
      <div className={styles.chartInfo}>
        <span className={styles.title}>
          <MdBarChart size="25" color={color} className={styles.chartIcon} />
          {title}
        </span>
        <h5>{number}</h5>
        <Link
          href={`/dashboard/${dataKey}`}
          alt={`Link to ${dataKey} page`}
          style={{ color: color }}
        >
          <span className={styles.pageLink}>View All</span>
        </Link>
      </div>
      <div className={styles.chartScreen}>
        <ResponsiveContainer width="90%" height="70%">
          <LineChart data={chartData}>
            <Tooltip
              contentStyle={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                background: "white",
                border: "none",
                fontWeight: "400",
              }}
              labelFormatter={function (value) {
                return (
                  <b style={{ color: color }}>{`${chartData[value].name}`}</b>
                );
              }}
              position={{ x: 0, y: 85 }}
            />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
        <p className={styles.percentage}>
          <span
            className={styles.duration}
            style={{ color: percentage > 0 ? color : "maroon" }}
          >
            {percentage} %
          </span>
          weekly
        </p>
      </div>
    </div>
  );
};

export default Chart;
