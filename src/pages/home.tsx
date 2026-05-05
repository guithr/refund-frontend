import { Text } from "../components/text";
import { RefundList } from "../contexts/refunds/components/refund-list";
import { RefundSearch } from "../contexts/refunds/components/refund-search";

export function Home() {
  return (
    <section className="flex flex-col p-10 max-w-270.5 mx-auto bg-gray-500 rounded-2xl space-y-6">
      <Text variant="heading-large">Solicitações</Text>
      <RefundSearch />

      <div className="w-full h-px bg-gray-400" />

      <RefundList />
    </section>
  );
}
