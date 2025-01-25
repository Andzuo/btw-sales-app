"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SaleFormValues, saleSchema } from "@/schemas/sales.schema";
import SalesForm from "./_components/salesForm";
import SalesTable from "./_components/salesTable";
import { Button } from "@/components/ui/button";

export default function NovasVendas() {
  const [sales, setSales] = useState<SaleFormValues[]>([]);
  const form = useForm<SaleFormValues>({
    resolver: zodResolver(saleSchema),
    defaultValues: {
      product: "",
      quantity: 1,
      price: 0,
    },
  });

  const onSubmit = (data: SaleFormValues) => {
    setSales([...sales, data]);
    form.reset();
  };

  const handleSendToDatabase = () => {
    console.log("Enviando vendas para o banco de dados:", sales);
  };
  const handleDeleteSale = (index: number) => {
    setSales(sales.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <SalesForm form={form} onSubmit={onSubmit} />
      <SalesTable onDelete={handleDeleteSale} sales={sales} />
      <div className="flex justify-start">
        <Button className="p-4" onClick={handleSendToDatabase}>
          Enviar Vendas
        </Button>
      </div>
    </div>
  );
}
