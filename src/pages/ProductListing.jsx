import { Flex, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productReducer/action";
import Filters from "../components/Filter";
import ProductCard from "../components/ProductCard";
import { useLocation, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const ProductListing = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.productReducer);

  // console.log(location);
  

  const handleSearch =(e)=>{
    setQuery(e.target.value)
    // console.log(query);
  }

  let obj = {
    params: {
      category: searchParams.getAll("cat"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
      q:query
    },
  };

  useEffect(() => {
    dispatch(getProducts(obj));
  }, [location.search,query]);

  return (
    <>
      <Navbar handleSearch={handleSearch} />

      <Flex>
        <Filters />
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={2}
        >
          {products?.map((el, i) => (
            <ProductCard key={i} {...el} />
          ))}
        </Grid>
      </Flex>
    </>
  );
};

export default ProductListing;
