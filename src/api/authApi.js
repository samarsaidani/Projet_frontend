
import axios from 'axios';

export const signUp=async(values)=>{

    const {data} = await axios.post("https://books-06fn.onrender.com/api/register",values)
    return data 
} 
export const signIn=async(values)=>{
    
    const {data} = await axios.post("https://books-06fn.onrender.com/api/login",values)
    return data 
    
} 