"use client";

export default function Footer() {
  return (
    <footer className="w-full py-12 text-center">
      <div className="flex flex-col items-center space-y-6">
        {/* Contact Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 font-rainy text-2xl">
          <a
            href="mailto:yourname@email.com"
            className="text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
          >
            ocampogio28@gmail.com
          </a>

          <span className="hidden md:block text-zinc-300">•</span>

          <a
            href="tel:+639000000000"
            className="text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
          >
            (+63) 995 305 0519
          </a>
        </div>

        {/* Copyright */}
        <p className=" font-rainy font-2xl">
          © {new Date().getFullYear()} GIO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
