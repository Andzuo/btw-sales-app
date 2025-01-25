import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import Flex from "@/components/ui/flex";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { products } from "@/constants/products";
import { SaleFormValues } from "@/schemas/sales.schema";
import React from "react";
import { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<SaleFormValues>;
  onSubmit: (data: SaleFormValues) => void;
}

const SalesForm = ({ form, onSubmit }: Props) => {
  console.log("SalesForm -> form", form.formState.errors);
  console.log("SalesForm -> form", form.getValues());
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="product"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Produto</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(value) => {
                    field.onChange(value);
                    const selectedProduct = products.find(
                      (product) => product.name === value
                    );
                    if (selectedProduct) {
                      form.setValue("price", selectedProduct.value);
                      const today = new Date().toISOString();
                      form.setValue("salesDate", today);
                    }
                  }}
                >
                  <SelectTrigger className="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring focus:ring-blue-500">
                    {field.value || "Selecione um produto"}
                  </SelectTrigger>
                  <SelectContent>
                    {products.map((product) => (
                      <SelectItem key={product.id} value={product.name}>
                        {product.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Flex className="flex-1 w-full gap-6">
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">Quantidade</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    placeholder="Quantidade"
                    onChange={(e) =>
                      field.onChange(
                        e.target.value ? Number(e.target.value) : ""
                      )
                    }
                    className="bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">Preço</FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-gray-500">R$</span>
                    <Input
                      type="text"
                      value={new Intl.NumberFormat("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }).format(field.value || 0)}
                      placeholder="Preço"
                      onChange={(e) => {
                        const rawValue = e.target.value
                          .replace(/\./g, "")
                          .replace(/,/g, ".");
                        const numericValue = parseFloat(rawValue);
                        field.onChange(isNaN(numericValue) ? 0 : numericValue);
                      }}
                      onBlur={() => {
                        field.onChange(field.value);
                      }}
                      className="w-full pl-8 pr-2 py-2 border rounded bg-white focus:outline-none focus:ring focus:ring-blue-500"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="salesDate"
            render={({ field }) => (
              <FormItem className=" flex flex-col mt-3">
                <FormLabel className="font-semibold">Data da venda</FormLabel>
                <FormControl>
                  <DatePicker
                    value={field.value ? new Date(field.value) : undefined}
                    onChange={(date) => field.onChange(date?.toISOString())}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tickedDate"
            render={({ field }) => (
              <FormItem className=" flex flex-col mt-3">
                <FormLabel className="font-semibold">
                  Data do passaporte
                </FormLabel>
                <FormControl>
                  <DatePicker
                    value={field.value ? new Date(field.value) : undefined}
                    onChange={(date) => field.onChange(date?.toISOString())}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Flex>

        <Button type="submit">Adicionar Venda</Button>
      </form>
    </Form>
  );
};

export default SalesForm;
