import { CircleX } from "lucide-react";
import { Link } from "react-router-dom";
import AuthFlowWrapper from "@/components/auth-flow/AuthFlowWrapper";

export default function ErrorPage() {
  return (
    <AuthFlowWrapper>
      <div className="flex gap-2 items-center">
        <CircleX size={40} />
        <h1 className="text-2xl font-bold">Page Not Found</h1>
      </div>
      <Link
        className="rounded-[var(--border-radius)] border-2 p-4 text-blue-500 shadow-[var(--box-shadow)] hover:bg-amber-200"
        to="/category"
      >
        Go to Home Page
      </Link>
    </AuthFlowWrapper>
  );
}
