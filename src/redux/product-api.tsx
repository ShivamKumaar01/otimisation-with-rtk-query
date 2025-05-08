import {createApi,fetchBaseQuery} from"@reduxjs/toolkit/query/react"

export const productsApi=createApi({
    reducerPath:"productsApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://dummyjson.com/"}),
    endpoints:(builder)=>({
        getAllProducts:builder.query({
            query:()=>"products",
        }),
        getProductsByPage:builder.query({
            query:(pageValue)=>`products?limit=${pageValue.limit}&skip=${pageValue.skip}`
           
        }),
        getProductsBySearch:builder.query({
            query:(search:string)=>`products/search?q=${search}`
        })

    }),
  
})
export const {useGetAllProductsQuery,useGetProductsByPageQuery,useGetProductsBySearchQuery}=productsApi