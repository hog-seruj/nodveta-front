import type { DashboardMetric } from "@/types/dashboard";

interface MetricCardProps {
  metric: DashboardMetric;
}

const trendStyles = {
  up: {
    change: "text-emerald-600",
    icon: "↑",
  },
  down: {
    change: "text-red-600",
    icon: "↓",
  },
  neutral: {
    change: "text-slate-600",
    icon: "→",
  },
} as const;

export function MetricCard({ metric }: MetricCardProps) {
  const trend = trendStyles[metric.trend];

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-sm text-slate-600">{metric.label}</p>
      <p className="mt-2 text-2xl font-bold text-slate-900">{metric.value}</p>
      <p className={`mt-1 text-sm ${trend.change}`}>
        <span aria-hidden="true">{trend.icon} </span>
        {metric.change}
      </p>
    </div>
  );
}
