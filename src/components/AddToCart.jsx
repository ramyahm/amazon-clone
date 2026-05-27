const AddToCart = ({ addToCart }) => {

  return (
    <button
      className="addCartBtn"
      onClick={addToCart}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;