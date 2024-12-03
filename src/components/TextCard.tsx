interface ITextcard {
  title: string;
  body: string;
  button_text: string;
}
export default function TextCard({ title, body, button_text }: ITextcard) {
  return (
    <div className="w-full  bg-white rounded-xl px-4 flex flex-col gap-8 items-center h-96 justify-center border border-solid shadow-sm transition-colors hover:transition-colors hover:border-blue-800 hover:shadow-lg">
      <h1 className="text-5xl font-bold text-primary-color text-center">
        {title}
      </h1>
      <p className="text-lg text-center">{body}</p>
      <button className="before:ease relative min-h-12 w-40 overflow-hidden border border-blue-800 shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-blue-800 before:transition-all before:duration-300 hover:text-white hover:shadow-blue-800 hover:before:-rotate-180 rounded-2xl ">
        <span className="relative z-10 ">{button_text}</span>
      </button>
    </div>
  );
}
