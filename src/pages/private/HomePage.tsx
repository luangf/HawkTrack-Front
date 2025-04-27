import { useForm } from "react-hook-form";
import Footer from "../../components/Footer";
import DashboardMenu from "../../components/DashboardMenu";
import { FolderPen, LoaderCircle, MessageCircleMore } from "lucide-react";
import PrimaryButton from "../../components/PrimaryButton";
import AllCardsCategories from "../../components/Categories/AllCardsCategories";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCategoryMutate } from "../../hooks/useCategoryMutate";
import { Navigate } from "react-router-dom";

const categorySchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be at most 100 characters" }),
  description: z
    .string()
    .trim()
    .max(750, { message: "Description must be at most 750 characters" })
    .optional(),
});

type CategorySchema = z.infer<typeof categorySchema>;

function HomePage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CategorySchema>({ resolver: zodResolver(categorySchema) });

  const { mutatePost } = useCategoryMutate();

  const token = sessionStorage.getItem("auth-token");
  if (!token) {
    return <Navigate to="/" replace />;
  }

  function saveCategory(data: CategorySchema) {
    mutatePost.mutate(data);
    reset();
  }

  return (
    <>
      <DashboardMenu />
      <div className="flex min-h-screen flex-col items-center md:justify-center">
        <main className="flex w-full max-w-3xl flex-col items-center gap-4 border-b-2 bg-white p-4 shadow-[var(--box-shadow)] md:rounded-[var(--border-radius)] md:border-2 border-[var(--border-color)]">
          <h1 className="text-center text-4xl font-bold">
            Create new Category
          </h1>
          <form
            className="flex w-full flex-col gap-3"
            onSubmit={handleSubmit(saveCategory)}
          >
            <div className="flex flex-col gap-1">
              <label className="flex gap-1" htmlFor="name">
                <FolderPen className={errors.name && "text-red-500"} />
                <span className={errors.name && "text-red-500"}>Name</span>
              </label>
              <input
                className={`rounded-[var(--border-radius)] border-2 border-gray-300 bg-gray-50 p-3 shadow-md hover:bg-amber-50 focus:border-amber-500 focus:outline-none ${errors.name ? "border-red-500 focus:border-red-500" : ""}`}
                type="text"
                id="name"
                {...register("name")}
                placeholder="Name"
              />
              <small className="text-red-500">{errors.name?.message}</small>
            </div>
            <div className="flex flex-col gap-1">
              <label className="flex gap-1" htmlFor="description">
                <MessageCircleMore
                  className={errors.description && "text-red-500"}
                />
                <span className={errors.description && "text-red-500"}>
                  Description
                </span>
              </label>
              <textarea
                className={`h-36 max-h-72 rounded-[var(--border-radius)] border-2 border-gray-300 bg-gray-50 p-3 shadow-md hover:bg-amber-50 focus:border-amber-500 focus:outline-none sm:h-32 ${errors.description ? "border-red-500 focus:border-red-500" : ""}`}
                id="description"
                {...register("description")}
                placeholder="Description"
                maxLength={750}
              />
              <small className="text-red-500">
                {errors.description?.message}
              </small>
            </div>
            <PrimaryButton disabled={isSubmitting}>
              {isSubmitting ? (
                <div className="flex justify-center gap-2">
                  <LoaderCircle className="animate-spin" /> <span>Create</span>
                </div>
              ) : (
                "Create"
              )}
            </PrimaryButton>
          </form>
        </main>
        <AllCardsCategories />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
