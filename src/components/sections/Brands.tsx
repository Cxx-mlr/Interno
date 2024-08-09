
const brands = [
  {
    name: "Modern Home",
    logo: "/assets/brands/01.svg"
  },
  {
    name: "STYLEVINTAGE INTERIOR",
    logo: "/assets/brands/02.svg"
  },
  {
    name: "Brand",
    logo: "/assets/brands/03.svg"
  },
  {
    name: "Nature Home",
    logo: "/assets/brands/04.svg"
  },
  {
    name: "Classic Design Studio",
    logo: "/assets/brands/05.svg"
  },
];

export default function Brands({
  id
}: {
  id?: string
}) {
  return (
    <section id={id} aria-labelledby="brands-heading"
      className="mt-[110px] xl:mt-[160px]"
    >
      <h2 id="brands-heading" className="text-black/45 text-2xl text-center mb-8">Our Trusted Partners</h2>
      <ul className="container mx-auto
        flex flex-col md:flex-row items-center justify-between gap-12"
      >
        {brands.map((brand, index) => {
          return (
            <li key={index}>
              <figure>
                <img src={brand.logo} alt="" />
                <figcaption className="sr-only">{brand.name}</figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </section>
  );
}