export interface ItemDataGET {
    id?: number;
    name: string;
    description?: string;
}

export interface ItemDataPOST {
    name: string;
    description?: string;
}

export interface ItemDataPUT {
    name: string;
    description?: string;
}