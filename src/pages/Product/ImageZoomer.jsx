import { useRef, useState, useEffect } from "react";

const ImageZoomer = ({ imageSrc, imageAlt = "" }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const lensRef = useRef(null);
  const resultRef = useRef(null);
  const [hoveringOnImage, setHoveringOnImage] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const lens = lensRef.current;
    const result = resultRef.current;

    const imageRect = image.getBoundingClientRect();
    const lensRect = lens.getBoundingClientRect();
    const resultRect = result.getBoundingClientRect();

    result.style.backgroundImage = `url(${image.src})`;

    const zoomImage = (e) => {
      const { x, y } = getMousePos(e, container);

      lens.style.left = `${x}px`;
      lens.style.top = `${y}px`;

      let fx = resultRect.width / lensRect.width;
      let fy = resultRect.height / lensRect.height;

      result.style.backgroundSize = `${imageRect.width * fx}px ${
        imageRect.height * fy
      }px`;
      result.style.backgroundPosition = `-${x * fx}px -${y * fy}px`;
    };

    const getMousePos = (e, container) => {
      const rect = container.getBoundingClientRect();
      let x = e.clientX - rect.left - lensRect.width / 2;
      let y = e.clientY - rect.top - lensRect.height / 2;

      const minX = 0;
      const minY = 0;
      const maxX = rect.width - lensRect.width;
      const maxY = rect.height - lensRect.height;

      x = Math.max(minX, Math.min(maxX, x));
      y = Math.max(minY, Math.min(maxY, y));

      return { x, y };
    };

    if (hoveringOnImage) {
      container.addEventListener("mousemove", zoomImage);
    } else {
      container.removeEventListener("mousemove", zoomImage);
    }

    return () => {
      container.removeEventListener("mousemove", zoomImage);
    };
  }, [hoveringOnImage]);

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="w-full relative"
        onMouseEnter={() => setHoveringOnImage(true)}
        onMouseLeave={() => setHoveringOnImage(false)}
      >
        <img
          ref={imageRef}
          className="w-full h-full"
          src={imageSrc}
          alt={imageAlt}
        />
        <div
          ref={lensRef}
          className={`absolute top-0 left-0 w-28 h-28 border border-zinc-500 bg-orange-50 bg-opacity-60 pointer-events-none ${
            hoveringOnImage ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          ref={resultRef}
          className={`absolute left-full ml-5 top-0 w-72 h-72 bg-no-repeat pointer-events-none ${
            hoveringOnImage ? "z-10 opacity-100" : "-z-20 opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

export default ImageZoomer;
