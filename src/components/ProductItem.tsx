import { Link } from "react-router-dom";
import { formatCategoryName } from "../utils/formatCategoryName";

const ProductItem = ({
  id,
  image,
  title,
  category,
  price,
}: {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
}) => {
  return (
    <div className="w-[400px] flex flex-col gap-2 justify-center max-md:w-[300px]">
      <Link
        to={`/product/${id}`}
        className="w-full h-[300px] max-md:h-[200px] overflow-hidden"
      >
        <img src={`/src/assets/${image}`} alt={title} />
      </Link>
      <Link
        to={`/product/${id}`}
        className="text-black text-center text-3xl tracking-[1.02px] max-md:text-2xl"
      >
        <h2>{title}</h2>
      </Link>
      <p className="text-secondaryBrown text-lg tracking-wide text-center max-md:text-base">
        {formatCategoryName(category)}{" "}
      </p>
      <p className="text-black text-2xl text-center font-bold max-md:text-xl">
        {price}€
      </p>
      <div className="w-full flex flex-col gap-1">
        <Link
          to={`/product/${id}`}
          className="text-white bg-secondaryBrown text-center text-xl font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center max-md:text-base"
        >
          Voir le produit
        </Link>
        <Link
          to={`/product/${id}`}
          className="bg-white text-black text-center text-xl border border-[rgba(193, 92, 202, 0.4)] font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center max-md:text-base"
        >
          En apprendre plus
        </Link>
      </div>
    </div>
  );
};
export default ProductItem;
