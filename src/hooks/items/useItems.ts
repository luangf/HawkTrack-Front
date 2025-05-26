
import { itemSchema, ItemSchema } from "@/schemas/itemSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useItemMutate } from "./useItemMutate";

export default function useItems() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ItemSchema>({ resolver: zodResolver(itemSchema) });

    const { mutatePost } = useItemMutate();

    useEffect(() => {
        toast.success("Login with success");
    }, []);

    function handleSaveItem(data: ItemSchema) {
        mutatePost.mutate(data);
        reset();
    }

    return { register, handleSubmit, errors, isSubmitting, handleSaveItem }
}