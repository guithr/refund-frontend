import { Button } from "../components/button";
import { FileInput } from "../components/file-input";
import { InputText } from "../components/input-text";
import { SelectInput } from "../components/select-input";
import { Text } from "../components/text";
import { zodResolver } from "@hookform/resolvers/zod";
import { categoryOptions } from "../contexts/refunds/helpers";
import { useRefund } from "../contexts/refunds/hooks/use.refund";
import { Controller, useForm } from "react-hook-form";
import {
  refundNewFormSchema,
  type RefundNewFormSchema,
} from "../contexts/refunds/schemas";
import { useReceipt } from "../contexts/receipts/hooks/use.receipt";
import { useNavigate } from "react-router";

export function NewRefund() {
  const { createRefund } = useRefund();
  const { createReceipt } = useReceipt();
  const navigate = useNavigate();

  const form = useForm<RefundNewFormSchema>({
    resolver: zodResolver(refundNewFormSchema),
  });

  const { isSubmitting, errors } = form.formState;

  async function handleSubmit(payload: RefundNewFormSchema) {
    const receiptData = await createReceipt({ receiptFile: payload.receipt });

    await createRefund({
      title: payload.title,
      category: payload.category,
      value: payload.value,
      receipt: receiptData.receipt.id,
    });

    navigate("/confirmation");
  }

  return (
    <section className="p-10 mx-auto bg-gray-500 max-w-lg rounded-2xl space-y-10">
      <div className="space-y-3">
        <Text as="h1" variant="heading-large">
          Nova solicitação de reembolso
        </Text>
        <Text>Dados da despesa para solicitar reembolso.</Text>
      </div>

      <form className="space-y-6" onSubmit={form.handleSubmit(handleSubmit)}>
        <InputText
          labelText="Nome da solicitação"
          disabled={isSubmitting}
          error={errors.title?.message}
          {...form.register("title")}
        />

        <div className="flex items-start gap-4">
          <Controller
            name="category"
            control={form.control}
            render={({ field }) => (
              <SelectInput
                labelText="Categoria"
                options={categoryOptions}
                disabled={isSubmitting}
                error={errors.category?.message}
                value={field.value}
                onValueChange={field.onChange}
              />
            )}
          />

          <InputText
            labelText="Valor"
            type="number"
            step="0.01"
            min="0"
            placeholder="0,00"
            className="max-w-38.5"
            disabled={isSubmitting}
            error={errors.value?.message}
            {...form.register("value", { valueAsNumber: true })}
          />
        </div>

        <Controller
          name="receipt"
          control={form.control}
          render={({ field }) => (
            <FileInput
              labelText="Comprovante"
              disabled={isSubmitting}
              error={errors.receipt?.message}
              onChange={(e) => field.onChange(e.target.files?.[0])}
            />
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </section>
  );
}
