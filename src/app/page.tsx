import dynamic from "next/dynamic";
const ParticleContainer = dynamic(
  () => import("@/components/ParticleContainer"),
  { ssr: false }
);
const Hero = dynamic(() => import("@/components/Home/Hero"), { ssr: false });

export default function Home() {
  return (
    <div className="w-[min(calc(100vw-3rem),1200px)] md:container mx-auto flex items-center justify-center min-h-dvh relative">
      <Hero />
      <ParticleContainer />
    </div>
  );
}
