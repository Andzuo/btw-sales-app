"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AreaChart } from "@tremor/react";

const chartdata = [
  { date: "Jan 22", Sales: 2890 },
  { date: "Feb 22", Sales: 2756 },
  { date: "Mar 22", Sales: 3322 },
  { date: "Apr 22", Sales: 3470 },
  { date: "May 22", Sales: 3475 },
  { date: "Jun 22", Sales: 3129 },
];

export function SalesChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Vendas Mensais</CardTitle>
        <CardDescription>
          Visão geral das vendas nos últimos 6 meses
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <AreaChart
          className="h-72 mt-4"
          data={chartdata}
          index="date"
          categories={["Sales"]}
          colors={["blue"]}
          yAxisWidth={30}
        />
      </CardContent>
    </Card>
  );
}
