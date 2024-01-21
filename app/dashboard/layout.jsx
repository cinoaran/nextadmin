import { Inter } from "next/font/google";
import Footer from "../ui/dashboard/footer/footer";
import Navbar from "../ui/dashboard/navbar/navbar";

import styles from "./dashboard.module.css";
import TopNavbar from "../ui/dashboard/topNavbar/topNavbar";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const Layout = ({ children }) => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Navbar className={inter.className} />
        <TopNavbar className={inter.className} />
        {children}
        <Footer className={inter.className} />
      </div>
    </main>
  );
};

export default Layout;
