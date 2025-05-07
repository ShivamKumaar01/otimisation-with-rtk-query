import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const cardList = createAsyncThunk("userThunk", async () => {
    try {
      const user = await axios.get("https://dummyjson.com/products");
    //   console.log(user);
      const productList=user.data;
      console.log(productList.products)
      const arr=productList.products;
      return arr;
      
     
    //   const userList=user.products;
    //   console.log(userList)
    //   return userList;
    } catch (error:any) {
      throw new Error(error);
    }
  });

export const DataFetchingSlice=createSlice({
    name:"apiCall",
    initialState:{
        data:null
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(cardList.pending,()=>{
        //   state.isLoading=true
        console.log("pending state")
        });
        builder.addCase(cardList.fulfilled,(state,action)=>{
        //   state.isLoading=false;
        //   state.data=action.payload
        console.log("fulfilled state")
        
        state.data=action.payload;
        
        })
        builder.addCase(cardList.rejected,()=>{
        //   state.error=true
        console.log("rejected state")
        })
      }
})

export default DataFetchingSlice.reducer