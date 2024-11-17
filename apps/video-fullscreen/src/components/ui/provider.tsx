"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
  mergeConfigs,
} from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";

const theme = defineConfig({
  theme: {
    recipes: {
      Popover: {
        variants: {
          variant: {
            responsive: {
              minHeight: "400px",
            },
          },
        },
      },
    },
  },
});

// Extends default theme
const config = mergeConfigs(defaultConfig, theme);
const system = createSystem(config);

export function Provider(props: React.PropsWithChildren) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider>{props.children}</ColorModeProvider>
    </ChakraProvider>
  );
}
