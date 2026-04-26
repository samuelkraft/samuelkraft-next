import Image from "next/image";

export default function GlazeGraphic() {
  return (
    <div className="relative h-[283px] overflow-hidden rounded-xl bg-[#101010] grid place-items-center">
      <Image
        src="/projects/glaze.png"
        alt="Glaze"
        width={120}
        height={120}
        sizes="120px"
        quality={100}
      />
    </div>
  );
}
