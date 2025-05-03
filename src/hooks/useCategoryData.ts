import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../services/categories-service";
import { CategoryDataGET } from "../interface/CategoryData";

export function useCategoryData() {
    const query = useQuery<CategoryDataGET[]>({
        queryKey: ["categories-data"],
        queryFn: getAllCategories,
        //refetchOnMount: false,
        refetchOnWindowFocus: false,
        //refetchOnReconnect: false,
        //gcTime: 1000 * 60 * 10 ===> default 5minutes
        //the data is still fresh, you don't need request back end
        //staleTime: 11000
        //refetchInterval: 5000
        //retry: 5 ===> default 3 times
    });
    return query;
}