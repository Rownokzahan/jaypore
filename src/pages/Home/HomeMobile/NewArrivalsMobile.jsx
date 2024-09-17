import { Link } from "react-router-dom";
import newArrivalsData from "../../../data/newArrivalsData";

const NewArrivalsMobile = () => {
  return (
    <section className="container mt-16 text-dark-deep">
      <header className="text-center space-y-1 mb-3">
        <h3 className="text-3xl">New Arrivals</h3>
        <p>Discover Your Crafts</p>
      </header>
      <div className="flex gap-4 hide-scrollable">
        {newArrivalsData.map((category, index) => (
          <article key={index} className="space-y-2 text-center">
            <figure className="w-[140px] mx-auto">
              <Link to={category.link} title={category.title}>
                <img
                  src={category.imageSrc}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </Link>
              <figcaption className="font-semibold text-sm uppercase mt-2">
                {category.title}
              </figcaption>
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NewArrivalsMobile;
