
import { useGetAllProductsQuery, useGetProductsByPageQuery } from '../redux/product-api';
// import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'title', width: 130 },
  { field: 'description', headerName: 'description', width: 130 },
  {
    field: 'category',
    headerName: 'category',
    type: 'string',
    width: 90,
  },

];



const paginationModel = { page: 0, pageSize: 5 };
console.log(paginationModel,"hi")
const Table = () => {

  const[inputText,setInputText]=useState("");
  const[search,setSearch]=useState("")
  const[limit,setlimit]=useState(10);
  const[skip,setSkip]=useState();

  const pageValue={limit,skip};
  const{data}=useGetAllProductsQuery()
  const{value}=useGetProductsByPageQuery(pageValue)
  console.log(value,"this is data from pagination")
  console.log(data,"This is data comming from api");
  function changeHandler(e){
    console.log(e.target.value)
    setInputText(e.target.value);
    console.log("hi")
  }
 
  return (
   <Box>
     <Box sx={{ width: 500, maxWidth: "100%", marginTop: "4%" }}>
        <TextField
          fullWidth
          label="fullWidth"
          id="fullWidth"
          value={inputText}
          onChange={(e)=>changeHandler(e)}
        />
      </Box>
   <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data?.products}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
   </Box>
  )
}

export default Table
