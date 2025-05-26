import { ItemDataGET } from "@/interface/itemData";
import { getAllItems } from "@/services/items-service";
import { useQuery } from "@tanstack/react-query";

export function useItemData() {
    const query = useQuery<ItemDataGET[]>({
        queryKey: ["items-data"],
        queryFn: getAllItems,
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