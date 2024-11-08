import { useState } from "react";
import { useGetProducts } from "../hooks/useProducts";
import CategoryFilter from "../components/CategoryFilter";
import ProductList from "../components/ProuductList";

const Dashboard = () => {
  const { data, isLoading, isError } = useGetProducts();

  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = data?.products?.filter(
    (pro) => selectedCategory === "" || pro.category === selectedCategory
  );

  let content;

  if (isLoading) content = <div>Loading...</div>;

  if (isError) content = <div>Error while loading products.</div>;

  // if (data) {
  content = (
    <>
      <CategoryFilter setSelectedCategory={setSelectedCategory} />
      <ProductList products={filteredProducts} />
    </>
  );
  // }

  return <div className="p-4 flex flex-col justify-center">{content}</div>;
};

export default Dashboard;
