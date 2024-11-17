import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { createListCollection, SimpleGrid, Stack } from "@chakra-ui/react";

const systems = createListCollection({
  items: [
    { label: "Vampire: The Masquerade 5e", value: "vtm5" },
    { label: "Dungeons & Dragons 5", value: "dnd5" },
  ],
});

function ConfigApp() {
  return (
    <div>
      <SimpleGrid columns={2}>
        <Stack gap="5">
          <SelectRoot collection={systems}>
            <SelectLabel>Systems</SelectLabel>
            <SelectTrigger>
              <SelectValueText placeholder="Select a system" />
            </SelectTrigger>
            <SelectContent>
              {systems.items.map((system) => (
                <SelectItem item={system} key={system.value}>
                  {system.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
        </Stack>
      </SimpleGrid>
    </div>
  );
}

export default ConfigApp;
