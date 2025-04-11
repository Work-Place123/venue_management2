// import { FocusCards } from "@/components/ui/focus-cards";
import { FocusCards } from "@/app/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "/images/image1.jpg", // Use relative paths
    },
    {
      title: "Valley of Life",
      src: "/images/image2.jpg",
    },
    {
      title: "Sala behta hi jayega",
      src: "/images/image3.jpg",
    },
    {
      title: "Camping is for Pros",
      src: "/images/image3.jpg",
    },
    {
      title: "The Road Not Taken",
      src: "/images/image1.jpg",
    },
    {
      title: "The First Rule",
      src: "/images/image2.jpg",
    },
  ];

  return (
    <div className="w-full h-full mb-10">
      <h2 className="max-w-7xl pb-10  mx-auto pl-10 md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">Our Some Clicks</h2>
      <FocusCards cards={cards} />
    </div>
  );
}
