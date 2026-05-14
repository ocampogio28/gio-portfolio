import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Feedback from "@/components/Feedback";
import WebDesignCard from "@/components/WebDesignCard";
import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "My personal Portfolio website showcasing my work and skills. Built with Next.js, Tailwind, Supabase and Vercel.",
      image: "/portfolio-1.jpg",
      link: "https://gio-portfolio-rho.vercel.app/",
    },
    {
      title: "Virtual Museum",
      description:
        "An interactive virtual museum experience exploring digital art and 3D modeling.",
      image: "/museum-preview.png",
      link: "https://your-museum-demo.com",
    },
    {
      title: "To Do (Desktop App)",
      description:
        "A high-productivity task manager built for desktop workflows, focusing on keyboard shortcuts and rapid entry.",
    },
    {
      title: "Fantasy Ecommerce",
      description:
        "An immersive shopping experience for tabletop RPG enthusiasts, featuring dynamic inventory and lore-based descriptions.",
    },
    {
      title: "Cozy Coffeeshop",
      description:
        "Minimalist landing page for a boutique roastery, prioritizing warmth and visual storytelling.",
    },
    {
      title: "GYM",
      description:
        "Workout tracking and progress visualization designed for mobile-first gym sessions.",
    },
    {
      title: "Finance Tracker (Desktop App)",
      description:
        "Personal finance dashboard for tracking expenses with real-time data visualization and export features.",
    },
  ];

  const webDesignCollections = [
    {
      title: "Personal Portfolio",
      images: [
        "/portfolio1-1.png",
        "/portfolio1-2.png",
        "/portfolio1-3.png",
        "/portfolio1-4.png",
      ],
    },
    {
      title: "Typography Hero",
      images: ["/typo-1.png"],
    },
    {
      title: "SaaS Dashboard",
      images: ["/dash-light.png", "/dash-dark.png"],
    },
    {
      title: "Minimal Landing",
      images: ["/land-1.png", "/land-2.png", "/land-3.png", "/land-4.png"],
    },
  ];

  return (
    <main className="min-h-screen font-sans bg-white">
      <Navbar />

      {/* 1st TAB - Hero Section */}
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
                between robust engineering and visual storytelling, blending
                clean code with a passion for animation.
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

      {/* 2nd TAB*/}
      <section
        id="projects"
        className="py-32 bg-[#efeee9] relative overflow-hidden"
      >
        {/* 1. Background Image Layer */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{ backgroundImage: "url('/bg.png')" }}
        >
          <div className="absolute inset-0 bg-white/20 pointer-events-none"></div>
        </div>

        {/* 2. Paper Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.05] z-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt-paper.png')]"></div>

        {/* 3. Main Content Container */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="relative mb-20">
            {/* Invisible blur 'cloud' behind the text */}
            <div className="absolute inset-0 blur-2xl bg-[#efeee9]/60 scale-150 -z-10"></div>

            <h2 className="text-7xl font-serif font-bold text-zinc-900 tracking-tight">
              Selected Projects
            </h2>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-6 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
            {projects.map((project, index) => {
              const gridClasses =
                [
                  "col-span-6 md:col-span-4",
                  "col-span-6 md:col-span-2",
                  "col-span-6",
                  "col-span-6 md:col-span-2 row-span-2",
                  "col-span-3 md:col-span-2",
                  "col-span-3 md:col-span-2",
                  "col-span-6 md:col-span-4",
                ][index] || "col-span-6";

              return (
                <div
                  key={project.title}
                  /* REMOVED shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] for a flat look */
                  className={`${gridClasses} border-[1.5px] border-black group relative overflow-hidden bg-white transition-transform duration-300 hover:-translate-y-2`}
                >
                  {/* Project Image */}
                  {project.image && (
                    <div className="relative w-full h-full grayscale contrast-[1.2] brightness-[0.9] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover mix-blend-multiply opacity-[0.9]"
                      />
                      <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                    </div>
                  )}

                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                    <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white font-serif font-bold text-4xl uppercase leading-tight tracking-tighter">
                        {project.title}
                      </h3>

                      <p className="text-zinc-300 text-sm mt-3 max-w-xl line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-sans">
                        {project.description}
                      </p>

                      {project.link && project.link !== "#" && (
                        <a
                          href={project.link}
                          className="inline-block mt-6 text-[11px] text-white font-bold uppercase border-b border-white/30 pb-1 hover:border-white transition-colors tracking-[0.2em]"
                        >
                          Visit Project
                        </a>
                      )}
                    </div>
                  </div>

                  {/* REMOVED: The Inner Shadow div that was here */}
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Book Binding Edge Gradients */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black/10 to-transparent pointer-events-none z-20"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black/10 to-transparent pointer-events-none z-20"></div>
      </section>

      {/* 3rd TAB - Designs */}
      <section
        id="design"
        className="relative w-full py-28 overflow-hidden flex items-center bg-[#fdfaf3]"
      >
        {/* Reverted to the Hero-style background logic */}
        <Image
          src="/checkered-bg.png"
          alt="Pattern"
          fill
          priority
          className="object-cover opacity-20 mix-blend-multiply object-top"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="mb-20">
            <h2 className="text-5xl font-serif font-bold text-zinc-900 tracking-tight">
              Designs
            </h2>
            <p className="text-lg mt-4 text-zinc-600 leading-relaxed max-w-xl font-sans">
              A collection of UI experiments and web studies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {webDesignCollections.map((collection, index) => (
              <WebDesignCard
                key={index}
                title={collection.title}
                images={collection.images}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4th TAB - Contact (Papery Vibe) */}
      <section id="contact" className="py-32 bg-[#efeee9]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col">
              <div className="mb-10">
                <h2 className="text-4xl font-serif font-bold text-zinc-900">
                  Get in Touch
                </h2>
                <p className="text-zinc-600 mt-4 text-lg">
                  Currently open to new projects and collaborations.
                </p>
              </div>

              <div className="max-w-md w-full">
                <Feedback />
              </div>
            </div>

            <div className="relative w-full aspect-square md:aspect-auto md:h-[500px]">
              <Image
                src="/feedback.gif"
                alt="Contact Visual"
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <Footer />
        </div>
      </footer>
    </main>
  );
}
