import popularCategoriesData from "../../../data/popularCategoriesData";

const PopularCategoriesDesktop = () => {
  return (
    <section className="container">
      <header className="text-center mb-6">
        <h3 className="text-2xl">Popular Categories</h3>
      </header>
      <div className="grid grid-cols-4 gap-x-8">
        {/* column 1 */}
        <div className="flex flex-col gap-6">
          <a
            href={popularCategoriesData[0]?.href}
            aria-label={popularCategoriesData[0]?.title}
          >
            <figure>
              <img
                src={popularCategoriesData[0]?.imgSrc?.large}
                alt={popularCategoriesData[0]?.imgAlt}
                className="rounded-ss-[50px] w-full"
              />
              <figcaption className="text-center text-lg font-semibold mt-2">
                {popularCategoriesData[0]?.title}
              </figcaption>
            </figure>
          </a>

          <a
            href={popularCategoriesData[1]?.href}
            aria-label={popularCategoriesData[1]?.title}
          >
            <figure>
              <img
                src={popularCategoriesData[1]?.imgSrc?.large}
                alt={popularCategoriesData[1]?.imgAlt}
                className="w-full"
              />
              <figcaption className="text-center text-lg font-semibold mt-2">
                {popularCategoriesData[1]?.title}
              </figcaption>
            </figure>
          </a>
        </div>

        {/* column 2 */}
        <div className="flex flex-col gap-6">
          <a
            href={popularCategoriesData[2]?.href}
            aria-label={popularCategoriesData[2]?.title}
          >
            <figure>
              <img
                src={popularCategoriesData[2]?.imgSrc?.large}
                alt={popularCategoriesData[2]?.imgAlt}
                className="w-full"
              />
              <figcaption className="text-center text-lg font-semibold mt-2">
                {popularCategoriesData[2]?.title}
              </figcaption>
            </figure>
          </a>

          <a
            href={popularCategoriesData[3]?.href}
            aria-label={popularCategoriesData[3]?.title}
          >
            <figure>
              <img
                src={popularCategoriesData[3]?.imgSrc?.large}
                alt={popularCategoriesData[3]?.imgAlt}
                className="w-full"
              />
              <figcaption className="text-center text-lg font-semibold mt-2">
                {popularCategoriesData[3]?.title}
              </figcaption>
            </figure>
          </a>
        </div>

        {/* column 3 */}
        <div className="flex flex-col gap-6">
          <a
            href={popularCategoriesData[4]?.href}
            aria-label={popularCategoriesData[4]?.title}
          >
            <figure>
              <img
                src={popularCategoriesData[4]?.imgSrc?.large}
                alt={popularCategoriesData[4]?.imgAlt}
                className="w-full"
              />
              <figcaption className="text-center text-lg font-semibold mt-2">
                {popularCategoriesData[4]?.title}
              </figcaption>
            </figure>
          </a>

          <a
            href={popularCategoriesData[5]?.href}
            aria-label={popularCategoriesData[5]?.title}
          >
            <figure>
              <img
                src={popularCategoriesData[5]?.imgSrc?.large}
                alt={popularCategoriesData[5]?.imgAlt}
                className="w-full"
              />
              <figcaption className="text-center text-lg font-semibold mt-2">
                {popularCategoriesData[5]?.title}
              </figcaption>
            </figure>
          </a>
        </div>

        {/* column 4 */}
        <div className="flex flex-col gap-6">
          <a
            href={popularCategoriesData[6]?.href}
            aria-label={popularCategoriesData[6]?.title}
          >
            <figure>
              <img
                src={popularCategoriesData[6]?.imgSrc?.large}
                alt={popularCategoriesData[6]?.imgAlt}
                className="w-full"
              />
              <figcaption className="text-center text-lg font-semibold mt-2">
                {popularCategoriesData[6]?.title}
              </figcaption>
            </figure>
          </a>

          <a
            href={popularCategoriesData[7]?.href}
            aria-label={popularCategoriesData[7]?.title}
          >
            <figure>
              <img
                src={popularCategoriesData[7]?.imgSrc?.large}
                alt={popularCategoriesData[7]?.imgAlt}
                className="rounded-ee-[50px] w-full"
              />
              <figcaption className="text-center text-lg font-semibold mt-2">
                {popularCategoriesData[7]?.title}
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularCategoriesDesktop;
