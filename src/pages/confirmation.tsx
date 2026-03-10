import { Icon } from "../components/icon";
import { Text } from "../components/text";
import CircleCheck from "../assets/icons/CircleCheck.svg?react";
import { Button } from "../components/button";
import { Link } from "react-router";

export function Confirmation() {
  return (
    <section className="p-10 mx-auto bg-gray-500 max-w-lg rounded-2xl space-y-10">
      <div className="flex flex-col items-center gap-6">
        <Text className="font-bold text-2xl text-green-100">
          Solicitação enviada!
        </Text>
        <Icon svg={CircleCheck} />
        <Text className="text-center">
          Agora é apenas aguardar! Sua solicitação será analisada e, em breve, o
          setor financeiro irá entrar em contato com você.
        </Text>
      </div>
      <Button className="w-full">
        <Link to="/new-refund">Nova solicitação</Link>
      </Button>
    </section>
  );
}
