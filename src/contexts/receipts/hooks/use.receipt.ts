import type { ReceiptCreate } from "../../../types/api";
import type { ReceiptNewFormSchema } from "../schema";
import { api } from "../../../helpers/api";
import { toast } from "sonner";

export function useReceipt() {
  async function createReceipt(payload: ReceiptNewFormSchema) {
    try {
      const formData = new FormData();
      formData.append("receiptFile", payload.receiptFile);

      const receipt = await api.post<ReceiptCreate>("receipts", formData);

      return receipt.data;
    } catch (error) {
      toast.error("Erro ao cadastrar comprovante.");
      throw error;
    }
  }

  return {
    createReceipt,
  };
}
