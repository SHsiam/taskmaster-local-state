import { Button } from "@/components/ui/button";
import { removeUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import type { IUser } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  user: IUser;
}

export default function UserCard({ user }: IProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1>{user.name}</h1>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="link"
            className="p-0 text-red-500"
            onClick={() => dispatch(removeUser(user.id))}
          >
            <Trash2 />
          </Button>
        </div>
      </div>
    </div>
  );
}
