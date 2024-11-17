import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Attribute } from "./attribute";
import { Discipline } from "@/models/character";

interface DisciplinesStatsProps {
  disciplines: Record<string, Discipline>;
}

const DisciplinesStats = ({ disciplines }: DisciplinesStatsProps) => {
  const { t } = useTranslation("disciplines");

  return (
    <div>
      <HStack justifyContent="center" marginTop={4}>
        <Heading>&#183; Disciplinas &#183;</Heading>
      </HStack>

      {Object.keys(disciplines).map((d) => (
        <Box key={d} marginBottom={2}>
          <HStack
            borderBottom="1px dotted"
            alignItems="center"
            justifyContent="space-between"
            paddingTop={2}
          >
            <Text fontSize="md" fontWeight="semibold" color="#941414">
              {t(`vtm.disciplines.${d}.name`)}
            </Text>
            <Attribute
              value={Math.max(...disciplines[d].powers.map((p) => p.level))}
            />
          </HStack>
          {disciplines[d]?.powers.map(({ name }) => (
            <Text textStyle="sm" key={name}>
              {t(`vtm.disciplines.${d}.powers.${name}`)}
            </Text>
          ))}
        </Box>
      ))}
    </div>
  );
};

export { DisciplinesStats };
