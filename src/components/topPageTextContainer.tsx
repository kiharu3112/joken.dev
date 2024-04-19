import { Heading, Text, Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
export const TopPageTextContainer = () => {
  return (
    <Box
      h='30em'
      width={['100%', '95%', '90%', '85%']}
      // backgroundColor={"teal.100"}
    >
      <TopPageCopy />
    </Box>
  );
};

const TopPageCopy = () => {
  const [text, setText] = useState<string>('');
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const targetTexts: string[] = [
    'Technology.',
    'Innovation.',
    'Teammates.',
    'Death march',
    'Grueling development.',
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

  useEffect(() => {
    let currentText = '';
    let isAdding = true;
    let isWaiting = false;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const typewriter = () => {
      if (isWaiting) return;

      const targetText = targetTexts[currentTextIndex];

      if (isAdding) {
        if (currentText.length < targetText.length) {
          currentText += targetText[currentText.length];
        } else {
          isAdding = false;
          isWaiting = true;
          timeoutId = setTimeout(() => {
            isWaiting = false;
          }, 2000);
        }
      } else {
        if (currentText.length > 0) {
          currentText = currentText.slice(0, -1);
        } else {
          isAdding = true;
          setCurrentTextIndex((currentTextIndex + 1) % targetTexts.length);
        }
      }

      setText(currentText);
    };

    const intervalId = setInterval(typewriter, 100);
    const cursorIntervalId = setInterval(
      () => setShowCursor((prev) => !prev),
      500
    );

    return () => {
      clearInterval(intervalId);
      clearInterval(cursorIntervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentTextIndex]);
  return (
    <>
      <Heading fontSize='4xl' mt={'5.5em'}>
        Building the Future with{' '}
        <Text
          as='span'
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          className='text'
        >
          {text}
          <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
        </Text>
      </Heading>
      <Text as='span'>テクノロジーで未来を創る</Text>
    </>
  );
};
