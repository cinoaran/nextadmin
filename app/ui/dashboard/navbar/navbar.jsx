import MenuDropdown from "../menuDropdown/menuDropdown";
import { MdLogout, MdNotifications } from "react-icons/md";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const adminUser = {
    id: "8811",
    name: "Cino Cüneyt Aran",
    lastName: "Doe Smanatha",
    image: "admin/avatar.png",
    dashboardPath: "/dashboard",
    profilePath: "/dashboard/admin",
    messagePath: "/dashboard/messages",
  };
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/dashboard" alt="Back to dashboard">
          <h1 className={styles.centerLogoText}>0</h1>
          <span className={styles.rightLogoText}>ARAN DESIGN</span>
        </Link>
      </div>
      <div>
        <ul className={styles.navigation}>
          <li className={styles.icon}>
            <MdNotifications size="25" />
          </li>
          <li className={styles.icon}>
            <MenuDropdown user={adminUser} />
          </li>
          <li className={styles.icon}>
            <MdLogout size="25" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
