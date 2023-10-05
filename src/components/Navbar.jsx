import React, { useEffect } from "react";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/cartReducer/action";

export default function Navbar({ handleSearch }) {
  const dispatch = useDispatch();

  const { cart } = useSelector((store) => store.cartReducer);

  console.log(cart);


  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Link to={"/"}>
              <Box>E-Com</Box>
            </Link>
          </HStack>
          <Box>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input placeholder="Search Products..." onChange={handleSearch} />
            </InputGroup>
          </Box>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Link to={"/cart"}>
              <Button variant="outline" mr={2}>
                <AiOutlineShoppingCart size={25} />
                <Text fontSize="md" h={5} w={5}>
                  {cart.length}
                </Text>
              </Button>
            </Link>
            <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
              Sign Up
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://t3.ftcdn.net/jpg/03/62/56/24/360_F_362562495_Gau0POzcwR8JCfQuikVUTqzMFTo78vkF.jpg"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>

                <MenuDivider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
