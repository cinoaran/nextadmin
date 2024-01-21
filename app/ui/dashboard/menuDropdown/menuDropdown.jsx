"use client";
import { React, useState } from "react";
import { FaUserCog } from "react-icons/fa";
import styles from "./menuDropdown.module.css";
import UserDropdownList from "../../userDropdownList/userDropdownList";

const MenuDropdown = ({ user }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <FaUserCog size="24" onMouseOver={() => setOpen(true)} />

      {open && (
        <div onMouseLeave={() => setOpen(false)}>
          <UserDropdownList {...user} />
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
