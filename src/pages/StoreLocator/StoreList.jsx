import { IoMdTime } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import { Link } from "react-router-dom";

const StoreList = ({ stores }) => {
  return (
    <div className="text-dark">
      {stores.length > 0 ? (
        <ul className="space-y-6">
          {stores.map((store) => (
            <li key={store.name}>
              <Link
                to={"/"}
                className="text-primary lg:text-dark font-bold text-lg mb-2 lg:hover:text-dark-deep"
              >
                {store.name}, {store.state}, {store.city}
              </Link>

              <div className="mt-2 flex flex-col lg:flex-row gap-4 justify-between">
                <div className="space-y-4">
                  <div className="flex items-start gap-2 ps-1">
                    <LuMapPin className="mt-1 text-xl" />
                    <div className="text-dark-deep lg:text-dark">
                      <p>{store.address}</p>
                      <p>Email: {store.email}</p>
                      <p>Tel: {store.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 ps-1">
                    <IoMdTime className="mt-px text-xl" />
                    <div className="text-dark-deep lg:text-dark">
                      <p className="font-semibold">Store Hours</p>
                      <p>{store.store_hours}</p>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-56 px-8 lg:px-0 flex flex-col gap-3">
                  <a
                    href="/"
                    target="_blank"
                    title="/"
                    className="w-full uppercase text-primary-dark font-semibold border p-2 text-center hover:bg-gray-300 hover:bg-opacity-30"
                  >
                    Get Directions
                  </a>

                  <Link
                    to={"/"}
                    className="w-full uppercase text-primary-dark font-semibold border p-2 text-center hover:bg-gray-300 hover:bg-opacity-30"
                  >
                    Store Page
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No store found.</p>
      )}
    </div>
  );
};

export default StoreList;
