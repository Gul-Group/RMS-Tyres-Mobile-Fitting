import Image from "next/image";
import type { BrandSlug } from "@/components/brands/brands";

export interface TopBrandItemProps {
  slug: BrandSlug;
  name: string;
  index: number;
  priority?: boolean;
}

export default function TopBrandItem({ slug, name, index, priority }: TopBrandItemProps) {
  return (
    <div
      role="listitem"
      className="flex w-full justify-center px-3 md:px-4"
      data-brand-index={index}
      aria-label={name}
    >
      <div className="flex h-16 w-40 items-center justify-center md:h-20 md:w-48">
        <Image
          alt={`${name} logo`}
          src={`/images/tyres_logo/${slug}-tyre-logo.png`}
          width={320}
          height={160}
          priority={priority}
          sizes="(max-width: 480px) 160px, (max-width: 768px) 192px, 240px"
          className="h-auto w-auto max-h-16 md:max-h-20 select-none"
          draggable={false}
        />
      </div>
    </div>
  );
}


