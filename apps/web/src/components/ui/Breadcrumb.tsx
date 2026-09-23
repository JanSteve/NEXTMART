import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({ items }: { items: { label: string, href: string }[] }) {
  return (
    <nav className="flex text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        {items.map((item, index) => (
          <li key={item.href} className="inline-flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 mx-1" />}
            <Link href={item.href} className="hover:text-primary-500 transition-colors">
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}