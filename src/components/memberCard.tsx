import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Center,
  Image,
  Stack,
  Text,
  Link,
  Divider,
  ButtonGroup,
  SimpleGrid,
} from '@chakra-ui/react';

export type memberProps = {
  members: Readonly<{
    realName: string;
    nickName: string;
    position: string | null;
    link: { name: string; url: string }[];
    imageUrl: string;
  }>[];
};

// ToDo: 画像のフォールバック考える
const MemberCard = ({ members }: memberProps) => {
  return (
    <SimpleGrid spacingY='2em'>
      {members.map((m) => {
        return (
          <Card
            overflow='hidden'
            variant='outline'
            w='100%'
            mb='1.5em'
            maxW='40em'
          >
            <CardBody>
              <Stack mt='6' spacing='3'>
                <Center>
                  <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={m.imageUrl}
                    borderRadius='full'
                  />
                </Center>
                <Heading size='md'>{m.nickName}</Heading>

                <Text py='2'>{m.realName}</Text>
                {m.position && <Badge colorScheme='green'>{m.position}</Badge>}
              </Stack>
            </CardBody>

            <Divider />
            <CardFooter>
              <Center>
                <ButtonGroup spacing='2'>
                  {m.link.map((link) => {
                    return (
                      <Link href={link.url}>
                        {link.name === 'twitter' ? (
                          <Button variant='solid' colorScheme={'twitter'}>
                            {link.name}
                          </Button>
                        ) : (
                          <Button variant='solid' colorScheme='facebook'>
                            {link.name}
                          </Button>
                        )}
                      </Link>
                    );
                  })}
                </ButtonGroup>
              </Center>
            </CardFooter>
          </Card>
        );
      })}
    </SimpleGrid>
  );
};

export const MemberCards = (props: memberProps) => {
  return (
    <>
      <MemberCard {...props} />
    </>
  );
};
