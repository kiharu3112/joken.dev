import { Box, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { MemberCards, memberProps } from "../components/memberCard";

const members: memberProps = {
  members: [
    {
      realName: "Tatsuto YAMAMOTO",
      nickName: "laminne",
      position: "部長",
      link: [
        {
          name: "twitter",
          url: "https://twitter.com/laminne33",
        },
        {
          name: "GitHub",
          url: "https://github.com/laminne",
        },
      ],
      imageUrl: "https://github.com/laminne.png",
    },
  ],
};

export const Members = () => {
  return (
    <>
      <Box>
        <Center>
          <VStack>
            <Heading fontSize="xl">部員一覧のページ</Heading>
            <Text>
              弊部のメンバーを紹介します.
              <br />
              ※掲載許可取ってないので1人のみです.悪しからず.
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