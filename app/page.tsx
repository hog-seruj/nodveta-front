import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 px-6">
      <main className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Nodveta logo"
            width={48}
            height={48}
            priority
          />
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Nodveta Infrastructure Dashboard
            </h1>
            <p className="text-slate-500">Frontend Engineering Assessment</p>
          </div>
        </div>

        <p className="mt-6 leading-relaxed text-slate-600">
          Welcome to the Nodveta frontend assessment. You have{" "}
          <strong>1 hour</strong> to complete five focused tasks in this
          partially built dashboard — fix a bug, wire up filtering, polish UI,
          improve responsiveness, and add a unit test.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/dashboard"
            className="rounded-lg bg-nodveta-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-nodveta-700"
          >
            View Dashboard
          </Link>
        </div>

        <ul className="mt-8 space-y-2 text-sm text-slate-500">
          <li>· Start with <code className="text-slate-700">ASSESSMENT.md</code> for task details</li>
          <li>· Five required tasks — optional extras only if time allows</li>
          <li>· Static mock data — no live APIs or credentials</li>
        </ul>
      </main>
    </div>
  );
}