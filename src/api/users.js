import axios from 'axios';
import { getCookie } from '../helpers/cookies';
// liste des api pour un utilisateur 

// get all books(get) 
export const getUserOrder = async()=>{
    const {data} = await axios.get('https://books-06fn.onrender.com/library/books')
     return data
}

// rate book(put)
export const rateBook = async(values)=>{
    const token =  getCookie("token")
    const config = {
        headers:{
            
            'Authorization':token
            
        }
    }
    const {data}= await axios.put("https://books-06fn.onrender.com/api/rate",{...values},config)
     return data 
}
export const getbook = async()=>{
    const {data} = await axios.get('https://books-06fn.onrender.com/book/get')
     return data
}

// wishlist api 
export const addToFav = async(bookID)=>{
    const token =  getCookie("token")
    const config = {
        headers:{
            
            'Authorization':token
            
        }
    }
    const {data}= await axios.put("https://books-06fn.onrender.com/api/wish",bookID,config)
     return data 
}
// get user wishList 
export const myFavList = async()=>{
    const token =  getCookie("token")
    const config = {
        headers:{
            
            'Authorization':token
            
        }
    }
    const {data}= await axios.get("https://books-06fn.onrender.com/api/myList",config)
     return data 
}


// finish order(post)
export const  finishOrder= async(rslt)=>{
    const token =  getCookie("token")
    const config = {
        headers:{
            
            'Authorization':token
            
        }
    }
    const {data}= await axios.post("https://books-06fn.onrender.com/api/createOrder",rslt,config)
     return data 
}
// create shopping card(post)

export const createCart = async(values)=>{
    const token =  getCookie("token")
    const config = {
        headers:{
            
            'Authorization':token
            
        }
    }
    const {data}= await axios.post("https://books-06fn.onrender.com/api/cart",values,config)
     return data 
}



//register w login (nafess el api lel user w admin)


