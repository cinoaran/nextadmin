import styles from "./users.module.css";
import Card from "../card/card";
import { userRows } from "../../../../data";

const Users = () => {
  return (
    <div className={styles.container}>
      {userRows.map((user) => (
        <Card key={user.id} {...user} />
      ))}
    </div>
  );
};

export default Users;
