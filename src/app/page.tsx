import dynamic from "next/dynamic";

const ParticleContainer = dynamic(
  () => import("@/components/ParticleContainer"),
  { ssr: false }
);
const Hero = dynamic(() => import("@/components/Home/Hero"), { ssr: false });
export default function Home() {
  return (
    <div className="w-11/12 container mx-auto flex items-center justify-center min-h-[92vh] relative">
      <Hero />
      <ParticleContainer />
    </div>
  );
}
