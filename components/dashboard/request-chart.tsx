import type { RequestVolumePoint } from "@/types/dashboard";

interface RequestChartProps {
  data: RequestVolumePoint[];
}

export function RequestChart({ data }: RequestChartProps) {
  const maxRequests = Math.max(...data.map((point) => point.requests));

  return (
    <div className="space-y-4">
      <div className="flex h-48 items-end gap-3">
        {data.map((point) => {
          const heightPercent = (point.requests / maxRequests) * 100;

          return (
            <div
              key={point.hour}
              className="flex flex-1 flex-col items-center gap-2"
            >
              <div
                className="w-full rounded-t bg-nodveta-500"
                style={{ height: `${heightPercent}%`, minHeight: "4px" }}
                title={`${point.requests.toLocaleString()} requests`}
              />
              <span className="text-xs text-slate-500">{point.hour}</span>
            </div>
          );
        })}
      </div>
      <p className="text-xs text-slate-400">
        Request volume over the last 24 hours (static mock data)
      </p>
    </div>
  );
}
