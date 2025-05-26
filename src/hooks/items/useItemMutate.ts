import { CategoryDataPUT } from "@/interface/categoryData";
import { deleteItemById, saveItem, updateItemById } from "@/services/items-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useItemMutate() {
    const queryClient = useQueryClient();

    const mutatePost = useMutation({
        mutationFn: saveItem,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["items-data"] });
        }
    });

    const mutateDelete = useMutation({
        mutationFn: deleteItemById,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["items-data"] });
        }
    });

    const mutateUpdate = useMutation({
        mutationFn: ({ id, data }: { id: number, data: CategoryDataPUT }) => {
            return updateItemById(id, data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["items-data"] });
        }
    });

    return { mutatePost, mutateDelete, mutateUpdate };
}