import { CircleDollarSign, Coins, Package } from "lucide-react";
import { Badge } from "./ui/badge";

interface DashboardCardProps {
  label: string
  type: "units" | "money",
  value: string
}

export function DashboardCard({ label, type, value }: DashboardCardProps) {
  return (
    <div className="w-full rounded border p-6 flex gap-4 bg-card">
      {type === "money" ? (
        <div className="bg-violet-700/10 w-min h-min p-6 rounded-full border border-secondary">
          <Coins className="w-12 h-12 text-secondary" />
        </div>
      ) : (
        <div className="bg-violet-700/10 w-min h-min p-6 rounded-full border border-secondary">
          <Package className="w-12 h-12 text-secondary" />
        </div>
      )}

      <div className="flex flex-col">
        <p className="text-muted-foreground">
          {label}
        </p>
        <p className="text-card-foreground font-semibold text-5xl mt-1">
          {value}
        </p>
      </div>
    </div>
  )
}