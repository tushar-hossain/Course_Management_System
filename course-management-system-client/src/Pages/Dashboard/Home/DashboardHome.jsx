import { use } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";

export default function DashboardHome() {
  const { isDark } = use(AuthContext);
  return (
    <div
      className={`py-12 px-4 rounded-md ${isDark ? "bg-black" : "bg-black"}`}
    >
      DashboardHome
    </div>
  );
}
