export interface ExampleType {
    id: number;
    name: string;
    isActive: boolean;
}

export type ResponseData<T> = {
    data: T;
    message: string;
    success: boolean;
};