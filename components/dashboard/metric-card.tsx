import type { DashboardMetric } from "@/types/dashboard";

interface MetricCardProps {
  metric: DashboardMetric;
}

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-sm text-slate-600">{metric.label}</p>
      <p className="mt-2 text-2xl font-bold text-slate-900">{metric.value}</p>
      <p className="mt-1 text-sm text-slate-600">{metric.change}</p>
      {/* TODO: Use metric.trend ("up" | "down" | "neutral") for visual styling —
          e.g. color, icon, or badge. Match existing Nodveta/Tailwind patterns. */}
    </div>
  );
}