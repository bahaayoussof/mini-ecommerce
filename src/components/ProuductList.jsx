import ProductCard from "./ProductCard";

const ProuductList = ({ products }) => {
  let content;

  if (products?.length == 0) {
    content = <div>No products found. try again later!</div>;
  }

  content = (
    <>
      {products?.map((pro) => (
        <ProductCard key={pro.id} product={pro} />
      ))}
    </>
  );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {content}
    </div>
  );
};

export default ProuductList;
