import { useReducerCart, ACTION_METHODS_CART } from "./reducerCart";
import products from "../../assets/json/products.json";

export const CartPage = () => {
    const {state, dispatch} = useReducerCart();
    
    return(
        <div style={{display: "flex", padding: "30px", gap: "30px"}}>
            <div style={{"flexGrow": 1, height: "80vh", overflow: "auto", padding: "0 12px"}}>
                {products.items.map((item) => !state.items.some(_ => _.id === item.id) &&
                    <div style={{
                        borderRadius: "12px",
                        backgroundColor: "#FAFAFA",
                        boxShadow: "0 0 5px rgba(0,0,0,0.15)", 
                        padding: "15px", 
                        margin: "15px 0"
                    }}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div>
                            <button onClick={() => dispatch({
                                type: ACTION_METHODS_CART.ADD, 
                                payload: {
                                    id: item.id,
                                    sku: item.id,
                                    name: item.title,
                                    description: item.description,
                                    quantity: 1
                                }
                            })}>
                                Add
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div style={{minWidth: "350px"}}>
                {state.items.map((item) => 
                    <div>
                        <h4 style={{margin: "0"}}>{item.name}</h4>
                        <p style={{margin: "0"}}>{item.description}</p>
                        <span>Quantity: {item.quantity}</span>
                        <ul style={{listStyle: "none", display: "flex", gap: "15px"}}>
                            <li>
                                <button onClick={() => dispatch({
                                    type: ACTION_METHODS_CART.DELETE, payload: item
                                })}>Remove</button>
                            </li>
                            <li>
                                <button 
                                    disabled={item.quantity === 1} 
                                    onClick={() => dispatch({
                                        type: ACTION_METHODS_CART.CHANGE_QUANTITY, 
                                        payload: {...item, quantity: item.quantity - 1}
                                    })
                                }>-</button>
                            </li>
                            <li>
                                <strong>{item.quantity}</strong>
                            </li>
                            <li>
                                <button onClick={() => dispatch({
                                    type: ACTION_METHODS_CART.CHANGE_QUANTITY, 
                                    payload: {...item, quantity: item.quantity + 1}
                                })}>+</button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

