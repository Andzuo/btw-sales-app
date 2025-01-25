import { PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { SalesChart } from "@/components/sales-chart";
import {
  DollarSignIcon,
  TrendingUpIcon,
  UsersIcon,
  CalendarIcon,
} from "lucide-react";

export default function Dashboard() {
  return (
    <>
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
      <div className="mt-6">
        <SalesChart />
      </div>
    </>
  );
}
