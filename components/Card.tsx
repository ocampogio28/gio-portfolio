"use client";

import Image from "next/image";

export default function Card() {
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

  // Modified grid span definitions to optimize layout space for a listing index view
  const gridLayouts = [
    "col-span-6 md:col-span-4",
    "col-span-6 md:col-span-2",
    "col-span-6",
    "col-span-6 md:col-span-3",
    "col-span-3 md:col-span-3",
    "col-span-3 md:col-span-2",
    "col-span-6 md:col-span-4",
  ];

  return (
    <section id="projects" className="py-4 bg-[#ffffff] select-none font-rainy">
      <div className="max-w-5xl mx-auto px-2">
        {/* Directory Breadcrumb Header */}
        <div className="border border-black bg-[#efeee9] px-3 py-1.5 mb-6 text-xs font-mono flex items-center justify-between shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <span className="font-bold tracking-wide">
            A:\PROJECTS_INDEX\LIST.TXT
          </span>
          <span className="opacity-40 text-[10px] hidden sm:inline">
            ITEMS: {projects.length}
          </span>
        </div>

        {/* Project Bento Grid */}
        <div className="grid grid-cols-6 gap-4 auto-rows-[220px] md:auto-rows-[240px]">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.title}
              project={project}
              gridClasses={gridLayouts[index] || "col-span-6"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectItemProps {
  project: {
    title: string;
    description: string;
    image?: string;
    link?: string;
  };
  gridClasses: string;
}

function ProjectItem({ project, gridClasses }: ProjectItemProps) {
  const isApp = project.title.toLowerCase().includes("app") || project.link;

  return (
    <div
      className={`${gridClasses} border border-black group relative overflow-hidden bg-[#fafafa] flex flex-col p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200`}
    >
      {/* File/Sub-directory Frame header decal */}
      <div className="border border-black bg-[#efeee9] px-2 py-0.5 flex justify-between items-center text-[11px] font-mono select-none shrink-0 border-b-0">
        <span className="truncate opacity-70 font-bold tracking-tight">
          {isApp ? "⚙️ APP_EXEC" : "📁 SUB_DIR"}
        </span>
        <span className="text-[10px] opacity-40">
          {isApp ? ".EXE" : ".DAT"}
        </span>
      </div>

      <div className="border border-black bg-white flex-1 relative flex flex-col justify-between p-4 overflow-hidden">
        {/* Optional Thumbnail Base Background */}
        {project.image && (
          <div className="absolute inset-0 z-0 opacity-10 grayscale contrast-150 pointer-events-none group-hover:opacity-20 transition-opacity">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="relative z-10 space-y-2">
          {/* Item File Title */}
          <h3 className="text-xl font-bold uppercase leading-tight tracking-tight text-black border-b border-dashed border-black/20 pb-1 group-hover:text-blue-700 transition-colors">
            {project.title}
          </h3>

          {/* Persistent Retro File Description */}
          <p className="text-zinc-600 text-xs leading-relaxed line-clamp-3 md:line-clamp-4">
            {project.description}
          </p>
        </div>

        {/* Bottom Status Interface Bar / Link Button */}
        <div className="relative z-10 pt-2 flex items-center justify-between text-[11px] font-mono shrink-0">
          <span className="text-zinc-400 text-[10px]">
            {isApp ? "[LAUNCHABLE]" : "[READ_ONLY]"}
          </span>

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-0.5 border border-black bg-[#efeee9] hover:bg-black hover:text-white transition-colors text-black font-bold shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
            >
              RUN_APP &gt;
            </a>
          ) : (
            <span className="text-zinc-400 italic">SYS_FILE</span>
          )}
        </div>
      </div>
    </div>
  );
}
