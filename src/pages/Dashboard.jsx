import { useState } from "react";
import { useGetProducts } from "../hooks/useProducts";
import CategoryFilter from "../components/CategoryFilter";
import ProductList from "../components/ProuductList";
import InfoComponent from "../components/InfoComponent";
import {
  ArrowPathIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/16/solid";

const Dashboard = () => {
  const { data, isLoading, isError } = useGetProducts();
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = data?.products?.filter(
    (product) => !selectedCategory || product.category === selectedCategory
  );

  const renderContent = () => {
    if (isLoading)
      return (
        <InfoComponent
          info="Loading..."
          icon={<ArrowPathIcon className="size-6 animate-spin" />}
        />
      );
    if (isError)
      return (
        <InfoComponent
          info="Error while loading products."
          icon={<ExclamationCircleIcon className="size-6 animate-bounce" />}
        />
      );
    if (!filteredProducts?.length)
      return <InfoComponent info="No products found. Try again later!" />;
    return <ProductList products={filteredProducts} />;
  };

  return (
    <div className="p-4 flex flex-col justify-center">
      <CategoryFilter setSelectedCategory={setSelectedCategory} />
      {renderContent()}
    </div>
  );
};

export default Dashboard;
