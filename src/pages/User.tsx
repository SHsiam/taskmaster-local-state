import { AddUserModel } from "@/components/module/users/AddUserModel";
import UserCard from "@/components/module/users/UserCard";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

export const User = () => {
  // const users = useAppSelector(selectUsers);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex items-end justify-between gap-5">
        <h1 className="mr-auto ">User</h1>
        <AddUserModel />
      </div>
      <div className=" mt-5 flex flex-wrap justify-normal gap-5">
        {/* {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))} */}
      </div>
    </div>
  );
};
