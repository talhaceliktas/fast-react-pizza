import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getUsername } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector(getUsername);

  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Ana menüye dön</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Işte sepetin, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Sipariş Ver
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          SEPETI BOŞALT
        </Button>
      </div>
    </div>
  );
}

export default Cart;
