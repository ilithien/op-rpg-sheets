import { VStack, Image, Tabs, Box, Spinner } from "@chakra-ui/react";
import { MdAttribution } from "react-icons/md";
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { CharacterStats } from "./components/character-stats/character-stats";
import { DisciplinesStats } from "./components/character-stats/discipline-stats";
import { Actor } from "./models/character";
import "./App.css";
import { CharacterBiography } from "./components/character-stats/biography";

const menuOptions = [
  { icon: <MdAttribution />, title: "stats" },
  { icon: <MdAttribution />, title: "disciplines" },
];

function App() {
  const [characters, setCharacters] = useState<Actor[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Actor>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchCharacters() {
      const response = await fetch("./assets/data/characters.json");
      try {
        setCharacters(await response.json());
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCharacters();
  }, []);

  useEffect(() => {
    setSelectedCharacter(characters[0]);
  }, [characters]);

  return (
    <Box position="absolute" top="25%">
      <Box padding={2} position="relative">
        <PopoverRoot positioning={{ placement: "right" }} size="lg">
          <PopoverTrigger asChild cursor="pointer">
            <Image
              boxShadow="0 0 8px 2px #ffd36b"
              border="1px solid #941414"
              width="50px"
              src={"./assets/img/logo.png"}
              borderRadius="50%"
            />
          </PopoverTrigger>
          <PopoverContent width="460px" backgroundColor="#faf5ed">
            {loading || !selectedCharacter ? (
              <Spinner />
            ) : (
              <>
                <PopoverArrow />
                <PopoverBody
                  minHeight="400px"
                  border="1px #941414"
                  boxShadow="xl"
                >
                  <VStack width="70px" position="absolute" right="-20">
                    {characters.map((character) => (
                      <Image
                        className="character-portrait-img"
                        filter={
                          selectedCharacter.id !== character.id
                            ? "grayscale(100%)"
                            : undefined
                        }
                        opacity={
                          selectedCharacter.id !== character.id
                            ? "60%"
                            : undefined
                        }
                        src={`./assets/img/chars/${character.id}.png`}
                        borderRadius="full"
                        title={character.name}
                        cursor="pointer"
                        onClick={() => setSelectedCharacter(character)}
                      />
                    ))}
                  </VStack>

                  <Tabs.Root
                    variant="plain"
                    defaultValue={menuOptions[0].title}
                  >
                    <Tabs.List z-index="99">
                      <Tabs.Trigger value="stats" asChild cursor="pointer">
                        <Box fontSize="36px" padding="2">
                          <Image src="./assets/img/user.png" width="24px" />
                        </Box>
                      </Tabs.Trigger>
                      <Tabs.Trigger value="disciplines" asChild>
                        <Box fontSize="36px" padding="2">
                          <Image src="./assets/img/potion.png" width="24px" />
                        </Box>
                      </Tabs.Trigger>
                      <Tabs.Trigger value="bio" asChild>
                        <Box fontSize="36px" padding="2">
                          <Image src="./assets/img/scroll.png" width="24px" />
                        </Box>
                      </Tabs.Trigger>

                      <Tabs.Indicator />
                    </Tabs.List>

                    <Tabs.Content value="stats">
                      {selectedCharacter && (
                        <CharacterStats character={selectedCharacter} />
                      )}
                    </Tabs.Content>
                    <Tabs.Content value="disciplines">
                      <DisciplinesStats
                        disciplines={selectedCharacter.disciplines}
                      />
                    </Tabs.Content>
                    <Tabs.Content value="bio">
                      <CharacterBiography
                        biography={selectedCharacter.biography}
                      />
                    </Tabs.Content>
                  </Tabs.Root>
                </PopoverBody>
              </>
            )}
          </PopoverContent>
        </PopoverRoot>
      </Box>
    </Box>
  );
}

export default App;
