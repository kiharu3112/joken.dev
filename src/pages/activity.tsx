import {
  Box,
  Center,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { activityCardProps, ActivityCards } from '../components/activityCard';

const cards: Array<activityCardProps> = [
  {
    title: 'アプリケーション系',
    body: 'Webサイト、アプリケーション、ツールなどを開発します。',
    tag: ['Web', 'Golang', 'CLI'],
  },
  {
    title: 'システム管理系',
    body: '部が保有しているPC、サーバーの保守管理を行います。',
    tag: ['Linux', 'ネットワーク'],
  },
  {
    title: 'メディア系',
    body: 'デジタルイラスト、DTM、モデリングなどの作品製作をします。',
    tag: ['デジタル絵', 'DTM', 'モデリング'],
  },
];

export const Activity = () => {
  return (
    <>
      <Box>
        <Center>
          <VStack>
            <Heading fontSize='xl'>活動のページ</Heading>
            <Text>弊部では、以下のような活動を行っています</Text>
          </VStack>
        </Center>
      </Box>

      <Box w={'100%'} mt='1em'>
        <VStack>
          {cards.map((c) => {
            return <ActivityCards {...c} />;
          })}
        </VStack>
      </Box>

      <Box>
        <Center>
          <VStack>
            <Heading mt='1em' fontSize='xl'>
              活動日/時間/場所
            </Heading>
            <Text>
              毎週火、水、木曜日の16:30～18:30まで、5棟3階DB実験室で活動しています。
            </Text>
          </VStack>
        </Center>
      </Box>

      <Center>
        <Heading mt='1em' fontSize='xl'>
          設備
        </Heading>
      </Center>

      <Box>
        <Center>
          <UnorderedList mt='1em'>
            <ListItem>デスクトップPC 2台</ListItem>
            <ListItem>→Windows(AMD FX, GeForce)</ListItem>
            <ListItem>→Linux(Pop! OS)(Ryzen, Radeon)</ListItem>
            <ListItem>ペンタブレット 1枚</ListItem>
            <ListItem>蔵書 多数</ListItem>
          </UnorderedList>
        </Center>
      </Box>

      <Box mb='3em'></Box>
    </>
  );
};
