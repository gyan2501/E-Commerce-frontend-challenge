import { Box, Heading, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function PaymentSuccess() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Order Placed successfuly!
      </Heading>
      <Text color={"gray.500"}>
        Thank you for your order! Your payment was successful, and your order
        has been placed. We will send you an email confirmation shortly.
      </Text>
    </Box>
  );
}
