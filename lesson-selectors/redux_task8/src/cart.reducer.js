import { ADD_PRODUCT, REMOVE_PRODUCT } from "./cart.actions";

const initialState = {
    products: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case REMOVE_PRODUCT:
            const products = state.products.filter(product => product.id !== action.payload);
            return {
                ...state, products
            }
        default: return state;
    }
}