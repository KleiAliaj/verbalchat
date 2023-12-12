import {
  VStack,
  Text,
  HStack,
  Image,
  Grid,
  GridItem,
  IconButton,
  Box,
  Flex,
} from "@chakra-ui/react";
import { GrAnnounce } from "react-icons/gr";
import React from "react";
import Header from "../components/Header";
import BaseLayout from "../components/Wrapper/BaseLayout";
import BaseText from "../components/Wrapper/BaseText";
import SocialProfiles from "../components/Hero/SocialProfiles";
import Seo from "../components/Seo";
import Footer from "../components/Footer";
import Timeline from "../components/Home/Timeline";
import CustomComponent from "../components/about2"

const About = () => {
  return (
    <React.Fragment>
      <Seo title="About" />
      <Box>
        <header>
          <Header />
        </header>
        <main>
          <BaseLayout>
            <BaseText
              firstTitle="About"
              secondTitle="Verbal"
              // textIcon="https://ik.imagekit.io/ayushsoni1010/Website/about?ik-sdk-version=javascript-1.4.3&updatedAt=1669666323627"
              leftSpacing="4"
              topSpacing="2"
            />
          <Grid
              display={{
                base: "grid",
                md: "grid",
                lg: "grid",
                sm: "block",
                xs: "block",
              }}
              templateColumns={{
                md: "repeat(5, 1fr)",
                lg: "repeat(5, 1fr)",
              }}
              gap={4}
              my="10"
            >
              <GridItem colSpan={2}>
                <Image
                  src="/about.jpg" //image hero 
                  alt="Hero"
                  w="320px"
                  borderRadius="10px"
                />
              </GridItem>
              <GridItem
                colStart={3}
                colEnd={12}
                mt={{ base: 0, md: 0, lg: 0, sm: 10, xs: 10 }}
              >
                <Text>
                  👨‍🎓This is{" "}
                  <span
                    style={{
                      color: "radial-gradient(circle, #3889D2, #BDD4E7)",
                      fontWeight: 500,
                    }}
                  >
                    Verbal
                  </span>{" "}
                  is a b2b chatbot provider that aims to bring the oportunities and advantages of GPTs to small and medium sized businesses.
Verbal leverages open source language models, to provide a competitive price with which different businesses, can take advantage of their data to better connect and serve their customers.
Companies in the field of real estate, local markets, online stores, pharmacies, book stores and many more can achieve cheaper, better, and 24h customer service, providing a better experience to their clients, and increasing their profit margins and sales. 
                </Text>
                <Text mt="5">
                  {/* ⚡I am a{" "} */}
                  <span
                    style={{
                      color: "var(--chakra-colors-teal-500)",
                      fontWeight: 500,
                    }}
                  >
                  
                  </span>
                 
                  <span
                    style={{
                      color: "var(--chakra-colors-teal-500)",
                      fontWeight: 500,
                    }}
                  >
                  </span>{" "}
                 
                </Text>
                <Text mt="5">
                  <span
                    style={{
                      color: "var(--chakra-colors-teal-500)",
                      fontWeight: 500,
                    }}
                  >
                  </span>{" "}
                  
                </Text>
                <HStack
                  mt={{ base: 8, lg: 8, md: 8, sm: 10, xs: 10 }}
                  display={{
                    base: "block",
                    lg: "block",
                    md: "block",
                    sm: "none",
                    xs: "none",
                  }}
                >
                  <SocialProfiles />
                </HStack>
              </GridItem>
            </Grid>
            <CustomComponent/>

            <VStack
              mt={{ base: 28, lg: 28, md: 28, sm: 20, xs: 20 }}
              p="10"
              spacing={4}
              w="full"
              borderRadius="10px"
              color="black"
              alignItems={"flex-start"}
              bgGradient="radial-gradient(circle, #3889D2, #BDD4E7)"
            >
              <Flex gap="4" alignItems={"center"}>
                <IconButton
                  size="lg"
                  width={{ base: 14, lg: 14, md: 14, sm: 14, xs: 10 }}
                  height={{ base: 14, lg: 14, md: 14, sm: 14, xs: 10 }}
                  fontSize={{
                    base: "3xl",
                    lg: "3xl",
                    md: "3xl",
                    sm: "2xl",
                    xs: "2xl",
                  }}
                  variant="solid"
                  color="current"
                  bg="white"
                  icon={<GrAnnounce />}
                />
                <Text
                  fontSize={{
                    base: "4xl",
                    lg: "4xl",
                    md: "4xl",
                    sm: "4xl",
                    xs: "2xl",
                  }}
                  fontWeight={"bold"}
                >
                  Ask for a demo  
                </Text>
              </Flex>
                  
              <Text
                display={{
                  base: "block",
                  lg: "block",
                  md: "block",
                  sm: "none",
                  xs: "none",
                }}
              >
At Verbal Company, we are at the forefront of AI and chatbot technologies, driving innovation in automated communication solutions. Our team is eager to explore collaborative opportunities in AI-driven chatbot development, bringing a wealth of expertise in both frontend and backend systems. We invite you to ask for a demo, showcasing our capabilities in creating advanced and interactive user experiences. We are open to various working arrangements, including full-time, part-time, or contract roles, to effectively contribute to projects that set new standards in intelligent user engagement.

</Text>
              
              <Text
                display={{
                  base: "none",
                  lg: "none",
                  md: "none",
                  sm: "block",
                  xs: "block",
                }}
              >
                I&apos;m a versatile developer excited about diverse roles in
                frontend and backend development, and open to different work
                arrangements.
              </Text>

              {/* <Timeline/> */}

            </VStack> 
          </BaseLayout>
          
        </main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </React.Fragment>
  );
};

export default About;
