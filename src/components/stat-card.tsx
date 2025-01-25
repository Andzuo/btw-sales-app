import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
  trend?: "up" | "down" | "neutral";
  progress?: number; // Progresso em porcentagem (0 a 100)
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  progress,
}: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
        {trend && (
          <div
            className={cn(
              "mt-1 text-xs font-medium",
              trend === "up" && "text-green-500",
              trend === "down" && "text-red-500"
            )}
          >
            {trend === "up" && "↑"}
            {trend === "down" && "↓"}
            {trend === "neutral" && "→"} {trend === "up" ? "+" : ""}
            2.5%
          </div>
        )}
        {typeof progress === "number" && (
          <div className="mt-4">
            <div className="relative h-2 w-full rounded-full bg-secondary">
              <div
                className="absolute top-0 left-0 h-2 rounded-full bg-primary"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-2 text-xs font-medium text-muted-foreground">
              {progress}% da meta alcançada
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
