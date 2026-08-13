export type GalleryItem = {
  src: string;
  width: number;
  height: number;
  title: string;
  desc: string;
  badgeLabel?: string;
};

export const beforeAfterGallery: GalleryItem[] = [
  {
    src: "/images/driveway.webp",
    width: 765,
    height: 1020,
    title: "Aggregate Driveway Cleaning & Sealing",
    desc: "A dull, unsealed aggregate driveway restored to a rich, protected finish.",
    badgeLabel: "Completed Project",
  },
  {
    src: "/images/pressure-washing.webp",
    width: 765,
    height: 1020,
    title: "Concrete Driveway Cleaning & Sealing",
    desc: "Years of buildup lifted from a concrete walkway before it's sealed.",
  },
  {
    src: "/images/stairs-before-after.webp",
    width: 1360,
    height: 774,
    title: "Concrete Steps & Walkway",
    desc: "Mossy, discolored steps cleaned and sealed for an even, like-new finish.",
  },
  {
    src: "/images/steps-before-after.webp",
    width: 1360,
    height: 741,
    title: "Walkway Steps Sealing",
    desc: "A dingy, algae-stained walkway brought back to a bright, uniform tan.",
  },
  {
    src: "/images/mailbox-before-after-1.webp",
    width: 1360,
    height: 764,
    title: "Brick Mailbox Cleaning",
    desc: "Moss and grime lifted to reveal the brick's true color underneath.",
  },
  {
    src: "/images/mailbox-before-after-2.webp",
    width: 1360,
    height: 774,
    title: "Brick Mailbox Restoration",
    desc: "Years of buildup removed for a sharp, like-new curb-appeal finish.",
  },
  {
    src: "/images/fence-before-after.webp",
    width: 1360,
    height: 1020,
    title: "Wood Fence Restoration",
    desc: "A weathered privacy fence cleaned back to its natural wood tone.",
  },
];
