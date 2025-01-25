import { z } from "zod";

export const saleSchema = z.object({
  product: z.string().nonempty("Selecione um produto"),
  quantity: z
    .number()
    .min(1, "A quantidade deve ser pelo menos 1")
    .refine((value) => !isNaN(value), "Quantidade deve ser um número"),
  price: z
    .number()
    .min(0, "O preço deve ser maior ou igual a 0")
    .refine((value) => !isNaN(value), "Preço deve ser um número"),
  salesDate: z.string().nonempty("Selecione uma data"),
  tickedDate: z.string().nonempty("Selecione uma data"),
});

export type SaleFormValues = z.infer<typeof saleSchema>;
