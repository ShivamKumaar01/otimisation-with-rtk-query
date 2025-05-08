
import {useGetProductsByPageQuery,useGetProductsBySearchQuery,} from "../redux/product-api";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 130 },
  { field: "description", headerName: "Description", width: 180 },
  { field: "category", headerName: "Category", width: 100 },
];

const Table = () => {
  const [inputText, setInputText] = useState("");
  const [debouncedText, setDebouncedText] = useState("");
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedText(inputText);
      setPage(0); 
    }, 300);
    return () => clearTimeout(handler);
  }, [inputText]);

  const skip = page * pageSize;
  const limit = pageSize;

 
  const { data: pagedData, isLoading: isPagedLoading } = useGetProductsByPageQuery(
    { skip, limit },
    { skip: debouncedText.length > 0 }
  );

 
  const { data: searchData, isLoading: isSearchLoading } = useGetProductsBySearchQuery(
    debouncedText,
    { skip: debouncedText.length === 0 }
  );

 
  const searchProducts = searchData?.products || [];
  const slicedSearchData = searchProducts.slice(skip, skip + limit);

 
  const rows =
    debouncedText.length > 0
      ? slicedSearchData
      : pagedData?.products || [];

  const totalRowCount =
    debouncedText.length > 0
      ? searchProducts.length
      : pagedData?.total || 0;

  return (
    <Box>
      <Box sx={{ width: 500, maxWidth: "100%", marginTop: "4%" }}>
        <TextField
          fullWidth
          label="Search Products"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </Box>

      <Paper sx={{ height: 500, width: "100%", marginTop: 2 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={isPagedLoading || isSearchLoading}
          rowCount={totalRowCount}
          pagination
          paginationMode="server"
          pageSizeOptions={[5, 10]}
          paginationModel={{ page, pageSize }}
          onPaginationModelChange={({ page, pageSize }) => {
            setPage(page);
            setPageSize(pageSize);
          }}
         
        />
      </Paper>
    </Box>
  );
};

export default Table;

