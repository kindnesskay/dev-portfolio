export default function Footer() {
  return (
    <footer className="flex flex-col gap-6 items-center  w-full bg-blue-800 text-white min-h-96 px-4 pb-12">
      <div className="max-w-5xl flex flex-col items-center w-full">
        <div className="-translate-y-20 p-8 flex justify-between rounded-xl bg-sky-950 w-full items-center min-h-60 max-lg:flex-col max-lg:gap-6 max-sm:p-4 max-sm:gap-4 ">
          <p className="text-4xl font-bold max-lg:text-center">
            Start a project
          </p>
          <div className="text-center text-xl  flex flex-col gap-1 ">
            <p>Interested in working together?</p>
            <p>We should queue up a time to chat. </p>
            <p>I’ll buy the coffee</p>
          </div>
          <button className="font-bold text-2xl text-sky-600 py-3 px-8 rounded-2xl border-4 border-sky-600 w-fit mt-4 hover:bg-sky-600 hover:text-white transition-colors shadow-sm">
            Let's do this
          </button>
        </div>
        <div className="flex flex-col items-center w-full max-w-80 gap-12">
          <p className=" text-center text-2xl">
            Living, learning, & leveling up one day at a time.
          </p>
          <div className="w-full flex gap-6 justify-center">
            <button className="h-14 w-14 rounded-full border-4 border-white hover:bg-white hover:border-sky-600 transition-colors p-1 bg-gray-200 ">
              <img src="/twitter.svg" alt="twitter-svg" />
            </button>
            <button className="h-14 w-14 rounded-full border-4 border-white hover:bg-white hover:border-sky-600 transition-colors p-1 bg-gray-200 ">
              <img src="/linkedin.svg" alt="linkedin-svg" />
            </button>
            <button className="h-14 w-14 rounded-full border-4 border-white hover:bg-white hover:border-sky-600 transition-colors p-1 bg-gray-200 ">
              <img src="/github.svg" alt="github-svg" />
            </button>
            <button className="h-14 w-14 rounded-full border-4 border-white hover:bg-white hover:border-sky-600 transition-colors p-1 bg-gray-200 ">
              <img src="/gmail.svg" alt="gmail-svg" />
            </button>
          </div>
          <p>Handcrafted by me </p>
        </div>
      </div>
    </footer>
  );
}
