import { createAsyncThunk } from "@reduxjs/toolkit"
export const loginUserThunk=createAsyncThunk(
    'userLogin',
    async (payload)=>{
        console.log('loginUserThunk payload',payload);
        const response =await fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'GET',
            mode: "cors", 
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(),

        })
        const result = await response.json()
        console.log('response', result);
    }
)