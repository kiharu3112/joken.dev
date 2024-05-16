import {
  Card,
  CardBody,
  Heading,
  Badge,
  HStack,
  Text,
  CardHeader,
} from '@chakra-ui/react';

export type activityCardProps = {
  title: string;
  body: string;
  tag: Array<string>;
};

const ActivityCard = (props: activityCardProps) => {
  return (
    <Card align='center' w='40%' minW='20em'>
      <CardHeader>
        <Heading size='md'>{props.title}</Heading>
      </CardHeader>
      <CardBody w='100%'>
        <Text fontSize='xl'>
          {props.body.split('\n').map((t) => {
            return <div>{t.match(/\n/) ? <br /> : t}</div>;
          })}
        </Text>

        <div>
          <HStack mt='1em'>
            {props.tag.map((t) => {
              return (
                <Badge fontSize='md' colorScheme='green'>
                  {t}
                </Badge>
              );
            })}
          </HStack>
        </div>
      </CardBody>
    </Card>
  );
};

export const ActivityCards = (props: activityCardProps) => {
  return <ActivityCard {...props} />;
};
