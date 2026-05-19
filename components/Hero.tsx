import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-[#ffffff] overflow-hidden items-center md:pt-10"
    >
      <div className="relative max-w-2xl mx-auto px-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
          <div className="text-black space-y-4 pt-8 md:pt-0">
            <h1 className="text-6xl font-rainy font-bold">{`Hi, I'm Gio`}</h1>
            <p className="font-rainy text-2xl">
              Software Developer & Web Designer
            </p>
            <p className=" font-rainy">
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
