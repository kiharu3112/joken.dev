import { Center, Heading } from '@chakra-ui/react';
import {
  RiMedalFill,
  RiTeamFill,
  RiComputerFill,
  RiBrushFill,
  RiDoorFill,
} from 'react-icons/ri';
import { LinkProps, Links } from '../components/nav';
import { TopPageTextContainer } from '../components/topPageTextContainer';

export const TopPage = () => {
  const Link: LinkProps = {
    links: [
      { name: '活動実績', url: '/achievements', icon: RiMedalFill },
      { name: 'メンバー', url: '/members', icon: RiTeamFill },
      { name: '活動内容', url: '/activity', icon: RiComputerFill },
      { name: '制作物', url: '/works', icon: RiBrushFill },
      { name: '入部案内', url: '/join', icon: RiDoorFill },
    ],
  };
  return (
    <>
      <Center>
        <TopPageTextContainer />
      </Center>
      <Center>
        <Heading fontSize='md'>
          松江高専情報科学研究部 公式ページへようこそ.
        </Heading>
      </Center>

      <Center mt='2em'>
        <Links {...Link} />
      </Center>
    </>
  );
};
