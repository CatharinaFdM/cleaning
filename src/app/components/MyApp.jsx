import { Flex, Text, Button } from "@radix-ui/themes";
import { BookmarkIcon } from "@radix-ui/react-icons";

export default function MyApp() {
  return (
    <Flex direction="column" gap="2">
      <Text>Radix komponent eksempel</Text>
      <Button variant="soft">
        <BookmarkIcon /> Bookmark
      </Button>
    </Flex>
  );
}
