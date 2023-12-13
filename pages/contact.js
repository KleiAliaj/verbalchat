import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Textarea,
  Input,
  VStack,
  Spinner,
  useToast,
  useColorModeValue,
  Heading,
  Text,
  Alert,
  AlertIcon,
  AlertDescription
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import Header from "../components/Header";
import BaseLayout from "../components/Wrapper/BaseLayout";
import Footer from "../components/Footer";
import Seo from "../components/Seo";

const Contact = () => {
  const form = useRef();
  const toast = useToast();
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ isError: false, errorNameMessage: "", errorEmailMessage: "", errorMessage: "" });

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicApiKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError({ ...error, isError: false });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm(serviceId, templateId, form.current, publicApiKey)
      .then((response) => {
        setIsLoading(false);
        toast({
          title: "Email sent.",
          description: "Your message has been successfully sent!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setData({ name: "", email: "", message: "" }); // Reset form data
      })
      .catch((err) => {
        setIsLoading(false);
        setError({ ...error, isError: true, errorMessage: "Failed to send message. Please try again later." });
      });
  };

  return (
    <React.Fragment>
      <Seo title="Contact" />
      <Box>
        <Header />
        <main>
          <BaseLayout>
            <Box textAlign="center" my={10}>
              <Heading mb={3}>Contact Us</Heading>
              <Text fontSize="lg">We'd love to hear from you!</Text>
            </Box>

            <Grid templateColumns={{ md: "repeat(2, 1fr)" }} gap={10} px={5}>
              <GridItem>
                <Image
                  src="/contact.svg"
                  alt="Contact Us"
                  w="70%"
                  borderRadius="lg"
                />
              </GridItem>

              <GridItem>
                <Box bg={useColorModeValue("gray.100", "gray.700")} p={8} borderRadius="lg" boxShadow="xl">
                  <form ref={form} onSubmit={sendEmail}>
                    <VStack spacing={5}>
                      <FormControl isInvalid={error.isError && error.errorNameMessage}>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Input type="text" name="name" id="name" value={data.name} onChange={handleChange} />
                        {error.isError && error.errorNameMessage && (
                          <FormErrorMessage>{error.errorNameMessage}</FormErrorMessage>
                        )}
                      </FormControl>

                      <FormControl isInvalid={error.isError && error.errorEmailMessage}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input type="email" name="email" id="email" value={data.email} onChange={handleChange} />
                        {error.isError && error.errorEmailMessage && (
                          <FormErrorMessage>{error.errorEmailMessage}</FormErrorMessage>
                        )}
                      </FormControl>

                      <FormControl isInvalid={error.isError && error.errorMessage}>
                        <FormLabel htmlFor="message">Message</FormLabel>
                        <Textarea name="message" id="message" value={data.message} onChange={handleChange} />
                        {error.isError && error.errorMessage && (
                          <FormErrorMessage>{error.errorMessage}</FormErrorMessage>
                        )}
                      </FormControl>

                      <Button type="submit" colorScheme="blue" isLoading={isLoading}>
                        {isLoading ? <Spinner size="sm" mr={2} /> : "Send Email"}
                      </Button>

                      {error.isError && (
                        <Alert status="error">
                          <AlertIcon />
                          <AlertDescription>{error.errorMessage}</AlertDescription>
                        </Alert>
                      )}
                    </VStack>
                  </form>
                </Box>
              </GridItem>
            </Grid>
          </BaseLayout>
        </main>
        <Footer />
      </Box>
    </React.Fragment>
  );
};

export default Contact;
