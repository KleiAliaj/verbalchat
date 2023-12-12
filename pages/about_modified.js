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
                  src="/profile.jpg" //image hero 
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
                      color: "var(--chakra-colors-teal-500)",
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
                  ⚡I am a{" "}
                  <span
                    style={{
                      color: "var(--chakra-colors-teal-500)",
                      fontWeight: 500,
                    }}
                  >
                    Full Stack Developer, an avid Open-Source Enthusiast, and
                    UX/UI Designer
                  </span>
                  {", "}I enjoy building SaaS products and microservices
                  applications while also creating feasible design systems. My
                  deep understanding of{" "}
                  <span
                    style={{
                      color: "var(--chakra-colors-teal-500)",
                      fontWeight: 500,
                    }}
                  >
                    frontend and backend
                  </span>{" "}
                  application structure and architecture allows me to build
                  robust and scalable products using core principles. By
                  leveraging design principles, I can deliver engaging and
                  intuitive designs that provide seamless user experiences.
                </Text>
                <Text mt="5">
                  🎯In terms of technical skills, I work with{" "}
                  <span
                    style={{
                      color: "var(--chakra-colors-teal-500)",
                      fontWeight: 500,
                    }}
                  >
                    Javascript and Typescript
                  </span>{" "}
                  on a daily basis, both professionally and on personal
                  projects. I have actively participated in various hackathons
                  and open-source contribution programs as both a participant
                  and mentor, and I have taken sessions in the community to help
                  with community building, team leadership, and different
                  methodologies in developing software.
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
            
              {/* New Section: Colleague 1 */}
              <GridItem colSpan={2}>
                <Image
                  src="/colleague1-image.jpg" // Replace with your colleague's image URL
                  alt="Colleague 1"
                  w="320px"
                  borderRadius="10px"
                />
              </GridItem>
              <GridItem colSpan={3}>
                <Text mt="5">
                  {/* Text about Colleague 1 */}
                </Text>
              </GridItem>

              {/* New Section: Colleague 2 */}
              <GridItem colSpan={2}>
                <Image
                  src="/colleague2-image.jpg" // Replace with your colleague's image URL
                  alt="Colleague 2"
                  w="320px"
                  borderRadius="10px"
                />
              </GridItem>
              <GridItem colSpan={3}>
                <Text mt="5">
                  {/* Text about Colleague 2 */}
                </Text>
              </GridItem>
</Grid>
            <VStack
              mt={{ base: 28, lg: 28, md: 28, sm: 20, xs: 20 }}
              p="10"
              spacing={4}
              w="full"
              borderRadius="10px"
              color="black"
              alignItems={"flex-start"}
              bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
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
                  Open for roles
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
                As a versatile developer, I am excited about the prospect of
                taking on diverse roles and responsibilities in both frontend
                and backend development, and I am open to exploring
                opportunities in various work arrangements, including full-time,
                part-time, or contract positions.
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
