"use client";
import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { SalesChart } from "@/components/charts/sales-chart";
import {
  DollarSignIcon,
  TrendingUpIcon,
  UsersIcon,
  CalendarIcon,
} from "lucide-react";
import SalesAdditional from "@/components/charts/sales-addtionals";

export default function Dashboard() {
  const data = [
    { name: "Jan", sales: 4000, meta: 2400 },
    { name: "Fev", sales: 3000, meta: 2400 },
    { name: "Mar", sales: 2000, meta: 2400 },
    { name: "Abr", sales: 2780, meta: 2400 },
    { name: "Mai", sales: 1890, meta: 2400 },
    { name: "Jun", sales: 2390, meta: 2400 },
  ];
  const produtosData = [
    { name: "Produto A", value: 4000 },
    { name: "Produto B", value: 3000 },
    { name: "Produto C", value: 2000 },
    { name: "Produto D", value: 2780 },
    { name: "Produto E", value: 1890 },
  ];
  return (
    <div className="h-full justify-between">
      <PageHeader
        title="Dashboard"
        description="Visão geral das suas vendas e metas"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Vendas Totais"
          value="R$ 45.231"
          description="Total do mês atual"
          icon={DollarSignIcon}
          trend="up"
        />
        <StatCard
          title="Meta Mensal"
          value="R$ 50.000"
          description="90,46% alcançado"
          icon={TrendingUpIcon}
          trend="neutral"
        />
        <StatCard
          title="Clientes Novos"
          value="12"
          description="Novos clientes este mês"
          icon={UsersIcon}
          trend="up"
        />
        <StatCard
          title="Meta Diária"
          value="R$ 1.667"
          description="Para hoje"
          icon={CalendarIcon}
          trend="neutral"
        />
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <SalesChart data={data} />
        <SalesAdditional data={produtosData} />
      </div>
    </div>
  );
}
