import { useReducer } from "react";

export enum ACTION_METHODS_CART {
    ADD = "ADD_ITEM",
    DELETE = "DELETE_ITEM",
    CHANGE_QUANTITY = "CHANGE_QUANTITY",
}

interface IItem {
    id: number,
    sku: number,
    name: string,
    description: string,
    quantity: number,
}

interface IState {
    items: IItem[],
}

interface IAction {
    type: ACTION_METHODS_CART,
    payload: IItem
}

const initialState: IState = {
    items: []
}

const cartReducer = (state: IState , action: IAction) => {
    switch(action.type){
        case ACTION_METHODS_CART.ADD:
            return {items: [...state.items, action.payload]};
        case ACTION_METHODS_CART.DELETE:
            return {items: state.items.filter(_ => _.id !== action.payload.id)};
        case ACTION_METHODS_CART.CHANGE_QUANTITY:
            const itemIndex = state.items.findIndex((_) => _.id === action.payload.id);
            state.items[itemIndex].quantity = action.payload.quantity;
            return {...state};
        default:
            return state;
    }
}

export const useReducerCart = () => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return {state, dispatch};
}