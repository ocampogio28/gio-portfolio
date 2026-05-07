import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

export default function Card({
  title,
  description,
  imageSrc,
  link,
}: CardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col sm:flex-row gap-8 items-start group cursor-pointer"
    >
      <div className="relative w-full sm:w-64 h-40 flex-shrink-0 rounded-[2rem] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col pt-2">
        <h3 className="text-2xl font-serif font-bold text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors">
          {title}
        </h3>
        <p className="text-zinc-600 font-mono text-sm leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </a>
  );
}
