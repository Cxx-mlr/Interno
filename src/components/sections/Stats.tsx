

const stats = [
  {
    title: "Years Of Experience",
    value: 12,
  },
  {
    title: "Projects Completed",
    value: 85,
  },
  {
    title: "Active Projects",
    value: 15,
  },
  {
    title: "Happy Customers",
    value: 95,
  },
];

export default function Stats() {
  return (
    <section aria-labelledby="stats" className="py-[80px] lg:py-[150px]
      mt-[80px] xl:mt-[140px]
      bg-orange-100"
    >
      <h2 id="stats" className="sr-only">Stats</h2>
      <ul className="container mx-auto
        grid grid-cols-1 xl:grid-cols-4
        gap-12"
      >
        {stats.map((stat, index) => {
          return (
            <li key={index}
              className="text-center
              border-r xl:border-orange-800/60 last:border-none
              flex flex-col items-center"
            >
              <p className="text-xl text-black/75 order-last">{stat.title}</p>
              <h2 className="font-DM_Serif_Display text-6xl text-orange-800/60 order-first">{stat.value}</h2>
            </li>
          );
        })}
      </ul>
    </section>
  );
}