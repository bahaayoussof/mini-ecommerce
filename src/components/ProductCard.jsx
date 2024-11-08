import { useState } from "react";
import ProductModal from "./ProductModal";
import FavoriteButton from "./FavoriteButton";

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 ">
      <p className="text-gray-600 bg-gray-100 px-2 py-1 rounded-md font-semibold w-fit">
        {product.category}
      </p>
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full h-64 object-contain rounded"
      />

      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-gray-600 font-medium">${product.price}</p>
      </div>

      <div className="mt-4 flex justify-end gap-4">
        <button className="text-gray-500" onClick={() => setIsModalOpen(true)}>
          View Details
        </button>

        <FavoriteButton product={product} />
      </div>

      {isModalOpen && (
        <ProductModal
          product={product}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ProductCard;
