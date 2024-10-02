import { useTypedSelector } from ".";
import { useDispatch } from "react-redux"
import { addItem, deleteItem, editItem } from "../store";
import { CartItem } from "../types";

export const useCartStore = () => {
    const { items, total } = useTypedSelector(state => state.cart);
    const dispatch = useDispatch();

    const startAddingProductToCart = (product: CartItem) => {
        dispatch(addItem(product));
    }

    const startModifyingProductToCart = (product: CartItem) => {
        dispatch(editItem(product));
    }

    const startDeletingProductToCart = (product: CartItem) => {
        dispatch(deleteItem(product.id));
    }
    return {
        items,
        total,
        startAddingProductToCart,
        startModifyingProductToCart,
        startDeletingProductToCart
    };
}