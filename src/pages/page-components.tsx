import { Button } from "../components/button";
import { Text } from "../components/text";
import { ButtonIcon } from "../components/button-icon";
import MagnifyingGlass from "../assets/icons/MagnifyingGlass.svg?react";
import { InputText } from "../components/input-text";
import { NavLink } from "../components/nav-link";
import { SelectInput } from "../components/select-input";
export function PageComponents() {
  const OPTIONS = [
    { value: "food", label: "Alimentação" },
    { value: "hosting", label: "Hospedagem" },
    { value: "transport", label: "Transporte" },
    { value: "services", label: "Serviços" },
    { value: "others", label: "Outros" },
  ];

  return (
    <div className="p-2 space-y-4">
      <Text className="mb-4" as="h1" variant="heading-large">
        Hello World!
      </Text>

      <div className="flex gap-4">
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
      </div>
      <div className="flex gap-4">
        <ButtonIcon icon={MagnifyingGlass}>Default</ButtonIcon>
        <ButtonIcon icon={MagnifyingGlass} disabled>
          Disabled
        </ButtonIcon>
      </div>

      <div className="flex gap-4">
        <InputText placeholder="Placeholder" label="título" />
        <InputText disabled placeholder="Disabled" label="Label" />
      </div>

      <div className="flex gap-4">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>

      <div className="flex gap-4">
        <SelectInput labelText="Categoria" name="category" options={OPTIONS} />
      </div>
    </div>
  );
}
