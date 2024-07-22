import useLogout from "@/Hooks/useLogout";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
  const { logout } = useLogout();

  return (
    <div className="mt-auto">
      <LogOut className="h-6 w-6 cursor-pointer text-white" onClick={logout} />
    </div>
  );
};
export default LogoutButton;
