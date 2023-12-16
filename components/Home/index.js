import {
  Box,
  Grid,
  Heading,
  Icon,
  Stack,
  VStack,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import BaseLayout from "../Wrapper/BaseLayout";
import Skills from "./Skills";
import Timeline from "./Timeline";
import SupportedLanguages from "./SupportedLanguages";
import { productCardDetails } from "./__productCardDetails";
import PricingComponent from "./PricingComponent";
import { IoIosRocket } from "react-icons/io";

const Home = () => {
  return (
    <React.Fragment>
      <BaseLayout mt="10" id="stack">
        <Heading
          fontSize={{
            base: "5xl",
            md: "5xl",
            lg: "5xl",
            sm: "3xl",
            xs: "3xl",
          }}
          fontWeight="bold"
          textAlign="center"
        >
          Verbal offers:
        </Heading>
        {/* <Text
          textAlign="center"
          fontSize={{ base: "md", md: "md", lg: "md", sm: "sm", xs: "sm" }}
          my="5"
          mx={{ lg: 60, md: 60, sm: 0, xs: 0 }}
        >
          From designing the interface to implementing your fully featured
          application - I can provide the full product design process from an
          idea to a finished hiqh quality app, polished with fantastic design
          and running on state of the art software.
        </Text> */}
        <Box align="center" my={{ base: 20, lg: 20, md: 20, sm: 14, xs: 14 }}>
          <Grid
            display={{
              base: "grid",
              md: "grid",
              lg: "grid",
              sm: "block",
              xs: "block",
            }}
            templateColumns="repeat(2,1fr)"
            maxW="3xl"
            gap="20"
          >
            {productCardDetails.map(
              (item, index) =>
                item?.stack && (
                  <Stack
                    key={index}
                    spacing="3"
                    align="center"
                    mt={{ md: 0, lg: 0, sm: 10, xs: 10 }}
                  >
                    <Box
                      w="60px"
                      h="60px"
                      borderRadius="full"
                      align="center"
                      bg={item?.bgColor}
                      mb="2"
                      boxShadow="2xl"
                      transition={"ease-in-out"}
                      transitionDuration="0.5s"
                      _hover={{ boxShadow: "outline" }}
                      cursor="pointer"
                    >
                      <Icon mt="5" w="5" h="5">
                        {item?.svgIcon}
                      </Icon>
                    </Box>
                    <Heading fontSize="xl">{item?.title}</Heading>
                    <Text fontSize="sm">{item?.description}</Text>
                  </Stack>
                )
            )}
          </Grid>
        </Box>
      </BaseLayout>
      <Skills />
   
     
      {/* <Timeline /> */}
      <SupportedLanguages/>
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
          <NextLink href="/links" passHref>
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
