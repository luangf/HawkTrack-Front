export interface CategoryDataGET {
    id?: number;
    name: string;
    description?: string;
}

export interface CategoryDataPOST {
    name: string;
    description?: string;
}

export interface CategoryDataPUT {
    name: string;
    description?: string;
}