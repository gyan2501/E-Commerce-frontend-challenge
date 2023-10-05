import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/cartReducer/action";

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

function ProductCard({
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

  const handleAddToCart = () => {
    const payload = {
      id,
      thumbnail,
      images,
      title,
      price,
      brand,
      rating,
      discountPercentage,
    };

    dispatch(addCart(payload));
    toast({
      title: `Successful.`,
      description: `Product added to the cart`,
      status: "success",
      duration: 6000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Flex p={3} alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        width={"300px"}
        h={"400px"}
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        pb={5}
        _hover={{ cursor: "pointer" }}
      >
        <Image
          src={thumbnail}
          alt={`Picture of ${thumbnail}`}
          roundedTop="lg"
          h={"70%"}
          w={"100%"}
        />

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {title}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a
                _hover={{ cursor: "pointer" }}
                display={"flex"}
                ml={2}
                onClick={handleAddToCart}
              >
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={rating} discountPercentage={discountPercentage} />
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="xl">
                ₹
              </Box>{" "}
              {price}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductCard;
