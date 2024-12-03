import { programming_languages } from "../constant";

export default function HeroSection() {
  return (
    <section className="flex justify-center min-h-screen ">
      <article className="flex flex-col  items-center h-full ">
        <div className="flex w-full justify-between items-center max-sm:flex-col">
          <div className=" flex flex-col gap-8 max-sm:gap-4 pt-8">
            <h1 className="text-6xl font-bold text-center max-sm:text-4xl">
              I'm a web Developer
            </h1>
            <p className="text-3xl text-center text-blue-800 font-semibold max-sm:text-2xl">
              I build things for the web
            </p>
          </div>
          <div className="mt-6  rounded-full overflow-hidden h-72 w-auto ">
            <img
              src="code.png"
              alt="code"
              className="h-auto w-auto max-w-full max-h-full "
            />
          </div>
        </div>
        <div className="mt-6 max-w-4xl w-full overflow-hidden">
          <img src="/hero-devices.svg" alt="hero-devices" />
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
