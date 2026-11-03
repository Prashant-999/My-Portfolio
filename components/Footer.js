import { profile } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span>
            {profile.role} · {profile.company}
          </span>
        </div>
      </div>
    </footer>
  );
}
