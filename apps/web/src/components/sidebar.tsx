"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@midika/ui";

interface SidebarItem {
  href: string;
  label: string;
}

interface SidebarProps {
  title: string;
  items: SidebarItem[];
}

export function Sidebar({ title, items }: SidebarProps) {
  const path = usePathname();

  return (
    <aside className="hidden min-h-screen w-64 flex-col border-r border-border bg-card/60 px-4 py-6 md:flex">
      <div className="mb-6 text-sm font-semibold text-muted-foreground">
        {title}
      </div>
      <nav className="flex flex-col gap-1">
        {items.map((item) => {
          const isActive = path === item.href;
          return (
            <Link
              key={item.href}
              href={item.href as any}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition hover:bg-accent hover:text-foreground",
                isActive && "bg-accent text-foreground",
              )}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
