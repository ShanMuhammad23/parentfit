import Hero from "./components/landing/Hero";
import HowItWorks from "./components/landing/HowItWorks";
import Benefits from "./components/landing/Benefits";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <HowItWorks />
      <Benefits />
    </div>
  );
}
