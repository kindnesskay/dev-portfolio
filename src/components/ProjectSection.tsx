import { project_card_data } from "../constant";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <section className=" flex justify-center ">
      <article className="px-4 pt-20 flex flex-col gap-4">
        <p className="pb-4 font-semibold text-2xl">Personal projects</p>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-3 gap-4 w-fit max-lg:grid-cols-2 max-sm:grid-cols-1 space-y-4 ">
            {project_card_data.map((item, index) => (
              <ProjectCard data={item} key={index} />
            ))}
          </div>
        </div>
        <p className="p-4 font-semibold text-2xl">Client work</p>
        <p>Able options</p>
        <div
          className="w-full 
         relative flex justify-center"
        >
          <div className="hidden max-lg:block h-full  red-border w-fit relative   overflow-hidden rounded-[2em]">
            <img
              src="iphone.png"
              alt=""
              className="w-auto h-auto  max-h-[400px] max-w-full animate-scroll-box z-10 relative"
            />

            <img
              src="ableoptions-mobile.jpeg"
              alt=""
              className="absolute translate-y-0 top-1 left-0 animate-scroll w-full "
            />
          </div>
          <div className="max-lg:hidden relative h-full overflow-hidden">
            <img
              src="laptop.png"
              alt=""
              className="w-auto h-auto  max-w-full z-[2] animate-scroll-box relative"
            />

            <img
              src="ableoptions.jpeg"
              alt=""
              className="absolute translate-y-16 top-1 left-0 animate-scroll"
            />
          </div>
        </div>
      </article>
    </section>
  );
}
