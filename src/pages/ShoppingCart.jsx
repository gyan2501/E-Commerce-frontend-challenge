import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Box, Divider, Flex, Heading, VStack } from "@chakra-ui/react";
import { getCart } from "../redux/cartReducer/action";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import EmptyCart from "../components/EmptyCart";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cartReducer);

  // console.log(cart);

  const subTotal = Array.isArray(cart)
    ? cart.reduce((total, el) => total + el.price, 0)
    : 0;

  const Tax = 0.18;

  // console.log(`Total Price: ₹${totalPrice}`);
  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <>
      <Navbar />
      <Flex p={10} justifyContent={"space-evenly"}   flexDirection={{ base: "column", md: "row" }}>
        <Box gap={2}>
          {cart.length > 0 ? (
            cart.map((el, i) => <CartCard key={i} {...el} />)
          ) : (
            <EmptyCart />
          )}
        </Box>
        <Box w={{ base: "100%", sm: "300px" }}>
          <VStack
            align={"flex-start"}
            border={"1px solid grey"}
            p={3}
            borderRadius={"md"}
          >
            <Heading as="h3" size="lg" mb={3}>
              Cart Total
            </Heading>

            <Divider />
            <Flex
              w={"100%"}
              mt={3}
              justifyContent={"space-between"}
              gap={15}
              mb={1}
            >
              <Heading size="sm">Subtotal:</Heading>
              <Heading size="sm">{subTotal}</Heading>
            </Flex>
            <Flex w={"100%"} justifyContent={"space-between"} gap={15} mb={1}>
              <Heading size="sm">Tax:</Heading>
              <Heading size="sm">{Tax}</Heading>
            </Flex>
            <Flex w={"100%"} justifyContent={"space-between"} gap={15} mb={1}>
              <Heading size="sm">Shipping:</Heading>
              <Heading size="sm">Free</Heading>
            </Flex>
            <br />
            <Divider />
            <Flex
              w={"100%"}
              justifyContent={"space-between"}
              gap={15}
              mt={3}
              mb={3}
            >
              <Heading as="h5" size="md">
                Total:
              </Heading>
              <Heading as="h5" size="md">
                {(subTotal + subTotal * Tax).toFixed(2)}
              </Heading>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </>
  );
};

export default ShoppingCart;
