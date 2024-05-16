import {
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  Text,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon, Icon } from '@chakra-ui/icons';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { IconType } from 'react-icons';

export type LinkProps = {
  links: Array<{
    name: string;
    url: string;
    icon: IconType;
  }>;
  onClick?: () => void;
};

export const Links = ({ links, onClick }: LinkProps) => {
  return (
    <VStack>
      {links.map((l: any) => {
        return (
          <Link to={l.url} onClick={onClick}>
            <Button w='15em' leftIcon={<Icon as={l.icon} />}>
              {l.name}
            </Button>
          </Link>
        );
      })}
    </VStack>
  );
};

export const Navigation = (props: LinkProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme='yellow'
        onClick={onOpen}
        zIndex='300'
        position='fixed'
        top='90%'
        bottom={0}
        marginLeft='1.5em'
        leftIcon={<HamburgerIcon />}
      >
        メニュー
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text fontSize='md'>松江高専情報科学研究部</Text>
          </DrawerHeader>

          <DrawerBody>
            <Links {...props} onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
