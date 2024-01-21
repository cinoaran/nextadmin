import styles from "../dashboard.module.css";
import Users from "@/app/ui/dashboard/users/users";

const UsersPage = () => {
  return (
    <div className={styles.content}>
      <Users placeholder="Search for user" />
    </div>
  );
};

export default UsersPage;
