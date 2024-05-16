import { Box, Center, Heading, Text, VStack } from '@chakra-ui/react';
import { ProductionProps, ProductionCards } from '../components/production';
const works: ProductionProps = {
  productions: [
    {
      name: 'JKOJS',
      description:
        'オンラインジャッジと呼ばれる、競技プログラミングの大会を開催するのに必要なシステムの実装です。TypeScriptとGoで書かれています。',
      type: 'アプリケーション',
      link: [
        {
          name: 'GitHub',
          url: 'https://github.com/mct-joken/kojs5-backend',
        },
      ],
      imageUrl:
        'https://raw.githubusercontent.com/poporonnet/kojs6-backend/v1/docs/img/jk-ojs.jpg',
    },
    {
      name: 'pnket',
      description:
        'ただ別のチームのプロジェクトにするつもりだったプロジェクトの最初の部分を作っただけです。パッケージマネージャに特化した仕様になっています。',
      type: 'アプリケーション',
      link: [
        {
          name: 'GitHub',
          url: 'https://github.com/Ablaze-MIRAI/pnket',
        },
      ],
      imageUrl: '',
    },
    {
      name: '#B43A6EEA',
      description:
        '量産型Future Bassです。LFOをうまく使ってSuper Sawを動かしたりしました。',
      type: 'メディア',
      link: [
        {
          name: 'YouTube',
          url: 'https://www.youtube.com/watch?v=fvJEkvtvan4',
        },
      ],
      imageUrl:
        'https://i.ytimg.com/vi/fvJEkvtvan4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgAASKEIzS6ilxK76pLVHiV5cIoQ',
    },
    {
      name: 'Reincarnated Victim',
      description:
        'Go言語のebitengineを使用して作った弾幕シューティングゲームです。敵を避けつつ、風船を20個撃ち落としたらクリアです。\n' +
        '敵は種類によって異なる動きをしています。それに当たって5つのハートが全て無くなったら負けです。',
      type: 'ゲーム',
      imageUrl:
        'https://cdn.discordapp.com/attachments/964378851163656232/1090604527868190720/IMG_4830.png',
    },
    {
      name: 'box run',
      description:
        'カードゲームを作っていたはずが気づいたらアクションゲームになっていた。そのうちきちんと完成させます。使用言語はRuby',
      type: 'ゲーム',
      imageUrl:
        'https://cdn.discordapp.com/attachments/964378851163656232/1090244187586314301/49.png',
    },
    {
      name: 'マ。feat.可不',
      description: 'CeVIO AIの可不に歌ってもらった楽曲です。',
      type: 'メディア',
      imageUrl:
        'https://media.discordapp.net/attachments/964378851163656232/1091663145325580358/bandicam_2023-01-11_23-03-43-242.jpg',
    },
  ],
};
export const Works = () => {
  return (
    <>
      <Box>
        <Center>
          <VStack>
            <Heading fontSize='xl'>作品一覧のページ</Heading>
            <Text>部員が作った作品を紹介します.</Text>
          </VStack>
        </Center>
      </Box>
      <Center>
        <Box>
          <ProductionCards {...works} />
        </Box>
      </Center>
    </>
  );
};
