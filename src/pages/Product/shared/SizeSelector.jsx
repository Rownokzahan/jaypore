const SizeSelector = ({ sizes, activeSize, handleSizeClick }) => {
  return (
    <div className="space-y-3">
      <div className="text-dark-deep font-semibold flex items-center justify-between">
        <p>Select Size</p>
        <button className="underline">Size Chart</button>
      </div>

      <div className="flex flex-wrap gap-3">
        {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
          <button
            key={size}
            className={`px-4 py-2 rounded transition duration-300 
            ${
              sizes.includes(size)
                ? activeSize === size
                  ? "bg-primary-dark border border-primary-dark text-background-light"
                  : "border"
                : "bg-gray-300 cursor-not-allowed opacity-40"
            }`}
            onClick={() => handleSizeClick(size)}
            disabled={!sizes.includes(size)} // Disable if size not available
            style={{
              background: !sizes.includes(size)
                ? "linear-gradient(to top right, rgba(0,0,0,.1), rgba(0,0,0,.1) calc(50% - .8px), #000 50%, rgba(0,0,0,.1) calc(50% + .8px), rgba(0,0,0,.1))"
                : "",
            }}
          >
            <p>{size}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;