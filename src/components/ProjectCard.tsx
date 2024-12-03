import { IprojectCardData } from "../interfaces";
export default function ProjectCard({ data }: { data: IprojectCardData }) {
  const { body_text, imageUrl, websiteUrl } = data;
  return (
    <div className="h-80 w-full aspect-square max-w-sm  rounded-xl  relative cursor-pointer shadow-sm overflow-hidden project-card ">
      <div className="bg-no-repeat bg-cover h-full w-full  project-card-image z-[1] relative overflow-hidden rounded-lg">
        <img src={imageUrl} alt="image" className="h-full w-full" />
      </div>
      <div className=" absolute top-0 left-0 z-[2] opacity-0 h-full w-full bg-black  text-white flex flex-col gap-6 p-8 justify-center text-center items-center project-card-info">
        <p className="text-xl tracking-wide leading-8">{body_text}</p>
        <a href={websiteUrl} target="blank">
          <button className="p-2 text-lg rounded-2xl px-8 font-semibold border-blue-800  border-4 w-fit hover:bg-blue-800 transition-colors hover:transition-colors hover:border-white">
            Visit Website
          </button>
        </a>
      </div>
    </div>
  );
}
