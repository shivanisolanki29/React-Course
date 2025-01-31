import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center p-4 m-4">
      <h2 className="text-xl font-bold">Cart</h2>
      <button
        className="bg-gray-500 text-white font-semibold rounded-md p-2 px-4 m-2"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItem.length === 0 && (
        <h1>Cart is empty.Please add item to the cart!</h1>
      )}
      <div className="text-left w-6/12 m-auto p-2">
        <ItemList items={cartItem} />
      </div>
    </div>
  );
};

export default Cart;
