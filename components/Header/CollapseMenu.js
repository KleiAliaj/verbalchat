import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Collapse,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { linkDetails } from "./__linkDetails";

const CollapseMenu = ({ isOpen, setOpen }) => {
  const bgColor = useColorModeValue("blue.300", "gray.600"); // Lighter blue for light mode, slightly darker for dark mode

  return (
    <React.Fragment>
      <Collapse in={isOpen} animateOpacity>
        <Box
          display={{ base: "flex", md: "none" }} // Simplified display property
          flexDir="column"
          m={5}
          p={5}
          backdropFilter="blur(6px)" // Increased blur for better readability
          borderRadius="lg" // Larger radius for a softer look
          minH="lg"
          justifyContent="space-between"
          bg={bgColor}
        >
          <Stack flexDir="column" w="full" spacing={4}> {/* Added spacing for better visual separation */}
            {linkDetails.map((item, index) => (
              <Button
                key={index}
                as="a"
                variant="ghost"
                size="sm"
                onClick={setOpen}
                href={item.link}
                _focus={{ boxShadow: "outline" }}
              >
                {item.name}
              </Button>
            ))}
          </Stack>
          <ButtonGroup variant="outline" spacing={4}> {/* Added variant and spacing */}
            <Button
              as="a"
              href="https://cal.com/verbal/"
              target="_blank"
              size="sm"
              colorScheme="blue" // Adjusted color scheme
              bgGradient="linear(to-tr, blue.400, blue.200)" // Lighter blue gradient
              onClick={setOpen}
              _focus={{ boxShadow: "outline" }}
            >
              Schedule a Meeting
            </Button>
          </ButtonGroup>
        </Box>
      </Collapse>
    </React.Fragment>
  );
};

export default CollapseMenu;
