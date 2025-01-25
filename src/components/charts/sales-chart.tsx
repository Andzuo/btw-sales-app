"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
type Data = {
  name: string;
  sales: number;
  meta: number;
};

interface Props {
  data: Data[];
}

export function SalesChart({ data }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vendas vs Meta</CardTitle>
        <CardDescription>Comparativo mensal de vendas e metas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsLineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="meta"
                stroke="hsl(var(--muted-foreground))"
                strokeDasharray="5 5"
              />
            </RechartsLineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
