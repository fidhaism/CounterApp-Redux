import React from 'react';
import { Box, Button, Flex, Heading, Center } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from './Redux/counterSlice';

function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((state)=> state.counterReducer.count)
  return (
    <Center h="100vh">
      <Box
        className='border border-dark m-5 p-5 text-center bg-black shadow rouned'
        borderRadius='md'
        p={5}
        bg='black'
        color='white'
        maxW="650px" // Adjust the max width as needed
        w="100%" // Set the width to 100% to fill the available space
      >
        <Heading fontSize='100px' textAlign='center'>{count}</Heading>
        <Flex justifyContent='space-around' mt={4}>
          <Button colorScheme='blue' onClick={()=>dispatch(incrementCounter())} >Increment</Button>
          <Button colorScheme='red' onClick={()=>dispatch(decrementCounter())}>Decrement</Button>
          <Button colorScheme='gray' onClick={() => dispatch(resetCounter())}>Reset</Button>

        </Flex>
      </Box>
    </Center>
  );
}

export default Counter;
