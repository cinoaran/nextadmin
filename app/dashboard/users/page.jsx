import styles from "../dashboard.module.css";
import Users from "@/app/ui/dashboard/users/users";

const UsersPage = () => {
  return (
    <div className={styles.content}>
      <Users />
    </div>
  );
};

export default UsersPage;
