import {
  Box,
  Image,
  useColorModeValue,
  useToast,
  Card,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

import { useDispatch } from "react-redux";
import { addCart, deleteCart } from "../redux/cartReducer/action";
import { DeleteIcon } from "@chakra-ui/icons";

function Rating({ rating, discountPercentage }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {discountPercentage} % off
      </Box>
    </Box>
  );
}

function CartCard({
  id,
  thumbnail,
  images,
  title,
  price,
  brand,
  rating,
  discountPercentage,
}) {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleDelete = () => {
    dispatch(deleteCart(id));
    toast({
      title: `Item Deleted.`,
      description: `Product removed from cart`,
      status: "success",
      duration: 6000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      mb={2}
     size={"lg"}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "250px" }}
        src={thumbnail}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{title}</Heading>

          <Text py="2">Brand: {brand}</Text>
          <Rating rating={rating} discountPercentage={discountPercentage} />
          <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
            <Box as="span" color={"gray.600"} fontSize="xl">
              MRP: ₹
            </Box>{" "}
            {price}
          </Box>
        </CardBody>

        <CardFooter>
          <Button variant="outline" colorScheme="red" onClick={handleDelete}>
            <Box as="span" mr={3}>
              {<DeleteIcon />}
            </Box>{" "}
            Remove{" "}
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default CartCard;
