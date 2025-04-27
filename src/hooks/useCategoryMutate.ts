import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveCategory, deleteCategoryById, updateCategoryById } from "../services/categories-service";
import { CategoryDataPUT } from "../interface/CategoryData";

export function useCategoryMutate() {
    const queryClient = useQueryClient();

    const mutatePost = useMutation({
        mutationFn: saveCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["categories-data"] });
        }
    });

    const mutateDelete = useMutation({
        mutationFn: deleteCategoryById,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["categories-data"] });
        }
    });

    const mutateUpdate = useMutation({
        mutationFn: ({ id, data }: { id: number, data: CategoryDataPUT }) => {
            return updateCategoryById(id, data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["categories-data"] });
        }
    });

    return { mutatePost, mutateDelete, mutateUpdate };
}