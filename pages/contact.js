import React, { useState, useRef } from "react";
import { Box, Button, FormControl, FormLabel, Grid, GridItem, Image, Textarea, Input, VStack, FormErrorMessage, Spinner, useToast } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import Header from "../components/Header";
import BaseLayout from "../components/Wrapper/BaseLayout";
import BaseText from "../components/Wrapper/BaseText";
import Seo from "../components/Seo";
import Footer from "../components/Footer";
import "react-toastify/dist/ReactToastify.css";

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
    setError({ ...error, isError: false }); // Reset error state on input change
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Here you can add your validation logic

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
      })
      .catch((error) => {
        setIsLoading(false);
        setError({ ...error, isError: true, errorMessage: "Failed to send message." });
      });
  };

  return (
    <React.Fragment>
      <Seo title="Contact" />
      <Box>
        <Header />
        <main>
          <BaseLayout>
            <BaseText
              firstTitle="Contact"
              secondTitle="Verbal"
              textIcon="https://ik.imagekit.io/ayushsoni1010/Website/contact?ik-sdk-version=javascript-1.4.3&updatedAt=1669666339518"
              leftSpacing="4"
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
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
              }}
              gap={4}
              my="10"
              alignItems="center"
            >
              <GridItem>
                <Image
                  src="/contact.svg"
                  alt="contact-hero"
                  w="300px"
                  my={{ base: 10, lg: 10, md: 10, sm: 20, xs: 20 }}
                  borderRadius="10px"
                />
              </GridItem>
              <GridItem>
                <Box borderRadius="10px" boxShadow="lg">
                  <form ref={form} onSubmit={sendEmail}>
                    <VStack p="10">
                      {/* Name Input */}
                      <FormControl isInvalid={error.isError}>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          value={data.name}
                          onChange={handleChange}
                          required
                        />
                        {/* Error handling message */}
                      </FormControl>

                      {/* Email Input */}
                      <FormControl isInvalid={error.isError}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          value={data.email}
                          onChange={handleChange}
                          required
                        />
                        {/* Error handling message */}
                      </FormControl>

                      {/* Message Input */}
                      <FormControl isInvalid={error.isError}>
                        <FormLabel htmlFor="message">Message</FormLabel>
                        <Textarea
                          name="message"
                          id="message"
                          value={data.message}
                          onChange={handleChange}
                          required
                        />
                        {/* Error handling message */}
                      </FormControl>

                      {/* Submit Button */}
                      <Button type="submit" isLoading={isLoading}>
                        {isLoading ? <Spinner size="sm" mr={2} /> : null}
                        Send email
                      </Button>
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
