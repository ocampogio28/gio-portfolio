import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Feedback from "@/components/Feedback";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-white">
      {/* 1st TAB - Hero Section Component */}
      <Hero />

      {/* 2nd TAB - Projects Bento Grid Component */}
      <Card />

      {/* 3rd TAB - Contact */}
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
