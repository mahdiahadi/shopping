import {configureStore} from '@reduxjs/toolkit'
import authSlice from './auth-slice';
import cartSlice from './cart-slice';
import uiSlice from './ui-slice';

const store= configureStore({
    reducer:{
        auth:authSlice.reducer,
        uiSlice:uiSlice.reducer,
        cart:cartSlice.reducer
    },
});
export default store;