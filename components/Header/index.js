import React, { useState } from "react";
import NextLink from "next/link";
import ColorModeSwitcher from "../../utils/ThemeToggleButton";
import {
  Box,
  Flex,
  Stack,
  Button,
  ButtonGroup,
  IconButton,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import NavItems from "./NavItems";
import CollapseMenu from "./CollapseMenu";
import BaseLayout from "../Wrapper/BaseLayout";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevState) => !prevState);
  };

  // Dynamic text color based on the color mode
  const logoTextColor = useColorModeValue("blue.500", "white");

  return (
    <React.Fragment>
      <BaseLayout px="0" pt="0">
        <Box
          position="fixed"
          top="0"
          zIndex="10"
          maxW="1536"
          w="100%"
          px={{ md: 20, lg: 20, sm: 5 }}
        >
          <Flex
            backdropFilter="blur(7px)"
            border="none"
            minH="60px"
            h="60px"
            py={{ base: 3, md: 3, lg: 3, sm: 3, xs: 4 }}
            px={{ base: 4, md: 7 }}
            alignSelf="center"
          >
            <Stack flex={{ base: 1, md: 1 }} direction="row" align="center">
              {/* Commented out Image Logo */}
              {/* <NextLink href="/" passHref>
                <Image src="logo.png" alt="Brand Logo" w={150} h={150} cursor="pointer" />
              </NextLink> */}
              
              {/* Text-based Logo */}
              <NextLink href="/" passHref>
              <Text
  as="a"
  fontSize={{ base: "3xl", md: "4xl" }}
  fontWeight="extrabold"
  letterSpacing="wider"
  color={logoTextColor}
  bgGradient="linear(to-l, #81E6D9, #3C8DD5)"
  bgClip="text"
  cursor="pointer"
  _hover={{ textDecoration: "underline" }}
>
  VERBAL
</Text>

              </NextLink>
            </Stack>
            <NavItems />
            <Stack
              flex={{ base: 1, md: 1 }}
              justify="end"
              direction="row"
              align="center"
              spacing="3"
              mx={{ base: 0 }}
            >
              <ColorModeSwitcher justifySelf="flex-end" {...colorModeSwitcherProps} />
              <Box display={{ md: "none", lg: "none", sm: "flex", xs: "flex" }}>
                <IconButton icon={<FiMenu />} onClick={handleToggle} {...iconButtonProps} />
              </Box>
              <ButtonGroup display={{ base: "flex", md: "flex", sm: "none", xs: "none" }}>
                <Button as="a" href="https://cal.com/verbal/" {...demoButtonProps}>
                  Request a Demo
                </Button>
              </ButtonGroup>
            </Stack>
          </Flex>
          <CollapseMenu isOpen={isOpen} setOpen={handleToggle} />
        </Box>
      </BaseLayout>
    </React.Fragment>
  );
};

export default Header;

// Additional props for components for better readability
const colorModeSwitcherProps = {
  display: {
    base: "none",
    md: "inline-flex",
    sm: "inline-flex",
    xs: "inline-flex",
  },
  _focus: { boxShadow: "outline" },
};

const iconButtonProps = {
  variant: "outline",
  border: "2px",
  ariaLabel: "Hamburger Menu",
  _focus: { boxShadow: "outline" },
};

const demoButtonProps = {
  colorScheme: "teal",
  target: "_blank",
  variant: "solid",
  size: "md",
  bgGradient: "linear(to-tr, blue.500, blue.300)",
};
