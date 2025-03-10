import { createSlice } from '@reduxjs/toolkit';
import { addToCartAction, clearCartAction, removeFromCartAction } from './cartActions';

export interface ICartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
}


interface ICartState {
    cart: ICartItem[];

}

const initialState: ICartState = {
    cart: [],
};

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCartAction,

        removeFromCartAction,
        clearCartAction

    },

});

export default cartSlice;
// export const { } = cartSlice.actions