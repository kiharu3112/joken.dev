import { Center, Heading, Text } from '@chakra-ui/react';
import { AchievementsCard } from '../components/achievementsCard';

export const Achievements = () => {
  const achievementsData: {
    achievements: Array<{ name: string; result: Array<string> }>;
  } = {
    achievements: [
      {
        name: '中高生国際Rubyプログラミングコンテスト 2022 in Mitaka',
        result: ['優秀賞', 'スポンサー賞'],
      },
      { name: 'JOI 2021/2022', result: ['本戦出場'] },
      {
        name: '中国地区高専コンピュータフェスティバル 2022',
        result: ['メディアコンテンツ部門 3位', 'アプリケーション部門 3位'],
      },
      {
        name: '令和5年度第30回コンピューターフェスティバル',
        result: ['部長賞'],
      },
    ],
  };
  return (
    <>
      <Center>
        <Heading fontSize='xl'>活動実績のページ</Heading>
      </Center>

      <Center>
        <Text>
          <s>とりあえず</s>2021年度以降の実績を掲載しています.
        </Text>
      </Center>

      <Center>
        <AchievementsCard {...achievementsData} />
      </Center>
    </>
  );
};
