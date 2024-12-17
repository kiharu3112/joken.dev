import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react';

export const JoinAccordion = () => {
  const faq: Array<{ question: string; answer: string }> = [
    {
      question: '自分のPCを持ってくる必要はありますか？',
      answer:
        '見学と入学すぐのときはNo、それ以外はYesです。\n持っていない場合をのぞいて、活動にはPCを持って来てもらっています。\n難しい場合は相談した上で部が保有しているPCを使うこともできます。',
    },
    {
      question: '情報工学科(J科)でなくても入部できますか？',
      answer: 'できます。現在部員はD,E,J科の学生で構成されています',
    },
    {
      question: 'プログラミング未経験でも入部できますか？',
      answer:
        'できます。\n4-8月にかけて毎年プログラミング講習会を実施しています。\nそれ以外にも部員同士で教え合うこともしています。',
    },
    {
      question: '部活の掛け持ちは可能ですか？',
      answer: '可能です。',
    },
    {
      question: '部費はありますか？',
      answer:
        'いいえ。部費を部員から徴収することはしていません。\n大会参加費などは随時発生する可能性があります。',
    },
    {
      question: '2年生以上でも入部できますか？',
      answer: 'はい。1~5年生であれば誰でも入部できます。',
    },
    {
      question: '入部の手続きの仕方を教えてください',
      answer:
        '活動日に活動場所に来て下さい。\n部で利用しているDiscordサーバーに招待します。',
    },
  ];

  return (
    <Accordion width={['100%', '95%', '90%', '85%']}>
      {faq.map((f) => {
        return (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                  {f.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div>
                {f.answer.split('\n').map((t) => {
                  return <div>{t.match(/\n/) ? <br /> : t}</div>;
                })}
              </div>
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
