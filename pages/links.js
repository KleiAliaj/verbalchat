import React from "react";
import { VStack, Button } from "@chakra-ui/react";
import BaseText from "../components/Wrapper/BaseText";
import BaseLayout from "../components/Wrapper/BaseLayout";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { profiles } from "../utils/profiles";

const Links = () => {
  return (
    <React.Fragment>
      <Seo title="Links" />
      <header>
        <Header />
      </header>

      <main>
        <BaseLayout>
          <BaseText
            firstTitle="LLM"
            secondTitle="Selection"
            textIcon="https://ik.imagekit.io/ayushsoni1010/Website/notion?updatedAt=1669666487240"
            leftSpacing="4"
          />
<VStack
  spacing={4}
  width={{ base: "sm", lg: "sm", md: "sm", sm: "auto", xs: "auto" }}
  margin={"auto"}
  marginTop={10}
>
  {profiles.map((item, index) => {
    return (
      <Button
        width={"full"}
        key={item.name}
        as="a"
        target="_blank"
        textAlign={"center"}
        // Apply a darker blue color to the first and seventh button
        backgroundColor={(index === 0 || index === 6) ? "darkblue" : undefined}
        color={(index === 0 || index === 6) ? "white" : undefined} // White text color for the first and seventh button
        colorScheme={(index === 0 || index === 6) ? undefined : "blue"}
        _hover={{ bg: (index === 0 || index === 6) ? "blue.800" : undefined }}
      >
        {item.title}
      </Button>
    );
  })}
</VStack>


        </BaseLayout>
      </main>

      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default Links;
