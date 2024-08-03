

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
    <section className="py-[80px] lg:py-[150px]
      mt-[80px] xl:mt-[140px]
      bg-orange-100"
    >
      <ul className="container mx-auto
        grid grid-cols-1 xl:grid-cols-4
        gap-12"
      >
        {stats.map((stat, index) => {
          return (
            <li key={index}
              className="text-center
              border-r xl:border-orange-800/60 last:border-none"
            >
              <h2 className="font-DM_Serif_Display text-6xl text-orange-800/60">{stat.value}</h2>
              <p className="text-xl text-black/75">{stat.title}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}