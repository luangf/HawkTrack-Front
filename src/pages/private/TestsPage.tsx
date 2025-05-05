import { Button } from "@/components/ui/button";
import { Send, User } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export default function TestsPage() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-2">
      <Toaster />
      <Button
        onClick={() => {
          toast("Event has been created.", {
            className: "bg-green-500 text-green-500",
            description: "With a description and an icon",
            duration: 1000,
            icon: <User />,
          });
          toast.success("Event has been created.");
          toast.error("Event hasn't been created.");
        }}
        variant="custom"
        size="custom"
      >
        <Send />
        Send
      </Button>
      <Button
        onClick={() => {
          toast("Event has been created.", {
            className: "bg-green-500 text-green-500",
            description: "With a description and an icon",
            duration: 1000,
            icon: <User />,
          });
          toast.success("Event has been created.");
          toast.error("Event hasn't been created.");
        }}
      >
        <Send />
        Send
      </Button>
    </div>
  );
}
