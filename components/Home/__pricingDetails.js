const pricingPlans = [
    {
      name: 'Basic',
      price: '$49',
      queries: '50,000 queries',
      additionalQueryCost: '$0.0004 per query above limit',
      supportedLanguages: 'Supports Mistral languages',
    },
    {
      name: 'Pro',
      price: '$69',
      queries: '5,000 queries',
      additionalQueryCost: '$0.004 per query above limit',
      supportedLanguages: 'Supports most languages, including English, German, Spanish, French, Albanian, and over 100 more',
    },
    {
      name: 'Enterprise A',
      price: '$149',
      queries: '10,000 queries',
      additionalQueryCost: '$0.0018 per additional query',
      supportedLanguages: 'Supports most languages, including English, German, Spanish, French, Albanian, and over 100 more',
    },
    {
      name: 'Enterprise B',
      price: '$199',
      queries: '3,000 queries',
      additionalQueryCost: '$0.12 per additional query',
      supportedLanguages: 'Supports most languages, including English, German, Spanish, French, Albanian, and over 100 more',
    },
    {
      name: 'Custom',
      price: 'Contact us',
      queries: 'Custom tailor package',
      additionalQueryCost: 'Custom pricing',
      supportedLanguages: 'Custom language support',
    },
  ];
  
  export { pricingPlans };
  