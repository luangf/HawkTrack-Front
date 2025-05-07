import { Funnel, LoaderCircle, MailWarning, Search } from "lucide-react";
import { CategoryDataGET } from "../../interface/categoryData";
import CategoryCard from "./CategoryCard";
import { useCategoryData } from "@/components/categories/hooks/useCategoryData";

function AllCardsCategories() {
  const { isPending, isError, data, error } = useCategoryData();

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
    <>
      <h1 className="my-4 text-3xl font-bold">Your Categories</h1>
      <div className="relative flex gap-4">
        <label
          htmlFor="nameSearch"
          className="absolute top-1/4 left-1 cursor-text"
        >
          <Search />
        </label>
        <input
          type="text"
          className="rounded-[var(--border-radius)] border-2 border-[var(--border-color)] bg-white p-2 pl-8"
          placeholder="Search by name..."
          id="nameSearch"
        />
        <button
          type="button"
          className="flex cursor-pointer items-center gap-1 rounded-[var(--border-radius)] border-2 border-[var(--border-color)] bg-white p-2"
        >
          <Funnel />
          Last Created
        </button>
      </div>
      {data
        .slice()
        .reverse()
        .map((category: CategoryDataGET) => (
          <CategoryCard key={category.id} category={category} />
        ))}
    </>
  );
}

export default AllCardsCategories;
