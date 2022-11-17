import Link from "components/Link";
import Image, { StaticImageData } from "next/image";
import { Fragment } from "react";

type Workplace = {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  time?: string;
  link?: string;
};

function Workplace({ title, description, imageSrc, time, link }: Workplace) {
  const content = (
    <>
      <div className="flex items-center gap-4">
        <Image
          src={imageSrc}
          alt={description}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex flex-col gap-px">
          <p className={link ? "external-arrow" : ""}>{title}</p>
          <p className="text-secondary">{description}</p>
        </div>
      </div>
      {time && <p className="text-secondary">{time}</p>}
    </>
  );
  return (
    <li className="transition-opacity" key={description}>
      {link ? (
        <Link
          href={link}
          className="flex justify-between w-full px-3 py-2 -mx-3 -my-2 no-underline"
        >
          {content}
        </Link>
      ) : (
        <div className="flex justify-between ">{content}</div>
      )}
    </li>
  );
}

export default function Workplaces({ items }: { items: Workplace[] }) {
  return (
    <ul className="flex flex-col gap-8 animated-list">
      {items.map(Workplace)}
    </ul>
  );
}
