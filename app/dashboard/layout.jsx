import { Inter } from "next/font/google";
import Footer from "../ui/dashboard/footer/footer";
import Navbar from "../ui/dashboard/navbar/navbar";

import styles from "./dashboard.module.css";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <nav>
        <Navbar className={inter.className} />
      </nav>
      <main className={styles.main}>{children}</main>
      <Footer className={inter.className} />
    </div>
  );
};

export default Layout;
