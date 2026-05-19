import Image from "next/image";

export default function Hero() {
  // Update these arrays with your actual stack!
  const skills = [
    "PHP",
    "Perl",
    "Java",
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "CSS/Tailwind",
    "C++",
    "C#",
    "SQL",
  ];
  const tools = [
    "VS Code",
    "Figma",
    "Git & GitHub",
    "Vercel",
    "Supabase",
    "Salesforce",
    "Canva",
    "Photoshop",
    "Blender",
    "VBA",
    "Shopify",
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-fit bg-white overflow-hidden py-12 md:py-24 flex items-center"
    >
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-black space-y-6 text-center md:text-left order-2 md:order-1">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-rainy font-bold">
                Hi, I'm Gio
              </h1>
              <p className="font-rainy text-xl md:text-2xl text-gray-800 font-medium">
                Software Developer & Web Designer
              </p>
              <p className="font-rainy text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
                Software Developer by trade, Creative by heart. I bridge the gap
                between robust engineering and visual storytelling, blending
                clean code with a passion for animation.
              </p>
            </div>

            <hr className="border-gray-100" />

            <div className="space-y-5 pt-2 text-left">
              <div>
                <h2 className="font-rainy text-xs font-bold uppercase tracking-wider text-gray-400 mb-2.5 text-center md:text-left">
                  Programming & Frameworks
                </h2>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-rainy text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-md border border-gray-200/60 font-medium cursor-default transition-all duration-200 ease-in-out hover:bg-black hover:text-white hover:border-black hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-rainy text-xs font-bold uppercase tracking-wider text-gray-400 mb-2.5 text-center md:text-left">
                  Tools & Software
                </h2>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="font-rainy text-sm bg-gray-50 text-gray-500 px-3 py-1 rounded-md border border-gray-200/50 cursor-default transition-all duration-200 ease-in-out hover:text-black hover:border-gray-400 hover:bg-white"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
              <Image
                src="/home.gif"
                alt="Gio's Visual Work"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
