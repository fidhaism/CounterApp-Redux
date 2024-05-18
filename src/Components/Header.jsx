import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

function Header() {
  return (
    <Flex
      as='header'
      align='center'
      justify='center'
      bg='black'
      color='white'
      p={4}
    >
      <Heading as='h1' fontSize='2xl'>
        My Counter App
      </Heading>
    </Flex>
  );
}

export default Header;
