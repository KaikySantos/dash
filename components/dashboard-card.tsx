import { CircleDollarSign, Package } from "lucide-react";
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
        <div className="bg-green-600/20 w-min h-min p-6 rounded-full border border-green-600">
          <CircleDollarSign className="w-12 h-12 text-green-600" />
        </div>
      ) : (
        <div className="bg-blue-600/20 w-min h-min p-6 rounded-full border border-blue-600">
          <Package className="w-12 h-12 text-blue-600" />
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