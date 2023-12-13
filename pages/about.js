import React, { useState, useEffect } from 'react';
import {
  Box,
  SimpleGrid,
  Image,
  Text,
  VStack,
  IconButton,
  Flex,
  Button,
  Heading,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';
import { GrAnnounce } from 'react-icons/gr';
import Seo from '../components/Seo';
import Header from '../components/Header';
import BaseLayout from '../components/Wrapper/BaseLayout';
import Footer from '../components/Footer';
import SocialProfiles from '../components/Hero/SocialProfiles';

const About = () => {
  const textColor = useColorModeValue('gray.700', 'white');
  const heroBg = useColorModeValue('gray.100', 'gray.700');
  const ctaBg = useColorModeValue('blue.500', 'blue.800');

  const HeroSection = () => (
    <Flex
      direction="column"
      alignItems="start"
      justifyContent="center"
      px={10}
      py={20}
      bg={heroBg}
      color={textColor}
    >
      <Heading as="h1" size="2xl" fontWeight="bold" mb={4}>
        Meet the Innovators Behind Verbal
      </Heading>
      <Text fontSize="lg" mb={4}>
        Transforming business communications with cutting-edge AI.
      </Text>
     <Button
  as="a"
  href="https://www.verbal.chat/contact"
  size="md"
  colorScheme="blue"
  variant="solid"
  leftIcon={<GrAnnounce />}
  mt={4}
  target="_blank" // Optional: Opens the link in a new tab
  rel="noopener noreferrer" // Recommended for security reasons when using target="_blank"
>
  Learn More
</Button>

    </Flex>
  );

  const GridItemProfile = ({imageSrc, description, flip }) => {
    const [order, setOrder] = useState(0);
  
    useEffect(() => {
      // Set the order based on the flip prop only when window is available (client-side)
      const calculatedOrder = window.innerWidth >= 768 ? (flip ? 2 : 1) : 0;
      setOrder(calculatedOrder);
    }, [flip]);
  
    return (
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center" my={10}>
        <Box order={{ base: 0, md: order }}>
          <Image src={imageSrc} alt="Profile Image" w="80%" borderRadius="md" boxShadow="2xl" />
        </Box>
        <VStack align="start" spacing={4} order={{ base: 1, md: order === 1 ? 2 : 1 }}>
          <Text fontSize="lg" fontWeight="normal">
            {description}
          </Text>
          <SocialProfiles />
        </VStack>
      </SimpleGrid>
    );
  };

  const CallToActionSection = () => (
    <Flex
      direction="column"
      alignItems="start"
      justifyContent="center"
      p={10}
      mt={16}
      mb={10}
      bgGradient="linear(to-r, blue.500, blue.300)"
      color="white"
      borderRadius="md"
      boxShadow="xl"
    >
      <Flex alignItems="center" mb={3}>
        <IconButton
          aria-label="Announce"
          size="lg"
          variant="outline"
          colorScheme="white"
          icon={<GrAnnounce />}
        />
        <Text ml={3} fontWeight="bold" fontSize="2xl">
          Ask for a demo
        </Text>
      </Flex>
      <Text>
        At Verbal Company, we are at the forefront of AI and chatbot technologies...
      </Text>
    </Flex>
  );

  return (
    <>
      <Seo title="About" />
      <Box minH="100vh" bg={heroBg}>
        <Header />
        <main>
          <BaseLayout>
            <HeroSection />
            <Container maxW="container.xl">
              <GridItemProfile
                imageSrc="https://i.gifer.com/LCPT.gif"
                description="👨‍🎓 👨‍🎓This is Verbal is a b2b chatbot provider that aims to bring the oportunities and advantages of GPTs to small and medium sized businesses. Verbal leverages open source language models, to provide a competitive price with which different businesses, can take advantage of their data to better connect and serve their customers. Companies in the field of real estate, local markets, online stores, pharmacies, book stores and many more can achieve cheaper, better, and 24h customer service, providing a better experience to their clients, and increasing their profit margins and sales.                "
                flip={false}
              />
              <GridItemProfile
                imageSrc="/1698669790573.jpg"
                description="Klei Aliaj is Software Engineer and AI Specialist, holding a degree in Computer Engineering and a strong track record in mobile app development with AI integration. With many years worked at Vodafone he excells in both front-end and back-end solutions. His ability to blend complex technical concepts with user-friendly applications, contributing significantly to the field of technology. Highlighted in his substantial contribution to the creation of e-Albanians chat system.                "
                flip={true}
              />
              <GridItemProfile
                imageSrc="/armir.jpeg"
                description="Armir Cheliku is a political scientist with a background in international relations and economics, he got into data analytics in 2020 earning certifications in the field. Since then he has grown his portfolio, with projects including winning the Goethe Institut's AI2Amplify Hackathon. In 2023, he started developing LLM systems, culminating in Verbal. "
                flip={false}
              />
            </Container>
            <CallToActionSection />
          </BaseLayout>
        </main>
        <Footer />
      </Box>
    </>
  );
};

export default About;
