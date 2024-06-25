import { DashboardCard } from "@/components/dashboard-card";

export default function Home() {
  return (
    <div className="px-8 py-6">
      <h2 className="text-3xl font-semibold text-foreground">
        My Dashboard
      </h2>
      <p className="text-md text-muted-foreground mt-2">
        Your recents transactions activity and all
      </p>

      <div className="flex gap-8 mt-8">
        <DashboardCard type="money" value="R$ 2.345,90" />
        <DashboardCard type="units" value="4.569" />
      </div>
    </div>
  );
}
