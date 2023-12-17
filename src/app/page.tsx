import ParticleContainer from "@/components/ParticleContainer";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-[92vh] relative">
      <Hero />
      <ParticleContainer />
    </div>
  );
}
