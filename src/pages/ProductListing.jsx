import { Flex, Grid, HStack, Skeleton, Stack } from "@chakra-ui/react";
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
  const { isLoading } = useSelector((store) => store.productReducer);

  console.log(isLoading);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    // console.log(query);
  };
  console.log("brand", searchParams.getAll("brand"));
  let obj = {
    params: {
      category: searchParams.getAll("cat"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
      q: query,
      brand: searchParams.getAll("brand"),
    },
  };

  useEffect(() => {
    dispatch(getProducts(obj));
  }, [location.search, query]);

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
          {isLoading
            ? [...Array(20).keys()].map((el) => {
                return (
                  <Stack key={el} width={"100%"} m={3}>
                    <Skeleton
                      height={{ base: "320px", md: "320px" }}
                      width={{ base: "280px", md: "280px" }}
                      borderRadius={"md"}
                    />
                    <HStack>
                      <Skeleton
                        height="16px"
                        h={"20px"}
                        w={"70%"}
                        borderRadius={"md"}
                      />
                      <Skeleton
                        height="16px"
                        w={"20%"}
                        h={"30px"}
                        borderRadius={"md"}
                      />
                    </HStack>
                    <HStack>
                      <Skeleton
                        height="16px"
                        h={"20px"}
                        w={"70%"}
                        borderRadius={"md"}
                      />
                      <Skeleton
                        height="16px"
                        w={"20%"}
                        h={"20px"}
                        borderRadius={"md"}
                      />
                    </HStack>
                  </Stack>
                );
              })
            : products?.map((el, i) => <ProductCard key={i} {...el} />)}
        </Grid>
      </Flex>
    </>
  );
};

export default ProductListing;
