import { ListItem, UnorderedList } from '@chakra-ui/react';

export const AchievementsCard = ({
  achievements,
}: {
  achievements: Array<{ name: string; result: Array<string> }>;
}) => {
  console.log(achievements);
  return (
    <UnorderedList>
      {achievements.map((a) => {
        return (
          <>
            <ListItem>{a.name}</ListItem>
            {a.result.map((r) => {
              return <ListItem>→{r}</ListItem>;
            })}
          </>
        );
      })}
    </UnorderedList>
  );
};
