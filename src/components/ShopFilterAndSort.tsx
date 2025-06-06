import { useAppSelector } from "../hooks";

const ShopFilterAndSort = ({
  sortCriteria,
  setSortCriteria,
}: {
  sortCriteria: string;
  setSortCriteria: (value: string) => void;
}) => {
  const { showingProducts, totalProducts } = useAppSelector(state => state.shop)
  return (
    <div className="flex justify-between items-center px-5 max-sm:flex-col max-sm:gap-5">
      <p className="text-lg"> 1–{ showingProducts } / { totalProducts } resultats</p>
      <div className="flex gap-3 items-center">
        <p>Trier par :</p>
        <div className="relative">
          <select
            className="border border-[rgba(184, 88, 160, 0.4)] px-2 py-1"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSortCriteria(e.target.value)
            }
            value={sortCriteria}
          >
            <option value="default">Par défaut</option>
            <option value="popularity">Populaire</option>
            <option value="price-asc">Prix: croissant</option>
            <option value="price-desc">Prix: décroissant</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default ShopFilterAndSort;
