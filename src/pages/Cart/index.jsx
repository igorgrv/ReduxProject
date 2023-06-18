import Button from "components/Button";
import Header from "components/Header";
import Item from "components/Item";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "store/reducers/cart";
import styles from "./Cart.module.scss";

export default function Cart() {
  const dispatch = useDispatch();

  // [{item + qntity do carrinho}]
  const { cartItems, total } = useSelector((state) => {
    // state = store inteiro

    const search = state.search;
    const searchReg = new RegExp(search, "i");

    let total = 0;
    // state.cart = {id, qnty}
    const cartItemArray = state.cart.reduce((finalCart, actualCart) => {
      // item = {title, description, id}
      const item = state.items.find((item) => item.id === actualCart.id);
      total += item.price * actualCart.quantity;

      // finalCart = [{item + qntyt(state.cart)}]
      if (item.title.match(searchReg)) {
        finalCart.push({
          ...item,
          quantity: actualCart.quantity,
        });
      }
      return finalCart;
    }, []);
    return {
      cartItems: cartItemArray,
      total,
    };
  });

  return (
    <div>
      <Header title="My cart" description="Everything you will buy" />
      <div className={styles.cart}>
        {cartItems.map((cartItem) => (
          <Item key={cartItem.id} {...cartItem} cart />
        ))}
        <div className={styles.total}>
          <strong>Your order</strong>
          <span>
            Subtotal: <strong> R$ {total.toFixed(2)} </strong>
          </span>
        </div>
        <Button onClick={() => dispatch(resetCart())}>Submit</Button>
      </div>
    </div>
  );
}
