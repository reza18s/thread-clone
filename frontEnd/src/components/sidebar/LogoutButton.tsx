import { LogOut } from "lucide-react";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { logout } = useLogout();

  return (
    <div className="mt-auto">
      <LogOut className="h-6 w-6 cursor-pointer text-white" onClick={logout} />
    </div>
  );
};
export default LogoutButton;
