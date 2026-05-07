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
        "My personal Portfolio website showcasing my work and skills. Built with Next.js and Tailwind.",
      image: "/portfolio-preview.png",
      link: "https://github.com/your-username/portfolio",
    },
    {
      title: "Virtual Museum",
      description:
        "An interactive virtual museum experience exploring digital art and 3D modeling.",
      image: "/museum-preview.png",
      link: "https://your-museum-demo.com",
    },
  ];

  const webDesignCollections = [
    {
      title: "E-commerce Study",
      images: ["/shop-main.png", "/shop-cart.png", "/shop-mobile.png"],
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

      {/* 1st TAB*/}
      <section
        id="home"
        className="relative w-full h-[85vh] bg-[#fdfaf3] overflow-hidden flex items-center"
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
            <div className="text-black space-y-4">
              <h1 className="text-6xl font-serif font-bold tracking-tight text-zinc-900">
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
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/your-asset.gif"
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
      <section id="projects" className="py-32 bg-[#efeee9]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-zinc-900 mb-16">
            Selected Projects
          </h2>

          <div className="grid gap-16 grid-cols-1">
            {projects.map((project) => (
              <Card
                key={project.title}
                title={project.title}
                description={project.description}
                imageSrc={project.image}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3rd TAB*/}
      <section
        id="design"
        className="relative py-28 overflow-hidden flex items-center bg-[#fdfaf3]"
      >
        <Image
          src="/checkered-bg.png"
          alt="Design Background"
          fill
          className="object-cover opacity-20 mix-blend-multiply z-0"
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

      {/* 4th TAB*/}
      <section id="contact" className="py-32 bg-[#efeee9]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-serif font-bold text-zinc-900">
              Get in Touch
            </h2>
            <p className="text-zinc-600 mt-4 text-lg">
              Currently open to new projects and collaborations.
            </p>
          </div>
          <Feedback />
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
