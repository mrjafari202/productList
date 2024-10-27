import { useQuery } from "@tanstack/react-query";

import api from "../configs/api";


const fetchProducts = async () => {
    const response = await api.get("/products");
    return response.data;
  };

const ProductQuery = () => {
return useQuery({
    queryKey : ['product'],
    queryFn: fetchProducts
})
}
export {ProductQuery};