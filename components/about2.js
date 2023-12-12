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
         
          <main>
            <BaseLayout>
              {/* <BaseText
    
                textIcon="..."
                leftSpacing="4"
                topSpacing="2"
              /> */}
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
                {/* Adjusted GridItems: Text on the right, image on the left */}
                <GridItem
                  colSpan={{ base: 5, md: 3 }}
                  mt={{ base: 0, md: 0, lg: 0, sm: 10, xs: 10 }}
                >
                  <Text>
                  Klei Aliaj is Software Engineer and AI Specialist, holding a degree in Computer Engineering and a strong track record in mobile app development with AI integration. With many years worked at Vodafone he excells in both front-end and back-end solutions. His ability to blend complex technical concepts with user-friendly applications, contributing significantly to the field of technology. Highlighted in his substantial contribution to the creation of e-Albanians chat system.
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
                    {/* <SocialProfiles /> */}
                  </HStack>
                </GridItem>
                <GridItem colSpan={{ base: 5, md: 2 }}>
                  <Image
                    src="/1698669790573.jpg" // Image source
                    alt="Hero"
                    w="320px"
                    borderRadius="10px"
                  />
                </GridItem>
              </Grid>
              

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
  {/* Image on the left */}
  <GridItem colSpan={{ base: 5, md: 2 }}>
    <Image
      src="/armir.jpeg" // Replace with your image source
      alt="Hero"
      w="320px"
      borderRadius="10px"
    />
  </GridItem>

  {/* Text on the right */}
  <GridItem
    colSpan={{ base: 5, md: 3 }}
    mt={{ base: 0, md: 0, lg: 0, sm: 10, xs: 10 }}
  >
    <Text>
    Armir Cheliku is a political scientist with a background in international relations and economics, he got into data analytics in 2020 earning certifications in the field. Since then he has grown his portfolio, with projects including winning the Goethe Institut's AI2Amplify Hackathon. In 2023, he started developing LLM systems, culminating in Verbal. 
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
      {/* Optionally include SocialProfiles or other components */}
    </HStack>
  </GridItem>
</Grid>

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
  