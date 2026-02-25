import { Button } from "./components/button";
import { Text } from "./components/text";
import { ButtonIcon } from "./components/button-icon";
import PoliceCar from "./assets/icons/PoliceCar.svg?react";
import MagnifyingGlass from "./assets/icons/MagnifyingGlass.svg?react";

export function App() {
  return (
    <div className="p-2 space-y-4">
      <Text className="mb-4" as="h1" variant="heading-large">
        Hello World!
      </Text>

      <div className="flex gap-4">
        <Button>Default</Button>
        <Button variant="link" icon={PoliceCar}>
          Teste
        </Button>
        <Button disabled>Disabled</Button>
      </div>
      <div className="flex gap-4">
        <ButtonIcon icon={MagnifyingGlass}>Default</ButtonIcon>
        <ButtonIcon icon={MagnifyingGlass}>Teste</ButtonIcon>
        <ButtonIcon icon={MagnifyingGlass} disabled>
          Disabled
        </ButtonIcon>
      </div>
    </div>
  );
}
