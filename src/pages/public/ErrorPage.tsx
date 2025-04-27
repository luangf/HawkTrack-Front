import { CircleX } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

function ErrorPage() {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1 flex-col items-center justify-center gap-6 text-4xl font-bold">
        <div className="flex gap-2">
          <CircleX size={40} />
          <h1>Page Not Found</h1>
        </div>
        <Link
          className="rounded-[var(--border-radius)] border-2 p-4 text-blue-500 shadow-[var(--box-shadow)] hover:bg-amber-200"
          to="/home"
        >
          Go to Home Page
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default ErrorPage;
