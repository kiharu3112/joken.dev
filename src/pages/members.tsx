import { Box, Center, Heading, Text, VStack } from '@chakra-ui/react';
import { MemberCards, memberProps } from '../components/memberCard';

const members: memberProps = {
  members: [
    {
      realName: 'Tatsuto YAMAMOTO',
      nickName: 'laminne',
      position: '元部長',
      link: [
        {
          name: 'twitter',
          url: 'https://twitter.com/laminne33',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/laminne',
        },
      ],
      imageUrl: 'https://github.com/laminne.png',
    },
    {
      realName: 'kijiharu3112',
      nickName: 'kijiharu',
      position: '家畜',
      link: [
        {
          name: 'GitHub',
          url: 'https://github.com/kiji-haru',
        },
      ],
      imageUrl: 'https://avatars.githubusercontent.com/u/74781355?v=4',
    },
    {
      realName: 'Piano Nakanoin',
      nickName: 'Piano Nakanoin',
      position: 'Rust Lab',
      link: [
        {
          name: 'twitter',
          url: 'https://twitter.com/PianoCat1010',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/NSK-1010',
        },
        {
          name: 'YouTube',
          url: 'https://www.youtube.com/@nsk-1010',
        },
      ],
      imageUrl:
        'https://s.gravatar.com/avatar/465eab7f49d6f95d4132d2c774579d74?s=512',
    },
    {
      realName: 'hamaann',
      nickName: 'hamaann',
      position: '創作に生きる亀',
      link: [
        {
          name: 'twitter',
          url: 'https://twitter.com/LljKDJzur8Be327',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/hamaann',
        },
      ],
      imageUrl: 'https://avatars.githubusercontent.com/u/108327885?v=4',
    },
    {
      realName: 'Canon424',
      nickName: 'Canon',
      position: '蝨ｨ邀榊ｹｴ謨ｰ繝医ャ繝�',
      link: [
        {
          name: 'twitter',
          url: 'https://twitter.com/@c4n4242',
        },
        {
          name: 'Misskey',
          url: 'https://misskey.systems/@c4n4242',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/C4NoN424',
        },
      ],
      imageUrl:
        'https://sjc1.vultrobjects.com/misskey-system/files/411ac7e8-84ee-4345-9e31-b166c9cc2c79.jpg',
    },
  ],
};

export const Members = () => {
  return (
    <>
      <Box>
        <Center>
          <VStack>
            <Heading fontSize='xl'>部員一覧のページ</Heading>
            <Text>
              弊部のメンバーを紹介します.
              <br />
            </Text>
          </VStack>
        </Center>
      </Box>
      <Center>
        <Box>
          <MemberCards {...members} />
        </Box>
      </Center>
    </>
  );
};
