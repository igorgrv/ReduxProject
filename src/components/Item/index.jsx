import classNames from "classnames";
import Input from "components/Input";
import { memo, useState } from "react";
import {
  AiFillCloseCircle,
  AiFillEdit,
  AiFillHeart,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineCheck,
  AiOutlineHeart,
} from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { changeCart, changeQuantity } from "store/reducers/cart";
import { changeFavorite, changeTitle, deleteItem } from "store/reducers/items";
import styles from "./Item.module.scss";

const iconProps = {
  size: 24,
  color: "#041833",
};

const quantityProps = {
  size: 32,
  color: "#1875E8",
};

function Item(props) {
  const { picture, title, description, price, favorite, id, cart, quantity } =
    props;
  const dispatch = useDispatch();

  const isInCart = useSelector((state) =>
    state.cart.some((cartItem) => cartItem.id === id)
  );

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const editComponent = (
    <>
      {isEditing ? (
        <AiOutlineCheck
          {...iconProps}
          className={styles["item-acao"]}
          onClick={() => {
            dispatch(changeTitle({ id, title: newTitle, description: "123" }));
            setIsEditing(false);
          }}
        />
      ) : (
        <AiFillEdit
          {...iconProps}
          className={styles["item-acao"]}
          onClick={() => setIsEditing(true)}
        />
      )}
    </>
  );

  function handleFavorite() {
    dispatch(changeFavorite(id));
  }

  function handleCart() {
    dispatch(changeCart(id));
  }

  return (
    <div
      className={classNames(styles.item, {
        [styles.cartItem]: cart,
      })}
    >
      <AiFillCloseCircle
        {...iconProps}
        className={`${styles["item-action"]} ${styles["item-delete"]}`}
        onClick={() => dispatch(deleteItem(id))}
      />
      <div className={styles["item-image"]}>
        <img src={picture} alt={title} />
      </div>
      <div className={styles["item-description"]}>
        <div className={styles["item-title"]}>
          {isEditing ? (
            <Input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          ) : (
            <h2>{title}</h2>
          )}
          <p>{description}</p>
        </div>
        <div className={styles["item-info"]}>
          <div className={styles["item-price"]}>R$ {price.toFixed(2)}</div>
          <div className={styles["item-actions"]}>
            {favorite ? (
              <AiFillHeart
                {...iconProps}
                color="#ff0000"
                className={styles["item-action"]}
                onClick={handleFavorite}
              />
            ) : (
              <AiOutlineHeart
                {...iconProps}
                className={styles["item-action"]}
                onClick={handleFavorite}
              />
            )}
            {cart ? (
              <div className={styles.quantity}>
                Quantidade:
                <AiFillMinusCircle
                  {...quantityProps}
                  onClick={() => {
                    if (quantity >= 1)
                      dispatch(changeQuantity({ id, quantity: -1 }));
                  }}
                />
                {/* padStart = se chegar em 2 dígitos, irá adicionar o 0 */}
                <span>{String(quantity || 0).padStart(2, "0")}</span>
                <AiFillPlusCircle
                  {...quantityProps}
                  onClick={() => dispatch(changeQuantity({ id, quantity: +1 }))}
                />
              </div>
            ) : (
              <>
                <FaCartPlus
                  {...iconProps}
                  color={isInCart ? "#1875E8" : iconProps.color}
                  className={styles["item-acao"]}
                  onClick={handleCart}
                />
                {editComponent}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Item);