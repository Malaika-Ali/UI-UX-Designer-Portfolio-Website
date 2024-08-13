import React from "react";

const brandsData = [
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/66404ae94fe39eba6eb74861_AlphaWave.svg",
    altText: "alphawave",
    link: "#",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/66404ae94581179b14b183d1_3Portals.svg",
    altText: "portals",
    link: "#",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/66404aeb1bccb9054cc6e612_Catalog.svg",
    altText: "catalog",
    link: "#",
  },
  {
    imageSrc: "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/66404aeadf098ea7d32b676d_Capsule.svg",
    altText: "capsule",
    link: "#",
  },
  {
    imageSrc: "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/66404ae9e06b23b2ce0beeb0_Biosynthesis.svg",
    altText: "biosynthesis",
    link: "#",
  },
];

export default function Brand() {
  return (
    <section className="bg-background py-8 lg:py-[80px] dark:bg-dark">
      <div className="container mx-auto">
        <div className=" flex flex-wrap">
          <div className="w-full px-4 lg:px-2">
            <div className="flex flex-wrap items-center justify-center">
              {brandsData.map((brand, i) => (
                <SingleImage key={i} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SingleImage = ({ brand }) => {
  const { link, imageSrc, lightImageSrc, altText } = brand;
  return (
    <>
      <a
        href={link}
        className="mx-4 flex w-[150px] items-center justify-center 2xl:w-[180px]"
      >
        <img src={imageSrc} alt={altText} className="h-6 lg:h-10 w-full" />
      </a>
    </>
  );
};


