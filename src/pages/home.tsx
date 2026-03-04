import { ButtonIcon } from "../components/button-icon";
import { Text } from "../components/text";
import Search from "../assets/icons/MagnifyingGlass.svg?react";
import { RefundList } from "../context/refunds/components/refund-list";
import { RefundSearch } from "../context/refunds/refund-search";

export function Home() {
  return (
    <section className="flex flex-col p-10 max-w-270.5 mx-auto bg-gray-500 rounded-2xl space-y-6">
      <Text variant="heading-large">Solicitações</Text>
      <form className="flex items-center gap-3">
        <RefundSearch />
        <ButtonIcon icon={Search} />
      </form>

      <div className="w-full h-px bg-gray-400" />

      <RefundList />
    </section>
  );
}
