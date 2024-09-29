import { useState } from "react";

const ProductImagesDesktop = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseOver = (index) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex gap-6 items-start">
      <div className="space-y-2 overflow-hidden overflow-y-auto">
        {images.map((_, index) => {
          const isActive = index === currentIndex; // Determine if the dot is active
          return (
            <div
              key={index}
              onMouseOver={() => handleMouseOver(index)}
              className="w-28 h-32"
            >
              <img
                src={images[index]}
                alt={`Dot ${index}`}
                className={`w-28 h-32 border object-cover ${
                  isActive
                    ? "border-primary-dark rounded"
                    : "border-transparent"
                }`}
              />
            </div>
          );
        })}
      </div>

      <div className="relative flex-1">
        <img
          src={images[currentIndex]}
          alt={`Product Image ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />

        {/* Prev arrow */}
        <button
          onClick={handlePrev}
          className="px-4 py-3 bg-background-light bg-opacity-30 text-dark-deep absolute left-0 z-10 top-1/2 -translate-y-1/2"
        >
          &#10094;
        </button>

        {/* Next arrow */}
        <button
          onClick={handleNext}
          className="px-4 py-3 bg-background-light bg-opacity-30 text-dark-deep absolute right-0 z-10 top-1/2 -translate-y-1/2"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ProductImagesDesktop;
