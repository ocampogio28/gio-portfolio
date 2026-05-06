import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Feedback from "@/components/Feedback";

export default function Home() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "My personal Next.js site built with high-performance standards.",
    },
    {
      title: "Virtual Museum",
      description:
        "An interactive virtual museum experience exploring digital art.",
    },
  ];

  return (
    /* 
      max-w-3xl: Keeps the text at a readable width (classic portfolio look).
      mx-auto: Centers the whole page.
      px-6: Adds a small gap on the sides for mobile.
      space-y-24: Creates a consistent vertical gap between the main sections.
    */
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-24">
      <Navbar />

      <div className="space-y-20">
        {/* Intro Section */}
        <section id="home" className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Hi, I'm Gio</h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            A Software Developer with over three years of experience. I focus on
            building production-ready environments, optimizing data systems, and
            solving complex problems with clean, maintainable code.
          </p>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="space-y-8 border-t border-gray-800 pt-16"
        >
          <h2 className="text-2xl font-semibold">Selected Projects</h2>
          {/* Grid: Stacks on mobile, 2-columns on tablet+ */}
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <Card
                key={project.title}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        </section>

        {/* Feedback Section */}
        <section
          id="contact"
          className="pt-16 border-t border-gray-800 space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="text-gray-500">
              Have a question or want to work together?
            </p>
          </div>
          <Feedback />
        </section>
      </div>

      <Footer />
    </main>
  );
}
