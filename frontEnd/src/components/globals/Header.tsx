import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "../ui/avatar";
import { ModeToggle } from "./modeToggle";
import { useTheme } from "@/Provider/themeProvider";
import { Link } from "react-router-dom";

export default function Header() {
  const { theme } = useTheme();
  return (
    <div className="flex h-14 w-full items-center justify-between py-3">
      <div>
        <Link to="/">
          <img
            className="size-10"
            src={theme === "light" ? "/dark-logo.svg" : "/light-logo.svg"}
            alt="logo"
          ></img>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <ModeToggle></ModeToggle>
        <Avatar className="flex items-center justify-center bg-accent">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
