import React from "react";
import dynamic from "next/dynamic";
import VoxelDogLoader from "../DevDog/blender-dog";
import BaseLayout from "../Wrapper/BaseLayout";
import {
  Button,
  VStack,
  Flex,
  Stack,
  Heading,
  Text,
  Link,
  ButtonGroup,
} from "@chakra-ui/react";
import SocialProfiles from "./SocialProfiles";

// const LazyVoxelDog = dynamic(() => import("../DevDog"), {
//   ssr: false,
//   loading: () => <VoxelDogLoader />,
// });

// ChatbotIframe Component
const ChatbotIframe = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <style>
        {`
          .iframe-container iframe {
            width: 480px; /* Fixed width for larger screens */
            height: 500px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border: 1px solid #ccc;
            transition: all 0.3s ease-in-out;
          }

          /* Responsive styles for screens smaller than 768px */
          @media screen and (max-width: 768px) {
            .iframe-container iframe {
              width: 100%; /* Full width on smaller screens */
              max-width: 480px; /* Ensures the iframe is not wider than 480px even if the screen is */
              margin: 0; /* Removes any margin to center the iframe */
            }
          }
        `}
      </style>
      <div className="iframe-container">
        <iframe
          src="https://llama2.kleyaliaj.repl.co/"
          title="Chatbot"
          loading="lazy"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};


const Hero = () => {
  return (
    <React.Fragment>
      <BaseLayout>
        <VStack
          m="auto"
          my="10"
          mt={{ base: 10, md: 10, lg: 10, sm: 10, xs: "4em" }}
          zIndex="100"
        >
          <Link
            href="https://github.com/"
            textDecoration="none"
            isExternal={true}
            style={{ textDecoration: "none" }}
          >
            <Button
              borderRadius="full"
              borderColor="blue.600"
              h="30px"
              fontSize={{ base: "sm", sm: "sm", xs: "xs" }}
              borderWidth="2px"
            >
               Custom chatbot company
            </Button>
          </Link>
        </VStack>
        <Flex
          // display={{ base: "flex", md: "flex", sm: "block", xs: "block" }}
          flex={{ base: 1, md: 1, sm: 0, xs: 0 }}
          justify="space-between"
          direction={{
            base: "row",
            md: "row",
            sm: "column-reverse",
            xs: "column-reverse",
          }}
        >
          <Stack>
         <Heading
          fontSize={{ md: "5xl", lg: "5xl", sm: "4xl", xs: "2xl" }}
          fontWeight="extrabold"            >
              {/* Replace the existing Text components with your new text */}
              <Stack display="flex" direction="row">
                <Text colorScheme="black">Leverage</Text>
                <Stack display="flex" direction="row">
                <Text
                    bgGradient="linear(to-tr, blue.500, blue.300)"
                  bgClip="text"
                >
                GPT's
                </Text>
              </Stack>
              </Stack>
              <Stack display="flex" direction="row">
                <Text colorScheme="black">and your</Text>
                <Text
                  bgGradient="linear(to-tr, blue.500, blue.300)"
                  bgClip="text"
                >
                business data
                </Text>
              </Stack>
              
              <Stack display="flex" direction="row">
                <Text
                  bgGradient="linear(to-tr, blue.500, blue.300)"
                  bgClip="text"
                >
                  {/* your business */}
                </Text>
              </Stack>
              <Stack display="flex" direction="row">
                <Text colorScheme="black">with</Text>
                <Text
                  bgGradient="linear(to-tr, blue.500, blue.300)"
                  bgClip="text"
                >
                Verbal.chat
                </Text>
              </Stack>
            </Heading>

          <Text py="5" colorScheme="black" fontWeight="400">
          Empower Your Enterprise with Smart Dialogues Fueled by Verbal.chat
</Text>

            <ButtonGroup gap="1">
              <Button
                as="a"
                target="_blank"
                href="mailto:verbal@gmail.com"
                border="2px"
                variant="outline"
                size={{ base: "md", md: "md", sm: "sm" }}
                colorScheme="teal"
              >
                Call Us
              </Button>
              <Button
                colorScheme="teal"
                target="_blank"
                as="a"
                href="https://cal.com/verbal/"
                variant="solid"
                size={{ base: "md", md: "md", sm: "sm" }}
                bgGradient="linear(to-tr, blue.500, blue.300)"
              >
                Schedule a Meetinghhh
              </Button>
            </ButtonGroup>
            <Stack py="4">
              <SocialProfiles />
            </Stack>
          </Stack>
          <Stack>
            {/* <LazyVoxelDog /> */}
            <ChatbotIframe />
          </Stack>
        </Flex>
      </BaseLayout>
    </React.Fragment>
  );
};

export default Hero;
