import { Checkbox, CheckboxGroup } from "@chakra-ui/checkbox";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { Button, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const intialCat = searchParams.getAll("cat");

  const [cat, setCat] = useState(intialCat || []);
  const initialOrder = searchParams.get("order");
  const [order, setOrder] = useState(initialOrder || "");

  const initialBrand = searchParams.getAll("brand");
  const [brand, setBrand] = useState(initialBrand || []);

  const handleChangeCategory = (e) => {
    console.log(e.target.value);

    let newCat = [...cat];
    const values = e.target.value;

    if (newCat.includes(values)) {
      newCat = newCat.filter((el) => el !== values);
    } else {
      newCat.push(values);
    }

    setCat(newCat);
    // console.log(cat);
  };

  const handleBrands = (e) => {
    console.log(e.target.value);

    let newBrand = [...brand];
    const values = e.target.value;

    if (newBrand.includes(values)) {
      newBrand = newBrand.filter((el) => el !== values);
    } else {
      newBrand.push(values);
    }

    setBrand(newBrand);
    // console.log(cat);
  };

  const handleSort = (e) => {
    console.log(e.target.value);
    setOrder(e.target.value);
  };

  const handleReset=()=>{
    setSearchParams("")
  }

  useEffect(() => {
    let params = {
      cat,
      brand,
    };

    order && (params.order = order);

    setSearchParams(params);
  }, [cat, order, brand]);

  return (
    <Box
      pl={"2rem"}
      bg={useColorModeValue("white", "gray.800")}
      w={"15%"}
      pr={5}
      display={{ base: "none", md: "none", lg: "block" }}
    >
      <Text
        my="1rem"
        fontWeight={"bold"}
        textTransform={"uppercase"}
        fontSize="1rem"
      >
        Filter <Box as="span"> <Button h={"30px"} ml={5} w={"60px"} colorScheme="red" onClick={handleReset}>Reset</Button></Box>
      </Text>

      <Text
        my="1rem"
        fontWeight={"bold"}
        textTransform={"uppercase"}
        fontSize="0.95rem"
      >
        Sort By Price
      </Text>

      <RadioGroup defaultValue={order}>
        <Stack
          mb={8}
          onChange={handleSort}
          value={order}
          spacing={"1"}
          color="gray.500"
        >
          <Radio value="asc" defaultChecked={order === "asc"}>
            Low To High
          </Radio>
          <Radio value="desc" defaultChecked={order === "desc"}>
            High To Low
          </Radio>
        </Stack>
      </RadioGroup>
      <Box>
        <Text
          my="1rem"
          fontWeight={"bold"}
          textTransform={"uppercase"}
          fontSize="0.95rem"
        >
          Categories
        </Text>
        <CheckboxGroup defaultValue={cat}>
          <Stack spacing={"1"} color="gray.500" textTransform={"capitalize"}>
            <Flex flexDir={"column"}>
              <Checkbox value={"smartphones"} onChange={handleChangeCategory}>
                smartphones
              </Checkbox>
              <Checkbox value="laptops" onChange={handleChangeCategory}>
                laptops
              </Checkbox>
            </Flex>

            <Flex flexDir={"column"}>
              <Checkbox value="fragrances" onChange={handleChangeCategory}>
                fragrances
              </Checkbox>
            </Flex>

            <Flex flexDir={"column"}>
              <Checkbox value="skincare" onChange={handleChangeCategory}>
                skincare
              </Checkbox>
            </Flex>
            <Flex flexDir={"column"}>
              <Checkbox value="groceries" onChange={handleChangeCategory}>
                groceries
              </Checkbox>
            </Flex>
            <Flex flexDir={"column"}>
              <Checkbox value="home-decoration" onChange={handleChangeCategory}>
                home-decor
              </Checkbox>
            </Flex>
          </Stack>
        </CheckboxGroup>
      </Box>
      <Box>
        <Text my="1rem" fontWeight={"bold"} fontSize="0.95rem">
          BRAND
        </Text>
        <CheckboxGroup defaultValue={brand} value={brand}>
          <Stack spacing={"1"} color="gray.500">
            <Checkbox value="Apple" onChange={handleBrands}>
              Apple
            </Checkbox>
            <Checkbox value="Samsung" onChange={handleBrands}>
              {" "}
              Samsung
            </Checkbox>
            <Checkbox value="OPPO" onChange={handleBrands}>
              OPPO
            </Checkbox>
            <Checkbox value="Huawei" onChange={handleBrands}>
              Huawei
            </Checkbox>{" "}
            <Checkbox value="HP Pavilion" onChange={handleBrands}>
              HP Pavilion
            </Checkbox>
            <Checkbox value="Microsoft Surface" onChange={handleBrands}>
              Microsoft Surface
            </Checkbox>
            <Checkbox value="Boho Decor" onChange={handleBrands}>
              Boho Decor
            </Checkbox>
            <Checkbox value="Saaf & Khaas" onChange={handleBrands}>
              Saaf & Khaas
            </Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>
      
    </Box>
  );
};

export default Filters;
