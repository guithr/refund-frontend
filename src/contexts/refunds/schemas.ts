import { z } from "zod";

export const refundNewFormSchema = z.object({
  title: z.string().min(1, { error: "Informe um nome." }).max(255),
  category: z.enum(["food", "hosting", "transport", "services", "other"], {
    error: "Informe uma categoria.",
  }),
  value: z
    .number({ error: "Informe um valor." })
    .positive({ error: "Informe um valor positivo." }),
  receipt: z.instanceof(File, {
    message: "Informe um arquivo de comprovante.",
  }),
});

export type RefundNewFormSchema = z.infer<typeof refundNewFormSchema>;
