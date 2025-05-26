import { ItemDataGET, ItemDataPOST, ItemDataPUT } from "@/interface/itemData";
import { api } from "./api-config";

const ENDPOINT_URL: string = "/items";

export async function getAllItems(): Promise<ItemDataGET[]> {
    const categoriesResponse = await api.get<ItemDataGET[]>(ENDPOINT_URL);
    return categoriesResponse.data;
}

export async function saveItem(data: ItemDataPOST) {
    return await api.post(ENDPOINT_URL, data);
}

export async function deleteItemById(id: number) {
    return await api.delete(ENDPOINT_URL + `/${id}`);
}

export async function updateItemById(id: number, data: ItemDataPUT) {
    return await api.put(ENDPOINT_URL + `/${id}`, data);
}