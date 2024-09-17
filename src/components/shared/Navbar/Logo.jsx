import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src="https://imagescdn.jaypore.com/img/app/brands/jaypore/jaypore.png?w=400"
        alt="jaypore"
        className="max-w-[172px] w-full object-contain"
      />
    </Link>
  );
};

export default Logo;
