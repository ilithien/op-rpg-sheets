import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";

import { Attribute } from "./attribute";
import { useTranslation } from "react-i18next";

const CharacterStats = ({
  character: { name, humanity, predatorType, clan, attributes, abilities },
}: any) => {
  const { t } = useTranslation("common");
  return (
    <>
      <Box borderBottom="2px dotted #941414">
        <Box paddingY={2} marginBottom="2">
          <Text textStyle="xl" fontWeight="bold">
            {name}
          </Text>
          <Text textStyle="lg">{t(`clans.${clan}`)}</Text>
          <Text textStyle="md">{predatorType}</Text>
          <Attribute label="Humanidad" value={humanity} max={10} />
        </Box>

        <Image
          className="bg-cover"
          justifySelf="flex-end"
          opacity="4%"          
          src={`./assets/img/clans/${clan}.webp`}
        />
      </Box>

      <HStack justifyContent="center" marginTop={4}>
        <Heading>&#183; Atributos &#183;</Heading>
      </HStack>

      <HStack justifyContent="space-between">
        <Box width="80px">
          <Attribute
            label={attributes.strength.label}
            value={attributes.strength.value}
          />
          <Attribute
            label={attributes.dexerity.label}
            value={attributes.dexerity.value}
          />
          <Attribute
            label={attributes.resistance.label}
            value={attributes.resistance.value}
          />
        </Box>

        <Box width="90px">
          <Attribute
            label={attributes.charisma.label}
            value={attributes.charisma.value}
          />
          <Attribute
            label={attributes.manipulation.label}
            value={attributes.manipulation.value}
          />
          <Attribute
            label={attributes.composture.label}
            value={attributes.composture.value}
          />
        </Box>

        <Box width="80px">
          <Attribute
            label={attributes.intelligence.label}
            value={attributes.intelligence.value}
          />
          <Attribute
            label={attributes.wits.label}
            value={attributes.wits.value}
          />
          <Attribute
            label={attributes.resolution.label}
            value={attributes.resolution.value}
          />
        </Box>
      </HStack>

      <HStack justifyContent="center" marginTop="4">
        <Heading>&#183; Habilidades &#183;</Heading>
      </HStack>

      <HStack justifyContent="space-between" alignItems="flex-start" >
        <Box width="90px">
          <Attribute
            label={abilities.athletics.label}
            value={abilities.athletics.value}
          />
          <Attribute
            label={abilities.brawl.label}
            value={abilities.brawl.value}
          />
          <Attribute
            label={abilities.craft.label}
            value={abilities.craft.value}
          />
          <Attribute
            label={abilities.driving.label}
            value={abilities.driving.value}
          />
          <Attribute
            label={abilities.firearms.label}
            value={abilities.firearms.value}
          />
          <Attribute
            label={abilities.larceny.label}
            value={abilities.larceny.value}
          />
          <Attribute
            label={abilities.melee.label}
            value={abilities.melee.value}
          />
          <Attribute
            label={abilities.stealth.label}
            value={abilities.stealth.value}
          />
          <Attribute
            label={abilities.survival.label}
            value={abilities.survival.value}
          />
        </Box>
        <Box width="100px">
          <Attribute
            label={abilities.animalKin.label}
            value={abilities.animalKin.value}
          />
          <Attribute
            label={abilities.etiquette.label}
            value={abilities.etiquette.value}
          />
          <Attribute
            label={abilities.insight.label}
            value={abilities.insight.value}
          />
          <Attribute
            label={abilities.intimidation.label}
            value={abilities.intimidation.value}
          />
          <Attribute
            label={abilities.leadership.label}
            value={abilities.leadership.value}
          />
          <Attribute
            label={abilities.performance.label}
            value={abilities.performance.value}
          />
          <Attribute
            label={abilities.persuasion.label}
            value={abilities.persuasion.value}
          />
          <Attribute
            label={abilities.streetwise.label}
            value={abilities.streetwise.value}
          />
          <Attribute
            label={abilities.subterfuge.label}
            value={abilities.subterfuge.value}
          />
        </Box>
        <Box width="80px">
          <Attribute
            label={abilities.academics.label}
            value={abilities.academics.value}
          />
          <Attribute
            label={abilities.awareness.label}
            value={abilities.awareness.value}
          />
          <Attribute
            label={abilities.finance.label}
            value={abilities.finance.value}
          />
          <Attribute
            label={abilities.investigation.label}
            value={abilities.investigation.value}
          />
          <Attribute
            label={abilities.medicine.label}
            value={abilities.medicine.value}
          />
          <Attribute
            label={abilities.occult.label}
            value={abilities.occult.value}
          />
          <Attribute
            label={abilities.politics.label}
            value={abilities.politics.value}
          />
          <Attribute
            label={abilities.science.label}
            value={abilities.science.value}
          />
          <Attribute
            label={abilities.technology.label}
            value={abilities.technology.value}
          />
        </Box>
      </HStack>
    </>
  );
};

export { CharacterStats };
