import useCategoryCard from "@/hooks/categories/useCategoryCard";
import {
  ExternalLink,
  FolderPen,
  MessageCircleMore,
  Pencil,
  Save,
  Trash2,
  Undo2,
} from "lucide-react";
import { CategoryDataGET } from "../../interface/categoryData";
import FieldErrorMsg from "../general/FieldErrorMsg";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Toaster } from "../ui/sonner";

interface CategoryCardProps {
  category: CategoryDataGET;
}

function CategoryCard({ category }: CategoryCardProps) {
  const {
    register,
    handleSubmit,
    errors,
    disabledFields,
    handleSaveWhileEditMode,
    handleDeleteCategory,
    handleReturnFromEditMode,
    handleEditButton,
    handleOpenCategory,
  } = useCategoryCard();

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
            onClick={handleEditButton}
          >
            <Pencil size={40} />
          </button>
        ) : (
          <button
            className="rounded-[var(--border-radius)] border-2 border-[var(--border-color)] bg-green-500 shadow-[var(--box-shadow)]"
            type="button"
            onClick={handleSubmit((data) => {
              handleSaveWhileEditMode(category.id, data);
            })}
          >
            <Save size={40} />
          </button>
        )}

        {!disabledFields && (
          <button
            className="rounded-[var(--border-radius)] border-2 border-[var(--border-color)] bg-purple-400 shadow-[var(--box-shadow)]"
            type="button"
            onClick={handleReturnFromEditMode}
          >
            <Undo2 size={40} />
          </button>
        )}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button
              className="rounded-[var(--border-radius)] border-2 border-[var(--border-color)] bg-red-500 shadow-[var(--box-shadow)]"
              type="button"
            >
              <Trash2 size={40} />
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                category and remove the data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => handleDeleteCategory(category.id)}
              >
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <button
          className="rounded-[var(--border-radius)] border-2 border-[var(--border-color)] bg-amber-700 shadow-[var(--box-shadow)]"
          type="button"
          onClick={() => handleOpenCategory(category.id)}
        >
          <ExternalLink size={40} />
        </button>
        <Toaster richColors position="top-center" />
      </div>
    </form>
  );
}

export default CategoryCard;
