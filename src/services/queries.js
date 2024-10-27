import { useQuery } from "@tanstack/react-query";

import api from "../configs/api";


const fetchProducts = async () => {
    const response = await api.get("/products");
    return response.data;
};

export const useProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    })
}
