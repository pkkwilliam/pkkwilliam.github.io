import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={4} align="center">
        {/* <Text>E-mail: kakeiwcs@gmail.com Tel: (236) 234-8383</Text> */}
      </Container>
    </Box>
  );
}
