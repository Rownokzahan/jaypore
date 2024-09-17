import { Link } from "react-router-dom";
import DropdownSelector from "./DropdownSelector";
import storesData from "../../data/stores";
import { useState } from "react";
import StoreList from "./StoreList";

const StoreLocator = () => {
  const [selectedState, setSelectedState] = useState("All");
  const [selectedCity, setSelectedCity] = useState(null);

  // Handler for state selection
  const handleStateSelect = (state) => {
    setSelectedState(state);
    setSelectedCity(null); // Reset city when state changes
  };

  // Fetch cities for selected state
  const availableCities =
    selectedState !== "All"
      ? storesData.states.find((state) => state.name === selectedState)?.city ||
        []
      : [];

  // Filter stores based on selected state and city
  const filteredStores = storesData.stores.filter((store) => {
    if (selectedState === "All") {
      return true;
    }
    if (selectedCity) {
      return store.state === selectedState && store.city === selectedCity;
    }
    return store.state === selectedState;
  });

  return (
    <div className="container">
      {/* Breadcrumb  */}
      <div>
        <ul className="flex gap-2 divide-dark text-dark">
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          |
          <li className="text-dark-deep">
            <Link to={`/`}>Store Locator</Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="uppercase text-lg font-semibold my-3">Find a Store</h3>

        {/* State and City Dropdown */}
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-0 lg:items-center">
          <div className="space-y-2">
            <label htmlFor="state" className="uppercase text-lg mb-2">
              STATE
            </label>
            <DropdownSelector
              selected={selectedState}
              list={["All", ...storesData.states.map((state) => state.name)]} // Add "All" option
              onSelect={handleStateSelect}
              defaultText="All"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="city" className="uppercase text-lg mb-2">
              CITY
            </label>
            <DropdownSelector
              selected={selectedCity}
              list={availableCities}
              onSelect={setSelectedCity}
              defaultText={
                selectedState && selectedState !== "All"
                  ? "-- Select City --"
                  : "All"
              }
              disabled={!selectedState || selectedState === "All"} // Disable if "All" is selected or no state is selected
            />
          </div>
        </div>

        <hr className="my-8" />

        <StoreList stores={filteredStores} />
      </div>
    </div>
  );
};

export default StoreLocator;
