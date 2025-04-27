import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../services/categories-service";
import { CategoryDataGET } from "../interface/CategoryData";

export function useCategoryData() {
    const query = useQuery<CategoryDataGET[]>({
        queryKey: ["categories-data"],
        queryFn: getAllCategories,
        //staleTime: 1000
        //refetchInterval: 5000
        //refetchOnWindowFocus: false
        //retry: 5
    });
    return query;
}