import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="Nodveta"
          width={32}
          height={32}
          priority
        />
        <div>
          <p className="text-sm font-semibold text-slate-900">Nodveta</p>
          <p className="text-xs text-slate-500">Infrastructure Dashboard</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="hidden text-sm text-slate-500 sm:inline">
          Mainnet · Block #18,429,102
        </span>
        <Link
          href="/dashboard"
          className="rounded-lg bg-nodveta-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-nodveta-700"
        >
          Open Dashboard
        </Link>
      </div>
    </header>
  );
}
