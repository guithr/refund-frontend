import { toast } from "sonner";
import type { RefundReceiptShow } from "../../../types/api";
import { api } from "../../../helpers/api";
import { useState } from "react";

export function useReceiptDownload() {
  const [isLoading, setIsLoading] = useState(false);

  async function getReceiptUrl(receiptId: string) {
    try {
      setIsLoading(true);
      const response = await api.get<RefundReceiptShow>(
        `/receipts/download/${receiptId}`,
      );
      return response.data.url;
    } catch (error) {
      toast.error("Erro ao buscar comprovante do reembolso.");
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  return {
    getReceiptUrl,
    isLoading,
  };
}
