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

  const gridLayouts = [
    "col-span-6 md:col-span-4",
    "col-span-6 md:col-span-2",
    "col-span-6",
    "col-span-6 md:col-span-2 row-span-2",
    "col-span-3 md:col-span-2",
    "col-span-3 md:col-span-2",
    "col-span-6 md:col-span-4",
  ];

  return (
    <section
      id="projects"
      className="py-32 bg-[#efeee9] relative overflow-hidden"
    >
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.05] z-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt-paper.png')]" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative mb-20">
          {/* Invisible blur 'cloud' behind the text */}
          <div className="absolute inset-0 blur-2xl bg-[#efeee9]/60 scale-150 -z-10" />

          <h2 className="text-7xl font-serif font-bold text-zinc-900 tracking-tight">
            Projects and Designs
          </h2>
        </div>

        <div className="grid grid-cols-6 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
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

// Local helper component to clean up the code mapping
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
  return (
    <div
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
          <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </div>
      )}

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-8 flex flex-col justify-end">
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
    </div>
  );
}
