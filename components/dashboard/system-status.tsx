import { Badge } from "@/components/ui/badge";
import type { SystemHealth, SystemNode } from "@/types/dashboard";

interface SystemStatusProps {
  nodes: SystemNode[];
}

function healthVariant(
  health: SystemHealth,
): "success" | "warning" | "danger" {
  switch (health) {
    case "operational":
      return "success";
    case "degraded":
      return "warning";
    case "outage":
      return "danger";
  }
}

export function SystemStatus({ nodes }: SystemStatusProps) {
  return (
    <ul className="space-y-2">
      {nodes.map((node) => (
        <li
          key={node.id}
          className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm"
        >
          <div>
            <p className="font-medium text-slate-800">{node.name}</p>
            <p className="text-xs text-slate-500">
              {node.region} · {node.latencyMs}ms · {node.uptime} uptime
            </p>
          </div>
          <Badge variant={healthVariant(node.health)}>{node.health}</Badge>
        </li>
      ))}
    </ul>
  );
}
