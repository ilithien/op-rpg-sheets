import { Box, HStack, Text } from "@chakra-ui/react";

interface AttributeProps {
  value: number;
  label?: string;
  max?: number;
}

export const Attribute = ({ value, label, max = 5 }: AttributeProps) =>
  value > 0 && (
    <Box>
      {label && <Text fontSize="12px">{label}</Text>}
      <HStack gap="0.5">
        {new Array(value).fill("").map(() => (
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#941414",
              borderRadius: "50%",
              border: "1px solid #941414",
            }}
          ></div>
        ))}
        {new Array(max - value).fill("").map(() => (
          <div
            style={{
              width: "10px",
              height: "10px",

              borderRadius: "50%",
              border: "1px solid black",
            }}
          ></div>
        ))}
      </HStack>
    </Box>
  );
