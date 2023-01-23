import { ACTION_METHODS_CART, IItemReducer, useReducerCart } from "../../../pages/cart/reducerCart"
import styles from "./ProductAdded.module.scss";

interface ProductAddedProps extends IItemReducer {
    quantity: number
}

export const ProductAdded = ({quantity, ...item}: ProductAddedProps) => {

    const {dispatch} = useReducerCart();

    return (
        <div className={styles["product-item-added"]}>
            <img 
                src={item.image} 
                className={styles["product-item-added__avatar"]}
                alt={`item added ${item.title}`}
            />
            <div>
                <h4 className={styles["product-item-added__title"]}>
                    {item.title}
                </h4>
                <span className={styles["product-item-added__quantity"]}>
                    Quantity: {quantity}
                </span>
                <ul className={styles["product-item-added__controllers"]}>
                    <li>
                        <button onClick={() => dispatch({
                            type: ACTION_METHODS_CART.DELETE, 
                            payload: {...item, sku: item.id, quantity}
                        })}>Remove</button>
                    </li>
                    <li>
                        <button onClick={() => dispatch({
                            type: ACTION_METHODS_CART.CHANGE_QUANTITY, 
                            payload: {...item, sku: item.id, quantity: quantity - 1}
                        })}
                            disabled={quantity === 1} 
                        >-</button>
                    </li>
                    <li>
                        <strong>{quantity}</strong>
                    </li>
                    <li>
                        <button onClick={() => dispatch({
                            type: ACTION_METHODS_CART.CHANGE_QUANTITY, 
                            payload: {...item, sku: item.id, quantity: quantity + 1}
                        })}>+</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}