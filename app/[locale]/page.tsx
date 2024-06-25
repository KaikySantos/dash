import { DashboardCard } from "@/components/dashboard-card";

import { Order, columns } from "@/components/orders-table/columns";
import { DataTable } from "@/components/orders-table/data-table";

import { promises as fs } from 'fs';

export default async function Home() {
  const fileData = await fs.readFile(process.cwd() + '/db.json', 'utf8');
  const data = JSON.parse(fileData) as Order[]

  let sumTotalValues = 0
  let sumTotalUnits = 0

  data.forEach(order => {
    sumTotalValues += order.valorTotal
    sumTotalUnits += order.produtos.length
  })

  return (
    <div className="px-8 py-6">
      <h2 className="text-3xl font-semibold text-foreground">
        My Dashboard
      </h2>
      <p className="text-md text-muted-foreground mt-2">
        Your recents transactions activity and all
      </p>

      <div className="flex flex-col xl:flex-row gap-8 mt-8 mb-4">
        <DashboardCard type="money" value={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(sumTotalValues)} />
        <DashboardCard type="units" value={String(sumTotalUnits)} />
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  );
}
