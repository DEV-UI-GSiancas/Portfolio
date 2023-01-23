import { IProduct } from "../constants/app.dto";

export const getProducts = async (): Promise<IProduct[]> => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    return data;
}