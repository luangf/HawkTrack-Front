import Footer from "../../components/Footer";
import { MailPlus } from "lucide-react";
import { Link } from "react-router-dom";

function PosForgotPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex items-center justify-center md:flex-1">
        <main className="flex w-full max-w-3xl flex-col items-center gap-4 border-b-2 border-[var(--border-color)] bg-white p-4 shadow-[var(--box-shadow)] md:rounded-[var(--border-radius)] md:border-2">
          <MailPlus size={50} />
          <p>
            Check your email for a link to reset your password. If it doesn’t
            appear within a few minutes, check your spam folder.
          </p>

          <Link
            className="underline hover:rounded-[var(--border-radius)] hover:bg-amber-100"
            to="/"
          >
            Return to Login Page
          </Link>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default PosForgotPasswordPage;
