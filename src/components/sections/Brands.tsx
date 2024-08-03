
const brands = [
  {
    name: "",
    logo: "/assets/brands/01.svg"
  },
  {
    name: "",
    logo: "/assets/brands/02.svg"
  },
  {
    name: "",
    logo: "/assets/brands/03.svg"
  },
  {
    name: "",
    logo: "/assets/brands/04.svg"
  },
  {
    name: "",
    logo: "/assets/brands/05.svg"
  },
];

export default function Brands() {
  return (
    <section>
      <ul className="container mx-auto
        mt-[110px] xl:mt-[160px]
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