import { useGetCategories } from "../hooks/useProducts";

const CategoryFilter = ({ setSelectedCategory }) => {
  const { data, isLoading, isError } = useGetCategories();

  const categories = ["All", ...(data ? data : ["no categories"])];

  return (
    <div className="">
      <label htmlFor="filter" className="text-gray-700 mr-2">
        Filter by Category:
      </label>

      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border rounded p-1 w-72"
      >
        {categories?.map((cate) => (
          <option
            key={cate}
            disabled={cate === "no categories"}
            value={cate === "All" ? "" : cate}
          >
            {cate}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
