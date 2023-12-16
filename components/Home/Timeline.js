import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  useColorModeValue,
  Heading,
  Stack,
  Badge,
} from '@chakra-ui/react';
import { pricingPlans } from './__pricingDetails'; // Import the pricing plans data

// Function to calculate the yearly price
const calculateYearlyPrice = (monthlyPrice) => {
  const monthly = parseFloat(monthlyPrice.replace('$', ''));
  const yearly = (monthly * 12) * 0.9; // 10% discount
  return `$${yearly.toFixed(2)}`;
};

// Component for individual pricing cards
const PricingCard = ({ plan, isMonthly }) => {
  const boxShadowBase = '0 0 4px 0 rgba(0,0,0,0.2)';
  const boxShadowHover = '0 8px 16px 0 rgba(0,0,0,0.2)';
  const [shadow, setShadow] = useState(boxShadowBase);

  const displayPrice = isMonthly ? plan.price : calculateYearlyPrice(plan.price);

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={6}
      m={4}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={shadow}
      onMouseEnter={() => setShadow(boxShadowHover)}
      onMouseLeave={() => setShadow(boxShadowBase)}
      transition="box-shadow 0.2s ease-in-out"
      textAlign="center"
      position="relative"
    >
      {plan.isPopular && (
        <Badge colorScheme="teal" position="absolute" top="1rem" right="1rem">
          Most Popular
        </Badge>
      )}
      <Heading as="h3" size="lg" mb={2}>{plan.name}</Heading>
      <Text fontWeight="bold" fontSize="5xl" mb={2}>
        {displayPrice}
      </Text>
      <Text fontSize="md" color="gray.500">{plan.queries}</Text>
      <Text fontSize="sm" color="gray.500" mb={4}>{plan.additionalQueryCost}</Text>
      <Text fontSize="sm" color="gray.500" mb={4}>{plan.supportedLanguages}</Text>
      <Button
        colorScheme={plan.isPopular ? 'teal' : 'blue'}
        variant="solid"
        size="md"
        mt={4}
        isFullWidth={true}
        onClick={() => window.location.href = 'https://www.verbal.chat/contact'}
      >
        {plan.price.startsWith('Contact') ? 'Contact Us' : 'Get Started'}
      </Button>
    </Box>
  );
};

// Main pricing component
const PricingComponent = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <Flex direction="column" align="center" p={5}>
      <Stack direction={['column', 'row']} mb={10} spacing={4}>
        <Button onClick={() => setIsMonthly(true)} colorScheme={isMonthly ? 'blue' : 'gray'}>Monthly</Button>
        <Button onClick={() => setIsMonthly(false)} colorScheme={!isMonthly ? 'blue' : 'gray'}>Yearly</Button>
      </Stack>
      <Flex wrap="wrap" justify="center">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} plan={plan} isMonthly={isMonthly} />
        ))}
      </Flex>
    </Flex>
  );
};

export default PricingComponent;
