"use client";
import Link from "next/link";
import styles from "./menulink.module.css";
import { usePathname } from "next/navigation";

const MenuLink = ({ links }) => {
  const linkPath = usePathname();

  return (
    <Link href={links.path} className={styles.container}>
      <div
        className={`${styles.icon} ${
          linkPath === links.path && styles.activeIcon
        }`}
      >
        {links.icon}
      </div>
      <div
        className={`${styles.title} ${
          linkPath === links.path && styles.activeText
        }`}
      >
        {links.title}
      </div>
    </Link>
  );
};

export default MenuLink;
