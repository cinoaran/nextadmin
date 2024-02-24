import UserForm from "@/app/ui/dashboard/userEditForm/userEditForm";
import { userRows } from "../../../../data";

const UserPage = async ({ params }) => {
  const userById = await userRows.find(
    (user) => user.id === Number(params.userId)
  );
  return <UserForm userById={userById} />;
};

export default UserPage;
