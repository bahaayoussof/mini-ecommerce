import { XMarkIcon } from "@heroicons/react/16/solid";

const ProductModal = ({ product, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg w-1/3">
        <div className="flex justify-between items-center">
          <p className="text-gray-600 bg-gray-100 px-2 py-1 rounded-md font-semibold w-fit">
            {product.category}
          </p>
          <button onClick={closeModal} className="text-gray-500">
            <XMarkIcon className="size-7 text-gray-500" />
          </button>
        </div>
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-64 object-contain rounded"
        />
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-gray-600 font-medium">${product.price}</p>
        </div>
        <p className="mt-4">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductModal;
