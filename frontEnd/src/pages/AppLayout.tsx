import Header from "@/components/globals/Header";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="mx-auto flex h-screen w-full max-w-[1200px]">
      <Header />
      <Outlet />
    </div>
  );
}
