import { Link } from "react-router-dom";
import popularCategoriesData from "../../../data/popularCategoriesData";

const PopularCategoriesMobile = () => {
  return (
    <section className="container mb-2 hide-scrollable">
      <div className="flex gap-4">
        {popularCategoriesData.map((category, index) => (
          <article key={index} className="text-center">
            <figure className="w-20 mx-auto">
              <Link to={category.href} title={category.title}>
                <img
                  src={category.imgSrc.small}
                  alt={category.imgAlt}
                  className="w-full h-full object-cover"
                />
              </Link>
              <figcaption className="mt-2 text-xs">
                <p className="font-semibold">{category.title}</p>
              </figcaption>
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PopularCategoriesMobile;
