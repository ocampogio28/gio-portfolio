export default function Contact() {
  return (
    <div className="w-full max-w-sm select-none mx-auto">
      {/* Contact Content - No Additional Window Border */}
      <div className="w-full">
        <div className="bg-white p-3 pattern-dots relative">
          <h3 className="text-xl font-rainy font-bold mb-3 tracking-wide text-black uppercase">
            Let's Connect!
          </h3>

          <div className="space-y-3 font-rainy text-sm">
            {/* Email */}
            <div className="border border-black bg-[#fafafa] p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <p className="uppercase text-xs text-zinc-500 mb-1">Email</p>
              <a
                href="mailto:your-email@gmail.com"
                className="text-black font-bold hover:underline break-all"
              >
                ocampogio28@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="border border-black bg-[#fafafa] p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <p className="uppercase text-xs text-zinc-500 mb-1">Phone</p>
              <a
                href="tel:+63XXXXXXXXXX"
                className="text-black font-bold hover:underline"
              >
                +63 995 305 0519
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-3 mt-3">
        <a
          href="https://github.com/ocampogio28"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 border border-black bg-[#efeee9] text-black font-rainy font-bold tracking-wider text-xs uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-black hover:text-white active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/gio-ocampo-22b4691a2/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 border border-black bg-[#efeee9] text-black font-rainy font-bold tracking-wider text-xs uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-black hover:text-white active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
