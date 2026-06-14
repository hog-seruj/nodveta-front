import { MetricCard } from "@/components/dashboard/metric-card";
import { RequestChart } from "@/components/dashboard/request-chart";
import { SystemStatus } from "@/components/dashboard/system-status";
import { TransactionTable } from "@/components/dashboard/transaction-table";
import { AppShell } from "@/components/layout/app-shell";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { mockDashboardData } from "@/data/mock-dashboard";

export default function DashboardPage() {
  const { metrics, transactions, nodes, requestVolume } = mockDashboardData;

  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Infrastructure Dashboard
          </h1>
          <p className="mt-1 text-slate-500">
            Monitor network health, transactions, and node performance.
          </p>
        </div>

        {/* TODO: Use responsive grid classes — e.g. 1 col mobile, 2 col tablet, 4 col desktop */}
        <section className="grid grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </section>

        {/* TODO: Stack these sections on smaller screens */}
        <section id="analytics" className="grid grid-cols-2 gap-6">
          <Card>
            <CardHeader
              title="Request Volume"
              description="Hourly API requests across all regions"
            />
            <CardContent>
              <RequestChart data={requestVolume} />
            </CardContent>
          </Card>

          <section id="nodes">
            <Card>
              <CardHeader
                title="System Status"
                description="Validator node health by region"
              />
              <CardContent>
                <SystemStatus nodes={nodes} />
              </CardContent>
            </Card>
          </section>
        </section>

        <section id="transactions">
          <Card>
            <CardHeader
              title="Recent Transactions"
              description="Latest on-chain activity across Nodveta networks"
            />
            <CardContent className="p-0">
              <TransactionTable transactions={transactions} />
            </CardContent>
          </Card>
        </section>
      </div>
    </AppShell>
  );
}