import React from 'react';
import {
  Box,
  Grid,
  Heading,
  VStack,
  Text,
  Container,
  useColorModeValue,
  Flex,
  Button
} from "@chakra-ui/react";
import BaseLayout from "../Wrapper/BaseLayout";
import Skills from "./Skills";
import Timeline from "./Timeline";
import SupportedLanguages from "./SupportedLanguages";
import { productCardDetails } from "./__productCardDetails";
import NextLink from "next/link"; // Import NextLink from next/link
import { IoIosRocket } from "react-icons/io";


const Home = () => {
  const bgCard = useColorModeValue('#F2F4F7', '#2D3748'); // Adjusted for the provided color palette
  const borderColor = useColorModeValue('#DFEAFF', '#1A202C');
  const textColor = useColorModeValue('gray.600', 'white');

  return (
    <React.Fragment>
      <BaseLayout mt="10" id="stack">
        <Container maxW="container.xl" textAlign="center" py={10}>
                  <Heading
  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
  fontWeight="bold"
  mb={6}
  bgGradient="linear(to-r, #3C8DD5, #5A7FAF)" // Adjusted to a darker gradient
  bgClip="text"
  color="transparent"
>
  Verbal Offers
</Heading>
          <Text
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            mb={12}
          >
          The most Transformative way to turn vision into reality, we specialize in crafting custom AI solutions that captivate and engage.         </Text>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
            gap={8}
            justifyContent="center"
          >
         {productCardDetails.map((item, index) => (
  <Box
    key={index} // Corrected typo here
    p={6}
    bg={bgCard}
    borderWidth="1px"
    borderColor={borderColor}
    boxShadow="sm"
    rounded="lg"
    _hover={{ boxShadow: "md", borderColor: "blue.500" }}
    transition="all 0.3s ease-in-out"
    textAlign="left"
  > <Heading fontSize="xl" fontWeight="bold" mb={4}>
                  {item.title}
                </Heading>
                <Text fontSize="md" mb={8}>
                  {item.description}
                </Text>
                {item.title === "Over 80 open source models" && (
                  <NextLink href="/links" passHref>
                    <Button
                      as="a" // Make Button act as an anchor tag
                      leftIcon={<IoIosRocket />}
                      colorScheme="blue"
                      size={"lg"}
                      shadow={"md"}
                      _hover={{ shadow: "lg" }}
                      variant="solid"
                    >
                      See More
                    </Button>
                  </NextLink>
                )}
              </Box>
            ))}
          </Grid>
        </Container>
      </BaseLayout>
      <Skills />

     
      {/* <Timeline /> */}
      <SupportedLanguages/>
                    <Timeline />

      <BaseLayout>
        <Flex
          mb={{ base: 14, lg: 14, md: 14, sm: 20, xs: 20 }}
          p="10"
          w="full"
          borderRadius="10px"
          color="black"
          alignItems={"center"}
          justify={"space-evenly"}
          display={{
            base: "flex",
            md: "flex",
            lg: "flex",
            sm: "block",
            xs: "block",
          }}
          bgGradient="radial-gradient(circle, #3889D2, #BDD4E7)">
          <VStack alignItems={"flex-start"}>
            <Text
              fontSize={{
                base: "4xl",
                lg: "4xl",
                md: "4xl",
                sm: "2xl",
                xs: "2xl",
              }}
              fontWeight={"bold"}
            >
              Let&apos;s Build Something Together
            </Text>

            <Text fontSize={"lg"}>
              Turning ideas into real life products is my calling. Let&apos;s do
              this.
            </Text>
          </VStack>
          <NextLink href="https://www.verbal.chat/contact" passHref>
            <Button
              leftIcon={<IoIosRocket />}
              colorScheme="white"
              color="white"
              bg="black"
              size={"lg"}
              shadow={"dark-lg"}
              _hover={{ shadow: "none" }}
              variant="solid"
              marginTop={{ base: 0, lg: 0, md: 0, sm: 4, xs: 4 }}
            >
              Connect With Us
            </Button>
          </NextLink>
        </Flex>
      </BaseLayout>
    </React.Fragment>
  );
};

export default Home;
