"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./dashedChart.module.css";
import Link from "next/link";

const DashedChart = () => {
  const data = [
    { name: "Jan 23", revenue: 4000, expenditure: 2400, expected: 3111 },
    { name: "Feb 23", revenue: 3000, expenditure: 1398, expected: 3111 },
    { name: "Mar 23", revenue: 2000, expenditure: 9800, expected: 3400 },
    { name: "Apr 23", revenue: 2780, expenditure: 3908, expected: 4450 },
    { name: "May 23", revenue: 1890, expenditure: 4800, expected: 4900 },
    { name: "Jun 23", revenue: 2390, expenditure: 3800, expected: 4500 },
    { name: "Jul 23", revenue: 3490, expenditure: 4300, expected: 6000 },
    { name: "Aug 23", revenue: 4490, expenditure: 12000, expected: 7000 },
    { name: "Sep 23", revenue: 6490, expenditure: 8000, expected: 8290 },
    { name: "Okt 23", revenue: 5490, expenditure: 7230, expected: 5400 },
    { name: "Nov 23", revenue: 2490, expenditure: 4320, expected: 3900 },
    { name: "Dec 23", revenue: 1490, expenditure: 2000, expected: 3111 },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h6 className={styles.title}>Monthly Recap</h6>
        <Link href="/dashboard/calculation" className={styles.pageLink}>
          View All
        </Link>
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={data}
          margin={{
            top: 15,
            right: 20,
            left: 0,
            bottom: 5,
          }}
        >
          <YAxis className={styles.YAxis} />
          <XAxis className={styles.XAxis} dataKey="name" />
          <Tooltip
            contentStyle={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              gap: "5px",
              lineHeight: "1.4",
              background: "white",
              fontWeight: "400",
              border: "0.5px solid #bababa",
              borderRadius: "10px",
              textTransform: "capitalize",
            }}
            dataKey="name"
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="expected"
            stroke="#5b5b5e"
            strokeDasharray="9 1"
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="expenditure"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashedChart;
