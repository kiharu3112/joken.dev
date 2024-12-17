import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { TopPage } from './pages/top';
import { Header } from './components/header';
import { Navigation } from './components/nav';
import { Activity } from './pages/activity';
import { Achievements } from './pages/achievements';
import { Join } from './pages/join';
import { Members } from './pages/members';
import { Works } from './pages/works';
import { NotFound } from './pages/notfound';
import { Box, Center } from '@chakra-ui/react';
import { LinkProps } from './components/nav';
import {
  RiBrushFill,
  RiComputerFill,
  RiDoorFill,
  RiHomeFill,
  RiMedalFill,
  RiTeamFill,
} from 'react-icons/ri';

// メニューのリンク
const Links: LinkProps = {
  links: [
    { name: 'ホーム', url: '/', icon: RiHomeFill },
    { name: '活動実績', url: '/achievements', icon: RiMedalFill },
    { name: 'メンバー', url: '/members', icon: RiTeamFill },
    { name: '活動内容', url: '/activity', icon: RiComputerFill },
    { name: '制作物', url: '/works', icon: RiBrushFill },
    { name: '入部案内', url: '/join', icon: RiDoorFill },
  ],
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Navigation {...Links} />
        <Center>
          <Box width={['100%', '95%', '90%', '85%']}>
            <Routes>
              <Route path='/' element={<TopPage />} />
              <Route path='/activity' element={<Activity />} />
              <Route path='/achievements' element={<Achievements />} />
              <Route path='/join' element={<Join />} />
              <Route path='/members' element={<Members />} />
              <Route path='works' element={<Works />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Box>
        </Center>
      </BrowserRouter>
    </div>
  );
};

export default App;
