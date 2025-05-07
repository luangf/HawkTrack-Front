import { categoryCardSchema, CategoryCardSchema } from "@/schemas/categorySchema";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCategoryMutate } from "@/components/categories/hooks/useCategoryMutate"
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

export default function useCategoryCard() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CategoryCardSchema>({
        resolver: zodResolver(categoryCardSchema),
    });

    const [disabledFields, setDisabledFields] = useState(true);
    const { mutateDelete, mutateUpdate } = useCategoryMutate();
    const navigate = useNavigate();

    function handleSaveWhileEditMode(id: number, data: CategoryCardSchema) {
        mutateUpdate.mutate({ id, data });
        setDisabledFields((prev) => !prev);
    }

    function handleDeleteCategory(id: number) {
        mutateDelete.mutate(id);
        toast.success("Your category was successfuly deleted");
    }

    function handleReturnFromEditMode() {
        setDisabledFields((prev) => !prev);
    }

    function handleEditButton() {
        setDisabledFields((prev) => !prev);
    }

    function handleOpenCategory(id: number) {
        navigate(`/category/${id}`);
    }

    return { register, handleSubmit, errors, disabledFields, handleSaveWhileEditMode, handleDeleteCategory, handleReturnFromEditMode, handleEditButton, handleOpenCategory }
}