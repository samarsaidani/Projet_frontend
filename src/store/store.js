import {configureStore} from '@reduxjs/toolkit'
import bookSlise from './book'
import favSlice from "./wishList"
import panierSlice from "./panier"
export default configureStore({
    reducer:{
        Book: bookSlise ,
        wishlist :favSlice,
        Cart : panierSlice
    }
})