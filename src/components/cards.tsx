// import React, { useState } from 'react'
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import TextField from "@mui/material/TextField";
// import { List } from "@mui/material";
import { cardList } from "../redux/slice";
import { useGetAllProductsQuery } from "../redux/product-api";

interface postItem {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
}

const Cards = () => {
  // const [loading, setLoading] = useState<boolean>(true);
  const [inputText, setInputText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const dataobj = useSelector((store) => store.apiCall);
  console.log(dataobj.data, "this is data object");
  const{data}=useGetAllProductsQuery();
  console.log(data,"this is data from api new wala")

  const [product, setProduct] = useState<postItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    dispatch(cardList());
  }, []);
  useEffect(() => {
    setProduct(dataobj?.data);
  }, [dataobj.data]);

  console.log(product, "this is product");
  const lastPostIndex: number = currentPage * postPerPage;
  const firstPostIndex: number = lastPostIndex - postPerPage;
  const filteredData=product?.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    console.log(filteredData,"this is filtered data")
  const products: postItem[] = filteredData?.slice(firstPostIndex, lastPostIndex);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(event);
    setCurrentPage(value);
  };

  const search = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(inputText);
      setCurrentPage(1);
      // console.log(searchTerm, "this is searchTerm");
    }, 500);
    return () => clearTimeout(timer);
  }, [inputText]);
   
 
 

  return (
    <>
      {/* <DataFetching></DataFetching> */}
      <Box sx={{ width: 500, maxWidth: "100%", marginTop: "4%" }}>
        <TextField
          fullWidth
          label="fullWidth"
          id="fullWidth"
          value={inputText}
          onChange={search}
        />
      </Box>

      <Box
        component="section"
        sx={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 2 }}
      >
        {products?.length == 0 ? (
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <CircularProgress />
          </Box>
        ) : (
          products?.map((item) => {
            return (
              <Card
                key={item.id}
                sx={{ maxWidth: 340, gap: 2, borderRadius: 5 }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={item.thumbnail}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            );
          })
        )}
      </Box>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Pagination
          count={filteredData?.length / 10}
          page={currentPage}
          shape="rounded"
          onChange={handleChange}
        />
      </Box>
    </>
  );
};

export default Cards;
