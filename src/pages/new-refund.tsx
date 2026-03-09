import { useState } from "react";
import { Button } from "../components/button";
import { FileInput } from "../components/file-input";
import { InputText } from "../components/input-text";
import { SelectInput } from "../components/select-input";
import { Text } from "../components/text";

export function NewRefund() {
  const OPTIONS = [
    { value: "food", label: "Alimentação" },
    { value: "hosting", label: "Hospedagem" },
    { value: "transport", label: "Transporte" },
    { value: "services", label: "Serviços" },
    { value: "others", label: "Outros" },
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section className="p-10 mx-auto bg-gray-500 max-w-lg rounded-2xl space-y-10">
      <div className="space-y-3">
        <Text as="h1" variant="heading-large">
          Nova solicitação de reembolso
        </Text>
        <Text>Dados da despesa para solicitar reembolso. </Text>
      </div>

      <form className="space-y-6">
        <InputText labelText="Nome da solicitação" disabled={isSubmitting} />

        <div className="flex items-center gap-4">
          <SelectInput
            labelText="Categoria"
            options={OPTIONS}
            disabled={isSubmitting}
          />
          <InputText
            labelText="Valor"
            type="number"
            step="0.01"
            min="0"
            placeholder="0,00"
            className="max-w-38.5"
            disabled={isSubmitting}
          />
        </div>

        <FileInput labelText="Comprovante" disabled={isSubmitting} />

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </section>
  );
}
