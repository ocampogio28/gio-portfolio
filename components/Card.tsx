"use client";
type Props = {
  title: string;
  description: string;
};

export default function Card({ title, description }: Props) {
  return (
    <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
