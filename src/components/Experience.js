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
        companyDescription:
          "Albertsons and Safeway are major grocery store chains with locations primarily in the Canada and United States. The Promo Execution team is responsible for managing the Coupon Management System, which enables merchants to create and manage digital coupons. The system allows authorized merchant to set coupon values, expiration dates, usage limits, and restrictions.",
        companyName: "TekSystem (Safeway, Inc.)",
        location: "Vancouver, B.C. Canada",
        duration: "Aug 2022 - Present",
        position: "Senior Java Engineer",
        items: [
          "Designed and developed reusable modules in the shared library to enable multiple applications within the department to reuse. By extending and overriding parent class and methods, these modules significantly reduced application complexity and increased code reusability. Resulting in faster development cycles and improved application performance.",
          "Leverage Kafka to facilitate communication between different applications, significantly reduce waiting times in the UI and mitigate peak loads of the application. This resulted in a more seamless user experience and improved overall system performance.",
          "Develop backend service with Java Spring Boot to implement RESTful services. It allows client and internal applications to consume.",
          "Utilizing the Memento design pattern to design POJOs, the load on resource-heavy services can be significantly reduced, thereby improving overall system performance. This approach also leads to a reduction in redundant requests sent to the database, resulting in faster response times and a more efficient application.",
          "Use TypeScript and the Angular framework to develop user-facing features that enabled users to manage promotion items, dates, and price areas in the UI.",
          "Utilize JDBC with DB2 database. Optimize performance for complex queries, which allowed for faster execution and better resource utilization. Resulted in improved application performance and faster response times for end-users.",
          "Developed features with MongoDB. It enables efficient retrieval and manipulation of non-relational data, allowing for quick and accurate calculations. it greatly increases the performance of the system and reduce waiting times for end-users, resulting in a more seamless and satisfying user experience.",
          "Responsible for product support, investigating and resolving issues to ensure smooth operation of the application. ",
          "Use Github as a version control system, to manage code changes and track revisions.",
          "Use a combination of Github Actions and Jenkins to facilitate the deployment of applications to DEV, UAT, PERF and PROD environment application to Azure cloud. ",
          "Follow Scrum Agile methodology to ensure an efficient and effective development. Break down large tasks into smaller, more manageable stories.",
        ],
      },
      {
        badges: [
          { colorScheme: "blue", name: "Java" },
          { colorScheme: "blue", name: "Spring Boot" },
        ],
        companyDescription:
          "Bitcode Technology Ltd. is a software company that develops and provides software solutions to companies, schools and government agencies. Main products include management software, mobile application and PaaS (Platform-as-a-Service) application.",
        companyName: "Bitcode Technology Ltd.",
        duration: "Mar 2020 - Jun 2022",
        location: "Macau",
        position: "Full Stack Developer - Tier II",
        items: [
          "Parent project architect design and abstract modules implementation, increase code reusability and allow multiple projects to consume. Reduce the boilerplate code and development time of multiple projects.",
          "Use RabbitMQ for backend services that require additional processing time. It reduces the waiting time for users at the UI layer, as well as reducing the server load at peak.",
          "Develop backend services including SMS number verification, app push notification,  mobile payment processing etc. Design and develop applications with multiple user authorities. User tokens will be verified on each request to secure private information.",
          "Design and implement two-factor-authentication abstract classes and interfaces. Children projects can be plug and use with minimal configuration.",
          "Use MySQL and JPA Specification to create complex but easy to manage reusable abstract classes. Substantially reduce the boilerplate code and development time for CRUD services.",
          "Collaborate with 3rd party logistics companies, provide specific staff authority and parcel management system, parcel history can be traced if error occurs. ",
          "Use Spring Boot to develop multiple RESTful services. It allows client and third party applications to consume.",
          "Use React to develop a management portal for companies to monitor and config orders, sales, app info etc.",
          "Use JavaScript with Vue framework to create mobile applications for end users to view products, place order and make payment at their mobile devices.",
          "Create Jenkins Pipeline for Continuous Integration and Continuous Delivery. Application will be tested and built with Jenkins script. Deploy application to DEV, FAT, UAT and PROD environments with automation. ",
          "Migrate applications from local server to Amazon Web Services and Tencent Cloud. It provides 99% uptime with a reliable and scalable service. Emergency events were significantly reduced.",
          "Authenticated user tokens will be saved in the Redis cache to shorten the response time of each request. ",
          "Setup automated build tool Jenkins to provide a continuous development environment and shorten each iteration.",
        ],
      },
      {
        badges: [
          { colorScheme: "blue", name: "Java" },
          { colorScheme: "blue", name: "Spring Boot" },
        ],
        companyDescription:
          "Anthem is the second largest medical insurance service provider in the United States. Anthem Medicaid is its mobile phone application, which is mainly used to serve low-income Medicaid users in the United States.The main functionalities include retrieving insurance cards online, so that users can get related medical services in hospitals or clinics. View and modify the user's contact preferences, purchase prescriptions that have been processed by insurance, update prescription drug orders, set up auto refill and renew, get estimated delivery cost and deliver drugs to the user's address or partner pharmacies.",
        companyName: "Cogent Infotech (Anthem, Inc.)",
        duration: "Aug 2018 - Mar 2020",
        location: "Virginia Beach, VA USA",
        position: "Full Stack Developer",
        items: [
          "Participate in multiple releases and emergency releases, proposed automated solutions to reduce human error. ",
          "Dependency injection using Spring framework to achieve highly decoupled applications and extensively develop RESTful web services and CRUD APIs. ",
          "Participated in the cooperation with CVS, the largest pharmacy chain in the U.S., mainly to allow users to use insurance to purchase regulated drugs within mobile applications. ",
          "Use TypeScript and JavaScript to develop mobile applications with React Native framework. ",
          "Create SQL queries to manage the data in IBM DB2 database, make proper queries to help debug the application. ",
          "Follow the Scrum agile methodology to deliver applications iteratively. ",
          "Use IntelliJ IDEA IDE to develop, test and deploy complete applications to DEV, SIT and UAT.",
        ],
      },
      {
        badges: [
          { colorScheme: "blue", name: "Java" },
          { colorScheme: "blue", name: "Spring Boot" },
        ],
        companyDescription: "",
        companyName: "16 Things Kids Can Do. Inc.",
        duration: "Mar 2017 - Feb 2018",
        location: "New York, NY USA",
        position: "Software Developer Intern",
        items: [
          "Developed Android app that rewards users who participate in the organization’s community service events with points that could be traded in nominal giveaways. ",
          "Developed features within the app, including function to generate embed email to allows user to send invitation to family and friends. ",
          "Managed user account by creating a relational database using MySQL. ",
          "Implemented image recognition functionality using Google Vision API to allow users to upload photo of their dog and receive the name of the dog’s breed. ",
          "Hosted image recognition application to Google App Engine with the ability to run app on any platform.",
        ],
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
            <Box px={2} align="right">
              <Text px={2} fontWeight={300}>
                {experience.duration}
              </Text>
              <Text px={2} fontWeight={300}>
                {experience.location}
              </Text>
            </Box>
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
