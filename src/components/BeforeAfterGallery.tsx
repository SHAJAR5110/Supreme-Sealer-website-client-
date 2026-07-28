import Image from "next/image";
import { Reveal } from "./Reveal";
import type { GalleryItem } from "@/lib/gallery";

export function BeforeAfterGallery({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal
          key={item.src}
          delay={(i % 3) === 0 ? undefined : ((i % 3) as 1 | 2)}
          className="overflow-hidden rounded-[14px] border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
        >
          <div className="relative">
            <Image
              src={item.src}
              width={item.width}
              height={item.height}
              alt={`${item.title} — before and after`}
              className="w-full h-auto block"
            />
            <span className="absolute top-3 left-3 rounded-full bg-charcoal-900/80 text-white text-[0.72rem] font-head font-bold uppercase tracking-wide px-3 py-1">
              Before &amp; After
            </span>
          </div>
          <div className="p-5">
            <h3 className="text-[1.05rem] mb-1">{item.title}</h3>
            <p className="text-ink-500 text-[0.92rem]">{item.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
