"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard/settings", label: "General" },
    { href: "/dashboard/settings/profile", label: "Profile" },
    { href: "/dashboard/settings/billing", label: "Billing" },
  ];
  return (
    <nav className="space-y-2">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`block rounded-lg px-4 py-2 transition-colors ${
            pathname === item.href
              ? "bg-primary text-primary-foreground"
              : "hover:bg-accent"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
