import { Link } from "react-router-dom";

const FinestCollection = () => {
  return (
    <section className="container">
      <header className="text-3xl text-center mb-8">
        <h3>Jaypore&apos;s Finest</h3>
      </header>

      <div className="grid lg:grid-cols-2 gap-3 lg:gap-12">
        <article>
          <Link to={"/"} title="Daraz">
            <img
              src="https://imagescdn.jaypore.com/uploads/micrositmedia/production/1_D_1290x1504_Jaypore_Finest_1_3771_1725532585613.jpg?w=1000&amp;auto=format"
              alt="Daraz Collection"
              className="w-full rounded-ss-[50px]"
            />
          </Link>

          <div className="mt-4">
            <h5 className="lg:text-xl">Daraz</h5>
            <p className="uppercase my-2 text-xs lg:text-base">
              Beautiful Block Prints & Vivid Hues
            </p>
            <Link
              to={"/"}
              title="Shop Now"
              className="text-primary underline text-sm lg:text-base"
            >
              Shop Now
            </Link>
          </div>
        </article>

        <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
          <article>
            <Link to={"/"} title="Dakshina">
              <img
                src="https://imagescdn.jaypore.com/uploads/micrositmedia/production/1_D_1290x1504_Jaypore_Finest_2_3771_1725532695337.jpg?w=900&amp;auto=format"
                alt="Dakshina Collection"
                className="w-full"
              />
            </Link>
            <div className="mt-4">
              <h5 className="lg:text-xl">Dakshina</h5>
              <p className="uppercase my-2 text-xs lg:text-base">
                Handcrafted Brass Divinity
              </p>
              <Link
                to={"/"}
                title="Shop Now"
                className="text-primary underline text-sm lg:text-base"
              >
                Shop Now
              </Link>
            </div>
          </article>

          <article>
            <Link to={"/"} title="Anjali">
              <img
                src="https://imagescdn.jaypore.com/uploads/micrositmedia/production/1_D_1290x1504_Jaypore_Finest_3_3771_1725532746963.jpg?w=900&amp;auto=format"
                alt="Anjali Collection"
                className="rounded-ee-[50px] w-full"
              />
            </Link>
            <div className="mt-4">
              <h5 className="lg:text-xl">Anjali</h5>
              <p className="uppercase my-2 text-xs lg:text-base">
                Auspicious Maheshwari Finesse
              </p>
              <Link
                to={"/"}
                title="Shop Now"
                className="text-primary underline text-sm lg:text-base"
              >
                Shop Now
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FinestCollection;
