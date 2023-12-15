import ParticleContainer from "@/components/ParticleContainer";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <div className="container mx-auto h-full relative">
      <Hero />
      <ParticleContainer />
    </div>
  );
}
