import { Box, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface CharacterBiographyProps {
  biography: string;
}

const CharacterBiography = ({ biography }: CharacterBiographyProps) => {
  const { t } = useTranslation("common");

  return (
    <Box>
      <Text fontWeight="bold" textAlign="center" marginY="4">
        <Heading>&#183; {t(`tabs.biography.title`)} &#183;</Heading>
      </Text>
      <Text textJustify="inter-word" textAlign="justify">
        <div dangerouslySetInnerHTML={{ __html: biography }} />
      </Text>
    </Box>
  );
};

export { CharacterBiography };
