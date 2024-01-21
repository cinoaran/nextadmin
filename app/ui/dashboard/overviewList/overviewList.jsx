"use client";
import Image from "next/image";
import styles from "./overviewList.module.css";
import Status from "../../status/status";

const OverviewList = ({ id, img, username, email, amount, status }) => {
  return (
    <>
      <div className={styles.userList} key={id}>
        <div className={styles.userDetails}>
          <Image src={img} width={40} height={40} alt="User image" />
          <div className={styles.userText}>
            <p>{username}</p>
            {status ? (
              <p className={styles.userStatus}>
                <Status status={status} />
                {status}
              </p>
            ) : (
              <p>{email}</p>
            )}
          </div>
        </div>
        <div className={styles.userAmount}>
          <p>€ {amount}</p>
        </div>
      </div>
    </>
  );
};

export default OverviewList;
