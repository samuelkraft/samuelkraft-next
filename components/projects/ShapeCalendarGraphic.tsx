import Image from "next/image";
import shapeIconGraphic from "public/projects/shape.webp";

export default function ShapeCalendarGraphic() {
  return (
    <div className="relative h-[283px] overflow-hidden rounded-xl bg-[#101010] grid place-items-center">
      <Image
        src="/projects/shape.webp"
        alt="Shape Calendar"
        width={100}
        height={100}
        sizes="100px"
        quality={100}
      />
    </div>
  );
}
