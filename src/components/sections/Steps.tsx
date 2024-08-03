
import { RiCompasses2Line, RiMagicLine, RiToolsFill } from "react-icons/ri";
import LinkWithArrow from "@/components/LinkWithArrow";

const projectWorkflow = [
  {
    icon: <RiCompasses2Line className="size-10 text-yellow-700/40" />,
    title: "Project Planning",
    description: "Our expert team collaborates with you to design a personalized plan, ensuring every detail reflects your vision and lifestyle.",
  },
  {
    icon: <RiMagicLine className="size-10 text-yellow-700/40" />,
    title: "Gaining Materials",
    description: "We source high-quality materials that match your design preferences and budget, ensuring the best outcome for your project.",
  },
  {
    icon: <RiToolsFill className="size-10 text-yellow-700/40" />,
    title: "Project Execution",
    description: "Our skilled craftsmen bring your vision to life with precision and care, delivering a finished project that exceeds expectations.",
  },
];

export default function Steps() {
  return (
    <section aria-labelledby="project-workflow">
      <h2 aria-labelledby="project-workflow" className="sr-only">Project Workflow</h2>
      <ul className="container mx-auto
        mt-[100px] xl:mt-[160px]
        grid grid-cols-1 xl:grid-cols-3 gap-12"
      >
        {projectWorkflow.map((workflow, index) => {
          return (
            <li
              key={index}
              className="flex flex-col items-center text-center gap-4"
            >
              {workflow.icon}
              <h2 className="font-DM_Serif_Display text-black/70">{workflow.title}</h2>
              <p className="text-black/65 mt-2">{workflow.description}</p>
              <LinkWithArrow>Read more</LinkWithArrow>
            </li>
          );
        })}
      </ul>
    </section>
  );
}