
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCategoryMutate } from "./useCategoryMutate";
import { useEffect } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { categoryCardSchema, CategoryCardSchema } from "@/schemas/categorySchema";

export default function useHomePage() {
    //const location = useLocation();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<CategoryCardSchema>({ resolver: zodResolver(categoryCardSchema) });

    const { mutatePost } = useCategoryMutate();

    //change the mode how i make it
    useEffect(() => {
        //if (location.state?.showToast) {
        //}
        toast.success("Login with success");
    }, []);

    const token = sessionStorage.getItem("auth-token");
    if (!token) {
        navigate("/");
    }

    function handleSaveCategory(data: CategoryCardSchema) {
        mutatePost.mutate(data);
        reset();
    }

    return { register, handleSubmit, errors, isSubmitting, handleSaveCategory }
}