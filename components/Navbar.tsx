import Link from "next/link";
import { Home } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-sm border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <Link
          href="#home"
          className="flex items-center gap-2 group transition-all"
        >
          <Home
            className="w-5 h-5 text-zinc-900 group-hover:scale-110 transition-transform"
            strokeWidth={2.5}
          />
          <span className="font-serif text-xl font-bold text-zinc-900 tracking-tight">
            Gio.
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8">
          <Link
            href="#projects"
            className="font-sans text-sm font-medium text-zinc-600 hover:text-black transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#design"
            className="font-sans text-sm font-medium text-zinc-600 hover:text-black transition-colors"
          >
            Design
          </Link>
          <Link
            href="#contact"
            className="font-sans text-sm font-medium text-zinc-600 hover:text-black transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
