import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toast = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();
    let token = uuidv4(); //uuid for generating token

    let userData = { email, token };

    if (!email || !password) {
      toast({
        title: "Enter both email and password to login",
        description: "All fields are required",
        status: "error",
        duration: 5000,
        position: "top",
        isClosable: true,
      });
      return;
    }

    localStorage.setItem("userData", JSON.stringify(userData));

    toast({
      title: "Registered successfully",
      description: "Have a great day",
      status: "success",
      duration: 6000,
      isClosable: true,
      position: "top",
    });
    navigate("/");
  };

  return (
    <Box maxWidth="400px" margin="0 auto">
      <form onSubmit={handleLogin}>
        <Stack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button mt={3} type="submit" colorScheme="blue">
            Log in
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Login;
