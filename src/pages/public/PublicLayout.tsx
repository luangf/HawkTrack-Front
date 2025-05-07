import { Outlet } from "react-router-dom";
import AuthFlowWrapper from "@/components/auth-flow/AuthFlowWrapper";

export default function PublicLayout() {
  return (
    <AuthFlowWrapper>
      <Outlet />
    </AuthFlowWrapper>
  );
}
