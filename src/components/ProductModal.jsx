import { XMarkIcon } from "@heroicons/react/16/solid";
import FavoriteButton from "./FavoriteButton";

const ProductModal = ({ product, closeModal }) => {
  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeModal}
    >
      <div
        className="bg-white p-4 rounded-lg w-1/2 xl:w-1/3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <p className="text-gray-600 bg-gray-100 px-2 py-1 rounded-md font-semibold w-fit">
            {product.category}
          </p>
          <button onClick={closeModal} className="text-gray-500">
            <XMarkIcon className="h-7 w-7 text-gray-500" />
          </button>
        </div>
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-64 object-contain rounded"
        />
        <div className="my-2 flex justify-end gap-4">
          <FavoriteButton product={product} />
        </div>

        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-gray-600 font-medium">${product.price}</p>
        </div>
        <p className="mt-4 text-gray-600 font-light">{product.description}</p>

        <div className="flex justify-end">
          <button className="mt-4 text-gray-600 font-semibold bg-gray-200 py-2 px-4 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
