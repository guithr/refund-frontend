import { ButtonIcon } from "../components/button-icon";
import { InputText } from "../components/input-text";
import { Text } from "../components/text";
import Search from "../assets/icons/MagnifyingGlass.svg?react";
import ForkKnife from "../assets/icons/ForkKnife.svg?react";
import { Icon } from "../components/icon";

export function Home() {
  return (
    <section className="flex flex-col p-10 max-w-270.5 mx-auto bg-gray-500 rounded-2xl space-y-6">
      <Text variant="heading-large">Solicitações</Text>
      <form className="flex items-center gap-3">
        <InputText placeholder="Pesquisar pelo nome" className="flex-1" />
        <ButtonIcon icon={Search} />
      </form>

      <hr />
      <div className="flex justify-between">
        <div className="flex gap-3">
          <Icon svg={ForkKnife} className="fill-green-100" />
          <div className="flex flex-col">
            <Text>Rodrigo</Text>
            <Text>Alimentação</Text>
          </div>
        </div>
        <Text>
          <span className="text-gray-200">R$</span> 34,78
        </Text>
      </div>
    </section>
  );
}
