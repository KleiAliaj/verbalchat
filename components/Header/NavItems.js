import React from "react";
import NextLink from "next/link";
import { linkDetails } from "./__linkDetails";
import { HStack, Button, ButtonGroup, useColorMode } from "@chakra-ui/react";

const NavItems = () => {
  const { colorMode } = useColorMode(); // Access the current color mode
  const buttonTextColor = colorMode === 'dark' ? 'white' : '#06015B'; // Set text color based on color mode

  return (
    <React.Fragment>
      <HStack display={{ md: "flex", sm: "none", xs: "none" }} flexDir={"row"}>
        <ButtonGroup isAttached alignSelf="center">
          {linkDetails.map((item, index) => (
            <NextLink key={index} href={item.link} passHref>
              <Button variant="ghost" color={buttonTextColor} size="md">
                {item.name}
              </Button>
            </NextLink>
          ))}
        </ButtonGroup>
      </HStack>
    </React.Fragment>
  );
};

export default NavItems;
