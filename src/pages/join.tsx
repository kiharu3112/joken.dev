import { Center, Heading } from '@chakra-ui/react';
import { JoinAccordion } from '../components/joinAccordion';

export const Join = () => {
  return (
    <>
      <Center>
        <Heading fontSize='3xl'>入部案内</Heading>
      </Center>

      <Center>
        <JoinAccordion />
      </Center>
    </>
  );
};
