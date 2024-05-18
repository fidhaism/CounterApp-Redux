import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Flex
      as='footer'
      align='center'
      justify='center'
      bg='black'
      color='white'
      p={4}
    >
      <Text>&copy; 2024 My Counter App. All rights reserved.</Text>
    </Flex>
  );
}

export default Footer;
