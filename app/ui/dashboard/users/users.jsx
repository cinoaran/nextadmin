"use client";

import styles from "./users.module.css";
import Card from "../card/card";
import { FaUserPlus } from "react-icons/fa";
import { MdFilterListAlt } from "react-icons/md";
import { userRows } from "../../../../data";
import Search from "../search/search";
import Status from "../../status/status";
import Link from "next/link";
import Pagination from "../../pagination/pagination";
import { useState } from "react";

const Users = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.pageTitle}>User List</h2>
        <Link href={"/dashboard/users/add"}>
          <span className={styles.add}>
            <FaUserPlus size="20" /> Add user
          </span>
        </Link>
      </div>
      <div className={styles.toggleContainer}>
        <div className={styles.statusToggle}>
          <div onClick={() => setToggle(!toggle)}>
            <span className={styles.status}>
              <MdFilterListAlt size="20px" /> Status
            </span>
          </div>
          {toggle && (
            <div
              className={styles.toggleList}
              onMouseLeave={() => setToggle(false)}
            >
              <div className={styles.toggleItems}>
                <Status status="Done" /> <span>Done</span>
              </div>
              <div className={styles.toggleItems}>
                <Status status="Pending" /> <span>Pending</span>
              </div>
              <div className={styles.toggleItems}>
                <Status status="Cancelled" /> <span>Pending</span>
              </div>
            </div>
          )}
        </div>
        <div className={styles.search}>
          <Search placeholder="Search for a user" />
        </div>
      </div>
      <div className={styles.pagination}>
        <Pagination />
      </div>

      <div className={styles.userCards}>
        {userRows.map((user) => (
          <Card key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
