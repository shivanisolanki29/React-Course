import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Contact = () => {
  const cartItem = useSelector((store) => store.cart.items);

  return (
    <div>
      <h1>Contact Us</h1>
      <h4>This is Contact Us page</h4>
      <div className="w-9/12 m-4 mx-28 p-2 border border-black">
        <ItemList items={cartItem} />
      </div>
    </div>
  );
};
export default Contact;
