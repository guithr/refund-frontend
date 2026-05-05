import { useReceiptDownload } from "../contexts/receipts/hooks/use.receipt.download";
import { useRefund } from "../contexts/refunds/hooks/use.refund";
import type { ComponentProps } from "react";
import { useNavigate, useParams } from "react-router";
import { File } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { InputText, labelVariants } from "../components/input-text";
import { Skeleton } from "../components/skeleton";
import { Button } from "../components/button";
import { Text } from "../components/text";
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
import type { RefundDelete, RefundShow } from "../types/api";
import { categoryIcons } from "../contexts/refunds/helpers";

type Refund = RefundShow["refund"];

export function RefundDetails() {
  const { id } = useParams();
  const { refund, isLoading, isDeleting, deleteRefund } = useRefund(id);
  const { getReceiptUrl, isLoading: isLoadingReceipt } = useReceiptDownload();

  async function handleOpenReceipt() {
    if (refund?.receipt.id) {
      const url = await getReceiptUrl(refund.receipt.id);
      window.open(`${import.meta.env.VITE_API_URL}${url}`, "_blank");
    }
  }

  return (
    <section className="p-10 mx-auto bg-gray-500 max-w-lg rounded-2xl space-y-10">
      <div className="space-y-3">
        <Text as="h1" variant="heading-large">
          Solicitação de reembolso
        </Text>
        <Text>Dados da despesa para solicitar reembolso.</Text>
      </div>

      <div className="space-y-6">
        {isLoading ? (
          <InputSkeleton labelText="Nome da solicitação" />
        ) : (
          refund && (
            <InputText
              readOnly
              labelText="Nome da solicitação"
              value={refund.title}
            />
          )
        )}

        <div className="flex items-center gap-4">
          {isLoading ? (
            <InputSkeleton
              labelText="Categoria"
              containerProps={{ className: "w-full" }}
            />
          ) : (
            refund && (
              <InputText
                readOnly
                labelText="Categoria"
                className="w-full"
                value={categoryIcons[refund.category].label}
              />
            )
          )}

          {isLoading ? (
            <InputSkeleton
              labelText="Valor"
              containerProps={{ className: "max-w-38.5" }}
            />
          ) : (
            <InputText
              readOnly
              labelText="Valor"
              className="max-w-38.5"
              value={
                refund?.value
                  ? refund.value.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })
                  : ""
              }
            />
          )}
        </div>

        <div className="space-y-4">
          <Button
            variant="outline"
            icon={File}
            className="w-full"
            onClick={handleOpenReceipt}
            disabled={isLoading || isDeleting || isLoadingReceipt}
          >
            {isLoadingReceipt ? "Abrindo comprovante..." : "Abrir comprovante"}
          </Button>
          <ConfirmFileDeletionDialog
            refund={refund}
            deleteRefund={deleteRefund}
            isDeleting={isDeleting}
            isLoading={isLoading}
          />
        </div>
      </div>
    </section>
  );
}

type ConfirmFileDeletionDialogProps = {
  refund: Refund | undefined;
  deleteRefund: (id: string) => Promise<RefundDelete>;
  isDeleting: boolean;
  isLoading: boolean;
};

function ConfirmFileDeletionDialog({
  refund,
  deleteRefund,
  isDeleting,
  isLoading,
}: ConfirmFileDeletionDialogProps) {
  const navigate = useNavigate();

  async function handleDelete() {
    if (refund) {
      await deleteRefund(refund.id);
      navigate("/");
    }
  }

  return (
    <ConfirmAlertDialogRoot>
      <ConfirmAlertDialogTrigger asChild className="w-full">
        <Button className="w-full" disabled={isLoading || isDeleting}>
          {isDeleting ? "Excluindo..." : "Excluir"}
        </Button>
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
            <ConfirmAlertDialogAction onClick={handleDelete}>
              Confirmar
            </ConfirmAlertDialogAction>
          </div>
        </ConfirmAlertDialogContent>
      </ConfirmAlertDialogPortal>
    </ConfirmAlertDialogRoot>
  );
}

type InputSkeletonProps = {
  labelText?: string;
  className?: string;
  containerProps?: ComponentProps<"div">;
};

function InputSkeleton({
  labelText,
  className,
  containerProps,
}: InputSkeletonProps) {
  const { className: containerClassName, ...restContainerProps } =
    containerProps ?? {};

  return (
    <div
      className={twMerge("flex flex-col space-y-2 w-full", containerClassName)}
      {...restContainerProps}
    >
      {labelText && (
        <Text variant="label-base" className={labelVariants()}>
          {labelText}
        </Text>
      )}
      <div className="rounded-lg border h-12 border-gray-300 p-4 flex items-center">
        <Skeleton rounded="sm" className={twMerge("w-20 h-5", className)} />
      </div>
    </div>
  );
}
