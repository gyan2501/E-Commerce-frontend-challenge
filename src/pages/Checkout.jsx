import React, { useState, useEffect } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputGroup,
  FormHelperText,
  useToast,
  Divider,
  VStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/cartReducer/action";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Form1 = ({ handleFormChange, formData }) => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Shipping Details
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            First name
          </FormLabel>
          <Input
            id="first-name"
            name="firstName"
            placeholder="First name"
            isRequired
            value={formData.firstName}
            onChange={handleFormChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input
            id="last-name"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleFormChange}
          />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email address
        </FormLabel>
        <Input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleFormChange}
        />
        <FormHelperText>We&apos;ll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="mobileNumber" fontWeight={"normal"} mt="2%">
          Mobile No.
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type="number"
            name="mobileNumber"
            placeholder="Enter Mobile Number"
            value={formData.mobileNumber}
            onChange={handleFormChange}
          />
        </InputGroup>
      </FormControl>
    </>
  );
};

const Form2 = ({ handleFormChange, formData }) => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Shipping Address
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Country / Region
        </FormLabel>
        <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={formData.country}
          onChange={handleFormChange}
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="streetAddress"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Street address
        </FormLabel>
        <Input
          type="text"
          name="streetAddress"
          id="streetAddress"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={formData.streetAddress}
          onChange={handleFormChange}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={formData.city}
          onChange={handleFormChange}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          State / Province
        </FormLabel>
        <Input
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={formData.state}
          onChange={handleFormChange}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postalCode"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          ZIP / Postal
        </FormLabel>
        <Input
          type="text"
          name="postalCode"
          id="postalCode"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={formData.postalCode}
          onChange={handleFormChange}
        />
      </FormControl>
    </>
  );
};

const Form3 = ({ handleFormChange, formData, handleSubmit, cart }) => {
  const subTotal = Array.isArray(cart)
    ? cart.reduce((total, el) => total + el.price, 0)
    : 0;

  const Tax = 0.18;

  console.log("form3", cart);
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Order Details
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <VStack align={"flex-start"} p={3} borderRadius={"md"} >
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
          <Divider />
        </VStack>
        <FormControl as={GridItem} colSpan={[6, 3]}>
          <FormLabel
            htmlFor="paymentMethod"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Payment Method
          </FormLabel>
          <Select
            id="paymentMethod"
            name="paymentMethod"
            autoComplete="payment-method"
            placeholder="Select option"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            value={formData.paymentMethod}
            onChange={handleFormChange}
          >
            <option>COD</option>
            <option>UPI</option>
            <option>PhonePay</option>
            <option>GPay</option>
          </Select>
        </FormControl>
      </SimpleGrid>
    </>
  );
};

export default function Checkout() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    paymentMethod: "",
    orders: [],
  });

  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cartReducer);

  const subTotal = Array.isArray(cart)
    ? cart.reduce((total, el) => total + el.price, 0)
    : 0;

  const Tax = 0.18;

  useEffect(() => {
    dispatch(getCart());
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      // Create an object containing the form data  total price and order details
      const orderData = {
        ...formData,
        total: subTotal + subTotal * Tax,
        orders: cart,
      };

      // Make a POST request to the checkout API with the order data
      const res = await axios.post(
        "https://e-com-json-server.onrender.com/checkouts",
        orderData
      );

      // Show a success toast message
      toast({
        title: "Payment successful!",
        description: "Your order has been confirmed.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Reset the form data
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        country: "",
        streetAddress: "",
        city: "",
        state: "",
        postalCode: "",
        paymentMethod: "",
        orders: [],
      });

      navigate("/paymentsuccess");
    } catch (error) {
      // errors that occur during the checkout process
      console.error("Checkout error:", error);

      // Show an error toast message
      toast({
        title: "Payment failed",
        description: "An error occurred during the payment process.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Navbar />
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          size={"sm"}
          mb="5%"
          mx="5%"
          isAnimated
          colorScheme="teal"
          borderRadius={"15px"}
        ></Progress>
        {step === 1 ? (
          <Form1 handleFormChange={handleFormChange} formData={formData} />
        ) : step === 2 ? (
          <Form2 handleFormChange={handleFormChange} formData={formData} />
        ) : (
          <Form3
            handleFormChange={handleFormChange}
            formData={formData}
            handleSubmit={handleSubmit}
            cart={cart}
          />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button colorScheme="blue" variant="solid" onClick={handleSubmit}>
                Confirm Payment
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
