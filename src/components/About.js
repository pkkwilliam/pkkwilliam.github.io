import { Divider, Stack, Text, Container, Box, HStack } from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";

const label = {
  about:
    "I am a Full Stack developer that worked on multiple enterprise scale projects. I love spending time on my work as well as hangout with colleagues. I love to play basketball and remote controlled hobbies.",
};

export default function About({ color }) {
  const profile = ProfileArray();
  return (
    <>
      <Container maxW={"3xl"} id="about">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                01
              </Text>
              <Text fontWeight={800}>About</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Text color={"gray.600"} fontSize={"xl"} px={4}>
            {label.about}
          </Text>
        </Stack>
      </Container>
    </>
  );
}
