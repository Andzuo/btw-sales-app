import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  const router = useRouter();

  const handleNewSale = () => {
    router.push("/new-sales");
  };
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      </div>
      <Button onClick={handleNewSale}>
        <PlusIcon className="mr-2 h-4 w-4" /> Nova Venda
      </Button>
    </div>
  );
}
