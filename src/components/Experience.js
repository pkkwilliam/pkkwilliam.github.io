import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Badge,
  Image,
  List,
  ListItem,
  ListIcon,
  Button,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Fade } from "react-reveal";
import { useState, useEffect } from "react";
import ExperienceArray from "./ExperienceArray";
import TagsArray from "./TagsArray";

export default function Experience({ color }) {
  const experience = ExperienceArray();
  const options = TagsArray("ExperienceTags");
  const [selected, setSelected] = useState(0);

  // useEffect(() => {
  //   if (options.length > 0) {
  //     setSelected(options[0].value);
  //   }
  // }, [options]);

  const handleSelected = (value) => {
    setSelected(value);
  };

  const label = {
    experiences: [
      {
        badges: [
          { colorScheme: "blue", name: "Java" },
          { colorScheme: "blue", name: "Spring Boot" },
        ],
        companyName: "Tek System Inc. (Safeway Inc.)",
        duration: "",
        position: "Senior Java Developer",
        items: ["T1", "T2"],
      },
      {
        badges: [
          { colorScheme: "blue", name: "Java" },
          { colorScheme: "blue", name: "Spring Boot" },
        ],
        companyName: "Bitcode Technology Ltd.",
        duration: "",
        position: "Senior Full Stack Developer",
        items: ["B1", "B2"],
      },
    ],
  };

  return (
    <>
      <Container maxW={"3xl"} id="experience">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Experience</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Center px={4}>
            <ButtonGroup variant="outline">
              {label.experiences.map((option, index) => (
                <Button
                  colorScheme={selected === index ? `${color}` : "gray"}
                  onClick={() => handleSelected(index)}
                >
                  <Text>{option.companyName}</Text>
                  <Text style={{ size: 10 }}>{option.position}</Text>
                </Button>
              ))}
            </ButtonGroup>
          </Center>
          <Stack px={4} spacing={4}>
            <ExperienceCard experience={label.experiences[selected]} />
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

const ExperienceCard = ({ experience }) => {
  return (
    <Fade bottom>
      <Card key={experience.companyName} size="sm">
        <CardHeader>
          <Flex justifyContent="space-between">
            <HStack>
              {/* <Image src={experience.image} h={50} /> */}
              <Box px={2} align="left">
                <Text fontWeight={600}>{experience.companyName}</Text>
                <Text>{experience.position}</Text>
              </Box>
            </HStack>
            <Text px={2} fontWeight={300}>
              {experience.duration}
            </Text>
          </Flex>
        </CardHeader>
        <CardBody>
          <Flex>
            <List align="left" spacing={3}>
              {experience.items.map((item, index) => (
                <ListItem key={index}>
                  <ListIcon
                    boxSize={6}
                    as={ChevronRightIcon}
                    // color={`${color}.500`}
                  />
                  {item}
                </ListItem>
              ))}
            </List>
          </Flex>
        </CardBody>
        <CardFooter>
          <HStack spacing={2}>
            {experience.badges.map((badge) => (
              <Badge key={badge.name} colorScheme={badge.colorScheme}>
                {badge.name}
              </Badge>
            ))}
          </HStack>
        </CardFooter>
      </Card>
    </Fade>
  );
};
