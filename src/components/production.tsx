import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Link,
  Badge,
} from '@chakra-ui/react';

type Production = {
  name: string;
  type: string;
  description: string;
  link?: { name: string; url: string }[];
  imageUrl: string;
};

export type ProductionProps = {
  productions: Production[];
};

const ProductionCard = ({ productions }: ProductionProps) => {
  return (
    <>
      {productions.map((p) => (
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          mt='1em'
          w='100%'
          maxW='60em'
          key={p.name}
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '300px' }}
            src={p.imageUrl}
          />
          <Stack>
            <CardBody>
              <Heading size='md'>{p.name}</Heading>
              <Text py='2'>{p.description}</Text>
              <Badge
                colorScheme={
                  p.type === 'ゲーム'
                    ? 'twitter'
                    : p.type === 'アプリケーション'
                    ? 'orange'
                    : p.type === 'メディア'
                    ? 'pink'
                    : 'green'
                }
              >
                {p.type}
              </Badge>
            </CardBody>

            <CardFooter>
              <HStack spacing={3} direction='row'>
                {p.link?.map((link) => (
                  <Link href={link.url} key={link.url}>
                    <Button
                      colorScheme={
                        link.name === 'GitHub'
                          ? 'facebook'
                          : link.name === 'YouTube'
                          ? 'red'
                          : 'twitter'
                      }
                    >
                      {link.name}
                    </Button>
                  </Link>
                ))}
              </HStack>
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </>
  );
};

export const ProductionCards = (props: ProductionProps) => {
  return <ProductionCard {...props} />;
};
