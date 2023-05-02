import { Divider, Stack, Text, Container, Box, HStack } from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";

const label = {
  about:
    "I am a Full Stack developer, I have worked on multiple enterprise-scale projects, leveraging my technical expertise to deliver high-quality software products. While I am passionate about my work, I also enjoy spending time with my colleagues and building strong relationships within the team. Outside of work, I enjoy playing basketball and indulging in remote-controlled hobbies, which help me stay balanced and energized.",
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
