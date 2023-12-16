import React from 'react';
import {
  Box,
  Grid,
  Heading,
  Text,
  useColorModeValue,
  Tag
} from "@chakra-ui/react";
import { pricingPlans } from './__pricingDetails'; // Adjust the import path as necessary

const PricingComponent = () => {
  const cardBgColor = useColorModeValue("white", "gray.700");

  return (
    <Box my="20">
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} gap={6}>
        {pricingPlans.map((plan, index) => (
          <Box
            key={index}
            p={5}
            boxShadow="outline"
            transition="ease-in-out"
            transitionDuration="0.5s"
            _hover={{ boxShadow: "2xl" }}
            bgColor={cardBgColor}
            borderRadius="base"
          >
            <Heading fontSize="lg">{plan.name}</Heading>
            <Text fontSize="xl" fontWeight="bold" mt="3">
              {plan.price}
            </Text>
            <Text fontSize="md" mt="2">{plan.queries}</Text>
            <Text fontSize="md">{plan.additionalQueryCost}</Text>
            <Tag size="md" mt="4">{plan.supportedLanguages}</Tag>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingComponent;
