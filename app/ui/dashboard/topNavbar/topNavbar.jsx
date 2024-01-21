"use client";
import { FaCircleDollarToSlot, FaTruckRampBox } from "react-icons/fa6";
import {
  MdAnalytics,
  MdHelpCenter,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
  MdArrowDropDown,
  MdClose,
  MdDashboard,
} from "react-icons/md";

import styles from "./topNavbar.module.css";
import { useState } from "react";
import MenuLink from "./menulink/menulink";

const TopNavbar = () => {
  const [sideBarStatus, setSideBarStatus] = useState(false);

  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard size="16" />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle size="16" />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag size="16" />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <FaCircleDollarToSlot size="15" />,
        },
        {
          title: "Suppliers",
          path: "/dashboard/suppliers",
          icon: <FaTruckRampBox size="15" />,
        },
      ],
    },
    {
      title: "Report",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork size="16" />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics size="16" />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople size="16" />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings size="15" />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter size="15" />,
        },
      ],
    },
  ];

  return (
    <div
      className={styles.container}
      onMouseLeave={() => setSideBarStatus(false)}
    >
      <div className={styles.wrapper}>
        <div
          className={styles.containerHeader}
          onClick={() => setSideBarStatus(!sideBarStatus)}
        >
          <h2 className={styles.toggleHeader}>
            <MdOutlineSettings size="26" />
          </h2>
        </div>
        {sideBarStatus &&
          menuItems.map((cat) => (
            <div className={styles.containerToggle} key={cat.title}>
              <div
                key={cat.title}
                className={styles.navLinks}
                onClick={() => setSideBarStatus(!sideBarStatus)}
              >
                <div className={styles.sideIcons}>{cat.icon}</div>
                <div>{cat.title}</div>
              </div>
              {
                <div className={styles.menuContainer}>
                  {cat.list.map((links) => (
                    <div
                      key={links.path}
                      className={
                        sideBarStatus ? styles.text : styles.textToggle
                      }
                    >
                      <MenuLink links={links} />
                    </div>
                  ))}
                </div>
              }
            </div>
          ))}
        <div
          className={styles.toggleClose}
          onClick={() => setSideBarStatus(!sideBarStatus)}
        >
          {sideBarStatus ? (
            <span>
              <MdClose size="20" />
            </span>
          ) : (
            <span>
              <MdArrowDropDown size="20" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
