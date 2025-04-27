import { CategoryDataGET, CategoryDataPOST, CategoryDataPUT } from "../interface/CategoryData";
import { api } from "./api-config";

const ENDPOINT_URL: string = "/categories";

export async function getAllCategories(): Promise<CategoryDataGET[]> {
    const categoriesResponse = await api.get<CategoryDataGET[]>(ENDPOINT_URL);
    return categoriesResponse.data;
}

export async function saveCategory(data: CategoryDataPOST) {
    return await api.post(ENDPOINT_URL, data);
}

export async function deleteCategoryById(id: number) {
    return await api.delete(ENDPOINT_URL + `/${id}`);
}

export async function updateCategoryById(id: number, data: CategoryDataPUT) {
    return await api.put(ENDPOINT_URL + `/${id}`, data);
}