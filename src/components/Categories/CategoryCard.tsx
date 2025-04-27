import { CategoryDataGET } from "../../interface/CategoryData";
import {
  ExternalLink,
  FolderPen,
  MessageCircleMore,
  Pencil,
  Save,
  Trash2,
  Undo2,
} from "lucide-react";
import { useCategoryMutate } from "../../hooks/useCategoryMutate";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import FieldErrorMsg from "../FieldErrorMsg";

interface CategoryCardProps {
  category: CategoryDataGET;
}

const categoryCardSchema = z.object({
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

type CategoryCardSchema = z.infer<typeof categoryCardSchema>;

function CategoryCard({ category }: CategoryCardProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryCardSchema>({
    resolver: zodResolver(categoryCardSchema),
  });

  const [disabledFields, setDisabledFields] = useState<boolean>(true);

  const { mutateDelete, mutateUpdate } = useCategoryMutate();

  function onOpenCategoryClick(): void {
    console.log("test");
  }

  function onSaveEditClick(id: number, data: CategoryCardSchema) {
    mutateUpdate.mutate({ id, data });
  }

  function deleteCategoryById(id: number) {
    if (confirm("quer realmente deletar?")) {
      mutateDelete.mutate(id);
    }
  }

  return (
    <form className="my-2 flex w-full max-w-3xl flex-col gap-3 rounded-[var(--border-radius)] border-2 border-[var(--border-color)] bg-white p-3 shadow-[var(--box-shadow)]">
      <h1 className="text-center text-3xl font-bold">Category</h1>
      <div className="flex flex-col gap-1">
        <label className="flex gap-1" htmlFor={`nameCard-${category.id}`}>
          <FolderPen />
          Name
        </label>
        <input
          type="text"
          id={`nameCard-${category.id}`}
          {...register("name")}
          defaultValue={category.name}
          disabled={disabledFields}
          className="w-full rounded-[var(--border-radius)] border bg-gray-300 p-2 shadow-md"
        />
        <FieldErrorMsg>{errors.name?.message}</FieldErrorMsg>
      </div>
      <div className="flex flex-col gap-1">
        <label
          className="flex gap-1"
          htmlFor={`descriptionCard-${category.id}`}
        >
          <MessageCircleMore />
          Description
        </label>
        <textarea
          id={`descriptionCard-${category.id}`}
          {...register("description")}
          defaultValue={category.description}
          disabled={disabledFields}
          className="h-20 max-h-72 w-full rounded-[var(--border-radius)] border bg-gray-300 p-2 shadow-md"
          maxLength={750}
        />
        <FieldErrorMsg>{errors.description?.message}</FieldErrorMsg>
      </div>
      <div className="flex gap-2">
        {disabledFields ? (
          <button
            className="rounded-[var(--border-radius)] border-2 border-[var(--border-color)] bg-yellow-500 shadow-[var(--box-shadow)]"
            type="button"
            onClick={() => {
              setDisabledFields((prev) => !prev);
            }}
          >
            <Pencil size={40} />
          </button>
        ) : (
          <button
            className="rounded-[var(--border-radius)] border-2 border-[var(--border-color)] bg-green-500 shadow-[var(--box-shadow)]"
            type="button"
            onClick={handleSubmit((data) => {
              onSaveEditClick(category.id, data);
              setDisabledFields((prev) => !prev);
            })}
          >
            <Save size={40} />
          </button>
        )}

        {!disabledFields && (
          <button
            className="rounded-[var(--border-radius)] border-2 border-[var(--border-color)] bg-purple-400 shadow-[var(--box-shadow)]"
            type="button"
            onClick={() => setDisabledFields((prev) => !prev)}
          >
            <Undo2 size={40} />
          </button>
        )}
        <button
          className="rounded-[var(--border-radius)] border-2 border-[var(--border-color)] bg-red-500 shadow-[var(--box-shadow)]"
          type="button"
          onClick={() => deleteCategoryById(category.id)}
        >
          <Trash2 size={40} />
        </button>
        <button
          className="rounded-[var(--border-radius)] border-2 border-[var(--border-color)] bg-amber-700 shadow-[var(--box-shadow)]"
          type="button"
          onClick={() => onOpenCategoryClick()}
        >
          <ExternalLink size={40} />
        </button>
      </div>
    </form>
  );
}

export default CategoryCard;
