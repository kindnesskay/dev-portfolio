import TextCard from "./TextCard";

export default function AboutSection() {
  return (
    <section className="bg-blue-700 flex flex-col items-center w-full gap-12">
      <article className=" flex justify-center pt-40 px-8">
        <div className="max-w-4xl text-center flex flex-col gap-6 text-white ">
          <h2 className="text-5xl font-bold">Hi,I’m Kay.Nice to meet you.</h2>
          <p className="text-2xl tracking-wide leading-9">
            Since beginning my journey as a programmer 5 years ago, I've done
            remote work , and collaborated with talented people to create
            digital products. I'm naturally curious, and perpetually working on
            improving my knowledge.
          </p>
        </div>
      </article>

      <article className="flex justify-center px-8">
        <div className="flex gap-8 max-w-6xl translate-y-12 max-lg:flex-col max-lg:gap-8 ">
          <TextCard
            title="Frontend Developer"
            body="I like to code things from scratch, and enjoy bringing ideas to life in the browser."
            button_text="My Recent Work"
          />
          <TextCard
            title="Backend Developer"
            body="knowing how the server interacts with the frontend is a wonderfull feeling."
            button_text="My Recent Work"
          />
        </div>
      </article>
    </section>
  );
}
