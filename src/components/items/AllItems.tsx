import { useItemData } from "@/hooks/items/useItemData";
import { LoaderCircle, MailWarning } from "lucide-react";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function AllItems() {
  const { isPending, isError, data, error } = useItemData();

  if (isPending) {
    return (
      <div className="flex">
        <span className="text-3xl">"Loading..."</span>
        <LoaderCircle size={40} className="animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex">
        <MailWarning size={40} />
        <span className="text-3xl">{error.message}</span>
      </div>
    );
  }

  return (
    <div className="w-[800px]">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
