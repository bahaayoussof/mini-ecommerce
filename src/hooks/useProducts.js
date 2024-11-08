import { useQuery } from "@tanstack/react-query";
import { getAllProducts, getCategories } from "../services/api";

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
};

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};
