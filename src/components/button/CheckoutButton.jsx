import { Link } from "react-router-dom";

const CheckoutButton = () => {
  return (
    <>
      <Link to={"/checkout"} className="block btn-primary uppercase">
        Checkout
      </Link>
    </>
  );
};

export default CheckoutButton;
