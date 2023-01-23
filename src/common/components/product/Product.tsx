import { IProduct } from "../../constants/app.dto";
import styles from "./Product.module.scss";

interface ProductItemProps extends IProduct {
    onAddItem: () => void;
}

export const ProductItem = (props: ProductItemProps) => (
    <div className={styles["product-item"]}>
        <img 
            src={props.image} 
            className={styles["product-item__avatar"]}
            alt={props.title} 
            loading="lazy"
        />
        <div>
            <h3 className={styles["product-item__title"]}>
                {props.title}
            </h3>
            <p className={styles["product-item__description"]}>
                {props.description}
            </p>
            <button onClick={props.onAddItem}>
                Add
            </button>
        </div>
    </div>
)