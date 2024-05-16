import { Center, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
export const Header = (): JSX.Element => {
  return (
    <Center as='header' w='100%' p={5}>
      <Heading as='span' fontSize='2xl'>
        <Link to={`/`}>松江高専 情報科学研究部</Link>
      </Heading>
    </Center>
  );
};
