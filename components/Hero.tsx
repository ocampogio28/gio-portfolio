import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-[#fdfaf3] overflow-hidden flex items-center pt-24 md:pt-0"
    >
      <Image
        src="/checkered-bg.png"
        alt="Pattern"
        fill
        priority
        className="object-cover opacity-30 mix-blend-multiply"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-black space-y-4 pt-8 md:pt-0">
            <h1 className="text-6xl font-serif font-bold tracking-tight text-zinc-900 leading-[1.1]">
              {`Hi, I'm Gio`}
            </h1>
            <p className="text-xl font-medium font-sans uppercase tracking-[0.2em] text-zinc-600">
              Software Developer & Web Designer
            </p>
            <p className="text-lg leading-relaxed font-sans text-zinc-800 max-w-lg">
              Software Developer by trade, Creative by heart. I bridge the gap
              between robust engineering and visual storytelling, blending clean
              code with a passion for animation.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-65 h-64 md:w-120 md:h-120">
              <Image
                src="/home.gif"
                alt="Gio's Visual Work"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
