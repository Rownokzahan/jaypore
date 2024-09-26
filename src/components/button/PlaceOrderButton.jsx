const PlaceOrderButton = ({handlePlaceorder}) => {
  return (
    <>
      <button className="btn-primary uppercase" onClick={handlePlaceorder}>
        Place Order
      </button>
    </>
  );
};

export default PlaceOrderButton;