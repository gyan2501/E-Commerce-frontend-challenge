import { Checkbox, CheckboxGroup } from "@chakra-ui/checkbox";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const intialCat = searchParams.getAll("cat");

  const [cat, setCat] = useState(intialCat || []);
  const initialOrder = searchParams.get("order");
  const [order, setOrder] = useState(initialOrder || "");

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

  const handleSort = (e) => {
    console.log(e.target.value);
    setOrder(e.target.value);
  };

  useEffect(() => {
    let params = {
      cat,
    };

    order && (params.order = order);

    setSearchParams(params);
  }, [cat, order,setSearchParams]);

  return (
    <Box
      pl={"2rem"}
      bg={useColorModeValue("white", "gray.800")}
      w={"15%"}
      pr={5}
    >
      <Text
        my="1rem"
        fontWeight={"bold"}
        textTransform={"uppercase"}
        fontSize="1rem"
      >
        Filter
      </Text>

      <Text
        my="1rem"
        fontWeight={"bold"}
        textTransform={"uppercase"}
        fontSize="0.95rem"
      >
        Sort By Price
      </Text>

      <RadioGroup>
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
        <CheckboxGroup>
          <Stack spacing={"1"} color="gray.500" textTransform={"capitalize"}>
            <Flex flexDir={"column"}>
              <Checkbox
                value={"smartphones"}
                onChange={handleChangeCategory}
                isChecked={cat.includes("smartphones")}
              >
                smartphones
              </Checkbox>
              <Checkbox
                value="laptops"
                onChange={handleChangeCategory}
                isChecked={cat.includes("laptops")}
              >
                laptops
              </Checkbox>
            </Flex>

            <Flex flexDir={"column"}>
              <Checkbox
                value="fragrances"
                onChange={handleChangeCategory}
                isChecked={cat.includes("fragrances")}
              >
                fragrances
              </Checkbox>
            </Flex>

            <Flex flexDir={"column"}>
              <Checkbox
                value="skincare"
                onChange={handleChangeCategory}
                isChecked={cat.includes("skincare")}
              >
                skincare
              </Checkbox>
            </Flex>
            <Flex flexDir={"column"}>
              <Checkbox
                value="groceries"
                onChange={handleChangeCategory}
                isChecked={cat.includes("groceries")}
              >
                groceries
              </Checkbox>
            </Flex>
            <Flex flexDir={"column"}>
              <Checkbox
                value="home-decoration"
                onChange={handleChangeCategory}
                isChecked={cat.includes("home-decoration")}
              >
                home-decor
              </Checkbox>
            </Flex>
          </Stack>
        </CheckboxGroup>
      </Box>
      <Box>
        {/* <Text my="1rem" fontWeight={"bold"} fontSize="0.95rem">
          BRAND
        </Text>
        <CheckboxGroup>
          <Stack spacing={"1"} color="gray.500">
            <Checkbox
              value="Apple"
              onChange={handleChangeCategory}
              isChecked={brand.includes("Apple")}
            >
              Apple
            </Checkbox>
            <Checkbox
              value="Samsung"
              onChange={handleChangeCategory}
              isChecked={brand.includes("Samsung")}
            >
              Samsung
            </Checkbox>
            <Checkbox
              value="OPPO"
              onChange={handleChangeCategory}
              isChecked={brand.includes("OPPO")}
            >
              OPPO
            </Checkbox>
            <Checkbox
              value="Huawei"
              onChange={handleChangeCategory}
              isChecked={brand.includes("Huawei")}
            >
              Huawei
            </Checkbox>{" "}
            <Checkbox
              value="HP Pavilion"
              onChange={handleChangeCategory}
              isChecked={brand.includes("HP Pavilion")}
            >
              HP Pavilion
            </Checkbox>
            <Checkbox
              value="Microsoft Surface"
              onChange={handleChangeCategory}
              isChecked={brand.includes("Microsoft Surface")}
            >
              Microsoft Surface
            </Checkbox>
            <Checkbox
              value="Boho Decor"
              onChange={handleChangeCategory}
              isChecked={brand.includes("Boho Decor")}
            >
              Boho Decor
            </Checkbox>
            <Checkbox
              value="Saaf & Khaas"
              onChange={handleChangeCategory}
              isChecked={brand.includes("Saaf & Khaas")}
            >
              Saaf & Khaas
            </Checkbox>
          </Stack>
        </CheckboxGroup> */}
      </Box>
      <Box>
        {/* <Text my="1rem" fontWeight={"bold"} fontSize="0.95rem">
          Rating
        </Text>
        <RadioGroup>
          <Stack direction="column" color={"gray.500"}>
            <Radio value="5">5 </Radio>
            <Radio value="4">4</Radio>
            <Radio value="3">3</Radio>
            <Radio value="2">2</Radio>
            <Radio value="1">1</Radio>
          </Stack>
        </RadioGroup> */}
      </Box>
    </Box>
  );
};

export default Filters;
