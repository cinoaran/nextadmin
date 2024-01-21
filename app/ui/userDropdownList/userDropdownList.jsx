"use client";
import Link from "next/link";
import { FaFolder } from "react-icons/fa";
import { MdClose, MdDashboard, MdTextsms } from "react-icons/md";
import { usePathname } from "next/navigation";
import styles from "./userDropdownList.module.css";
import Image from "next/image";

const UserDropdownList = ({
  image,
  name,
  dashboardPath,
  profilePath,
  messagePath,
}) => {
  const userAvatar = image ? (
    <Image src={`/${image}`} width="60" height="60" alt="User Image" />
  ) : (
    <p>{name.charAt(0)}</p>
  );
  const linkPath = usePathname();
  return (
    <div className={styles.userPopup}>
      <div className={styles.userPopupDetails}>
        <div className={styles.userAvatar}>
          <div className={styles.userAvatarContent}>{userAvatar}</div>
        </div>
        <div className={styles.profile}>
          <h3 className={styles.profileHeader}>
            Welcome <br /> {name}
          </h3>
          <div>
            <Link
              href={dashboardPath}
              alt="Dashboard page"
              className={`${styles.profileLink} ${
                linkPath === dashboardPath && styles.activeIcon
              }`}
            >
              <MdDashboard /> Dashboard
            </Link>
            <Link
              href={profilePath}
              alt="Profile Settings"
              className={`${styles.profileLink} ${
                linkPath === profilePath && styles.activeIcon
              }`}
            >
              <FaFolder /> Profile Settings
            </Link>
            <Link
              href={messagePath}
              alt="Admin Messages"
              className={`${styles.profileLink} ${
                linkPath === messagePath && styles.activeIcon
              }`}
            >
              <MdTextsms /> Messages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDropdownList;
