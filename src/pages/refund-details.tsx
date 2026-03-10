import { Text } from "../components/text";
import { InputText } from "../components/input-text";
import { File } from "lucide-react";
import { Button } from "../components/button";
import { useParams } from "react-router";
import {
  ConfirmAlertDialogAction,
  ConfirmAlertDialogCancel,
  ConfirmAlertDialogContent,
  ConfirmAlertDialogDescription,
  ConfirmAlertDialogOverlay,
  ConfirmAlertDialogPortal,
  ConfirmAlertDialogRoot,
  ConfirmAlertDialogTitle,
  ConfirmAlertDialogTrigger,
} from "../components/dialog";

export function RefundDetails() {
  const { id } = useParams();
  return (
    <section className="p-10 mx-auto bg-gray-500 max-w-lg rounded-2xl space-y-10">
      <div className="space-y-3">
        <Text as="h1" variant="heading-large">
          Solicitação de reembolso
        </Text>
        <Text>Dados da despesa para solicitar reembolso.</Text>
      </div>

      <div className="space-y-6">
        <InputText readOnly labelText="Nome da solicitação" />

        <div className="flex items-center gap-4">
          <InputText readOnly labelText="Categoria" className="w-full" />
          <InputText readOnly labelText="Valor" className="max-w-38.5" />
        </div>

        <div className="space-y-4">
          <Button variant="outline" icon={File} className="w-full">
            Abrir comprovante
          </Button>
          <ConfirmFileDeletionDialog />
        </div>
      </div>
    </section>
  );
}

function ConfirmFileDeletionDialog() {
  return (
    <ConfirmAlertDialogRoot>
      <ConfirmAlertDialogTrigger asChild className="w-full">
        <Button className="w-full">Excluir</Button>
      </ConfirmAlertDialogTrigger>

      <ConfirmAlertDialogPortal>
        <ConfirmAlertDialogOverlay />
        <ConfirmAlertDialogContent className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <ConfirmAlertDialogTitle>
              Excluir solicitação
            </ConfirmAlertDialogTitle>
            <ConfirmAlertDialogDescription>
              Tem certeza que deseja excluir essa solicitação? Essa ação é
              irreversível.
            </ConfirmAlertDialogDescription>
          </div>
          <div className="flex gap-4 justify-end">
            <ConfirmAlertDialogCancel>Cancelar</ConfirmAlertDialogCancel>

            <ConfirmAlertDialogAction>Confirmar</ConfirmAlertDialogAction>
          </div>
        </ConfirmAlertDialogContent>
      </ConfirmAlertDialogPortal>
    </ConfirmAlertDialogRoot>
  );
}
