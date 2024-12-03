import { programming_languages } from "../constant";

export default function HeroSection() {
  return (
    <section className="flex justify-center ">
      <article className="flex flex-col  items-center py-10 px-4 gap-6">
        <div className="flex items-center  max-sm:flex-col  gap-4">
          <div className=" flex flex-col gap-8 max-sm:gap-4 pt-8 ">
            <h1 className="text-7xl font-bold text-center max-sm:text-4xl text-gray-800">
              I'm a web Developer
            </h1>
            <p className="text-3xl text-center text-gray-800 font-medium max-sm:text-2xl">
              I build things for the web
            </p>
          </div>

          <div className="mt-6 max-w-sm w-full overflow-hidden flex justify-center ">
            <img
              src="/avatar.svg"
              alt=""
              className="w-auto h-auto max-w-auto max-h-auto grayscale"
            />
          </div>
        </div>
        <div className="flex gap-8 min-h-20 p-2 w-full justify-center mt-8  flex-wrap">
          {programming_languages.map((item) => (
            <img
              src={item.icon}
              alt={item.name}
              key={item.name}
              className="h-auto aspect-square w-auto max-w-16"
            />
          ))}
        </div>
      </article>
    </section>
  );
}
