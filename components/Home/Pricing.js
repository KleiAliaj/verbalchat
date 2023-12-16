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

// Calculate the yearly price which is 10% cheaper than the monthly price
const calculateYearlyPrice = (monthlyPrice) => {
  const monthly = parseFloat(monthlyPrice);
  const yearly = monthly * 12 * 0.9; // 10% discount
  return yearly.toFixed(2);
};

const PricingCard = ({ plan, isMonthly }) => {
  const boxShadowBase = '0 0 4px 0 rgba(0,0,0,0.2)';
  const boxShadowHover = '0 8px 16px 0 rgba(0,0,0,0.2)';
  const [shadow, setShadow] = useState(boxShadowBase);

  // Display price based on the toggle state (monthly/yearly)
  const displayPrice = isMonthly ? plan.price : calculateYearlyPrice(plan.price);

  // Function to handle button click
  const handleButtonClick = () => {
    window.location.href = 'https://www.verbal.chat/contact';
  };

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
      <Heading as="h3" size="lg" mb={2}>
        {plan.name}
      </Heading>
      <Text fontWeight="bold" fontSize="5xl" mb={2}>
        {plan.price.startsWith('Contact') ? plan.price : `$${displayPrice}${isMonthly ? '/mo' : '/yr'}`}
      </Text>
      <Text fontSize="md" color="gray.500">
        {plan.queries}
      </Text>
      <Text fontSize="sm" color="gray.500" mb={4}>
        {plan.additionalQueryCost}
      </Text>
      <Text fontSize="sm" color="gray.500" mb={4}>
        {plan.supportedLanguages}
      </Text>
      <Button
        colorScheme={plan.isPopular ? 'teal' : 'blue'}
        variant="solid"
        size="md"
        mt={4}
        isFullWidth={true}
        onClick={handleButtonClick}
      >
        {plan.price.startsWith('Contact') ? 'Contact Us' : 'Get Started'}
      </Button>
    </Box>
  );
};

const PricingComponent = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    {
      name: 'Basic',
      price: '49',
      queries: '50,000 queries',
      additionalQueryCost: '$0.0004 per query above limit',
      supportedLanguages: 'Supports Mistral languages',
      duration: 'month',
      isPopular: false,
    },
    {
      name: 'Pro',
      price: '69',
      queries: '5,000 queries',
      additionalQueryCost: '$0.004 per query above limit',
      supportedLanguages: 'Supports most languages, including English, German, Spanish, French, Albanian and over 100 more',
      duration: 'month',
      isPopular: true, // Mark as most popular as an example
    },
    {
      name: 'Enterprise A',
      price: '149',
      queries: '10,000 queries',
      additionalQueryCost: '$0.0018 per additional query',
      supportedLanguages: 'Supports most languages, including English, German, Spanish, French, Albanian and over 100 more',
      duration: 'month',
      isPopular: false,
    },
    {
      name: 'Enterprise B',
      price: '199',
      queries: '3,000 queries',
      additionalQueryCost: '$0.12 per additional query',
      supportedLanguages: 'Supports most languages, including English, German, Spanish, French, Albanian and over 100 more',
      duration: 'month',
      isPopular: false,
    },
    {
      name: 'Custom',
      price: 'Contact us',
      queries: 'Custom tailor package',
      additionalQueryCost: 'Custom pricing',
      supportedLanguages: 'Custom language support',
      duration: '',
      isPopular: false,
    },
  ];

   
  return (
    <Flex direction="column" align="center" p={5}>
      <Stack direction={['column', 'row']} mb={10} spacing={4}>
        <Button
          onClick={() => setIsMonthly(true)}
          colorScheme={isMonthly ? 'blue' : 'gray'}
        >
          Monthly
        </Button>
        <Button
          onClick={() => setIsMonthly(false)}
          colorScheme={!isMonthly ? 'blue' : 'gray'}
        >
          Yearly
        </Button>
      </Stack>
      <Flex wrap="wrap" justify="center">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} isMonthly={isMonthly} />
        ))}
      </Flex>
    </Flex>
  );
};

export default PricingComponent;