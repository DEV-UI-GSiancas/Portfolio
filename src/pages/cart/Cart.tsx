import { useQuery } from "react-query";
import { useReducerCart, ACTION_METHODS_CART } from "./reducerCart";
import { getProducts } from "../../common/apis/public.api";
import styles from "./Cart.module.scss";
import { IProduct } from "../../common/constants/app.dto";
import { ProductItem } from "../../common/components/product/Product";
import { ProductAdded } from "../../common/components/productAdded/ProductAdded";
import classNames from "classnames";

export const CartPage = () => {

    const {state, dispatch} = useReducerCart();
    const {isLoading, isSuccess, data} = useQuery("getProducts", getProducts);

    const onAddItem = (props: IProduct) => {
        dispatch({
            type: ACTION_METHODS_CART.ADD, 
            payload: {
                id: props.id,
                sku: props.id,
                title: props.title,
                description: props.description,
                quantity: 1,
                image: props.image,
            }
        })
    }

    
    return(
        <div className={styles["cart-wrapper"]}>
            <div className={classNames(styles["cart-wrapper__column--left"], "scrolled-area")}>
                {(() => {
                    if(isLoading)
                        return <h2>Loading</h2>
                    if(isSuccess)
                        return data?.map((item) => !state.items.some(_ => _.id === item.id) &&
                            <ProductItem {...item} onAddItem={() => onAddItem(item)}/>
                        )
                })()}
            </div>
            <div className={classNames(styles["cart-wrapper__column--right"], "scrolled-area")}>
                {state.items.map((item) => <ProductAdded {...item}/>)}
            </div>
        </div>
    )
}

