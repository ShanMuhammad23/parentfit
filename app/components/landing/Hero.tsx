import Link from "next/link";
import { Play } from "lucide-react";
const Hero = () => {
  return (

    <div
      className="px-7 lg:px-10 max-w-6xl mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center pb-16 lg:pb-20 pt-16 md:pt-20 dark:bg-gray-800 mt-12 md:mt-16">
      <div className="lg:w-[650px] lg:px-5 flex flex-col gap-y-5">
        <h2
          className="text-4xl md:text-5xl xl:text-[50px] leading-[1.2] md:max-w-xl md:mx-auto md:text-center lg:text-left lg:mx-0 lg:max-w-full font-semibold dark:text-white">
          Because Mum&apos;s Health Matters- Even 10,000 KM away
        </h2>
        <p className="text-sm md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left dark:text-gray-300 font-dm-sans">
          Personal training, diet & welfare check-ins for parents - managed by you, delivered by experts</p>
        <div className="flex gap-x-5 flex-col gap-y-2.5 lg:flex-row">
          <Link href="#"
            className="flex w-full lg:w-fit items-center text-white justify-center rounded-lg bg-primary px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"><span>Choose a Plan

            </span>
          </Link>
          <Link href="#"
            className="flex w-full lg:w-fit items-center text-primary justify-center gap-x-2 rounded-lg border border-primary px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200 bg-primary/10 dark:text-white dark:bg-transparent dark:border-gray-500/50"> <Play className="w-4 h-4" /> <span>
             Watch 60-sec Overview
            </span>
          </Link>
        </div>
      </div>
      <div className="hero-image md:px-5 lg:px-0 w-full lg:w-1/2 rounded-3xl md:pt-2 lg:pt-0 relative isolate z-10">
        <img className="rounded-3xl w-full"
          src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8c2VydmljZXxlbnwwfDB8fHwxNzEyMjIyNjQ3fDA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="" />
      </div>
    </div>

  );
};

export default Hero;