import CategoryItem from "./CategoryItem";

const CategoriesSection = () => {
  return (
    <div className="max-w-screen-2xl px-5 mx-auto mt-24">
      <h2 className="text-black text-5xl font-normal tracking-[1.56px] max-sm:text-4xl mb-12">
        Nos catégories
      </h2>
      <div className="flex justify-between flex-wrap gap-y-10">
        <CategoryItem
          categoryTitle="Arrivages récentes"
          image="the-style-of-the-80-ies-3988027_1280.jpg"
          link="special-edition"
        />
        <CategoryItem
          categoryTitle="Pièces de luxe"
          image="luxury category 2.png"
          link="luxury-collection"
        />
        <CategoryItem
          categoryTitle="Summer Edition"
          image="woman-7483003_1280.jpg"
          link="summer-edition"
        />
        <CategoryItem
          categoryTitle="Pièces uniques"
          image="woman-8725939_1280.jpg"
          link="unique-collection"
        />
      </div>
    </div>
  );
};
export default CategoriesSection;
