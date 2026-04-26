import { ReactNode } from "react";

type SectionProps = {
  heading: string;
  children: ReactNode;
};

export default function Section({ heading, children }: SectionProps) {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-secondary">{heading}</h2>
      {children}
    </section>
  );
}
