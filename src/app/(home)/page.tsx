import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import CTA from "@/components/sections/cta";
import FAQ from "@/components/sections/faq";
import Features from "@/components/sections/features";
import Hero from "@/components/sections/hero";
import HowWeWork from "@/components/sections/how-we-work";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Background layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("/bg-noise.png")`,
          opacity: 0.06,
          zIndex: 0,
        }}
      />

      {/* Content layer */}
      <div
        className="relative backdrop-blur"
        style={{
          backdropFilter: "blur(10px)",
          zIndex: 1,
        }}
      >
        <Header />
        <Hero />
        <HowWeWork />
        <Features />
        <FAQ />
        <Services />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
