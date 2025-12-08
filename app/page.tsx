import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { VideoPlayer } from "@/components/ui/video-player";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StrategyAnimation } from "@/components/ui/strategy-animation";
import { HeroTitle } from "@/components/ui/hero-title";
import { LawsCarousel } from "@/components/ui/laws-carousel";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { HeroBackground } from "@/components/ui/hero-background";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Video with Color Reveal */}
        <HeroBackground />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
          <HeroTitle
            text="A systems level product design thinker"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
          />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Aiming to create powerful & valuable experiences.
          </p>

        </div>
      </section>

      {/* What Section */}
      <Section id="about" className="bg-muted/20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Create</h3>
            <p className="text-muted-foreground">
              Build experiences using design foundations expressed by UI regions, surfaces, and components that address design from both a broad and detailed perspective.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Unify</h3>
            <p className="text-muted-foreground">
              Utilize innovation and technology to deliver unified user experiences across platforms and devices on flexible foundations for brand expression.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Connect</h3>
            <p className="text-muted-foreground">
              Using adaptable connected workflows to support best practices of UX and streamline collaboration between designers and developers helping teams build better products, faster.
            </p>
          </div>
        </div>
      </Section>

      {/* Design Strategies */}
      <Section id="principles">
        <div className="space-y-16">
          {/* Intro & Animation */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Design Strategies</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I understand the impact of the research insights on the UX that enables user-centricity and create an outcome-based roadmap focusing on the vision. The vision is the ultimate north star and choosing what to do—and what not to do—is the definition of strategy.
              </p>
            </div>
            <div className="h-[300px] md:h-[400px] w-full">
              <StrategyAnimation />
            </div>
          </div>

          {/* Laws of UX Grid */}
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Laws of UX</h3>
              <p className="text-muted-foreground">
                Best practices and heuristics that guide my design decisions.
              </p>
            </div>
            <LawsCarousel />
          </div>
        </div>
      </Section>

      {/* Connected Workflows */}
      <Section id="identities" className="bg-muted/20">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Build Connected Workflows</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            I simplify the design-to-code process using a component-driven design approach to make products scalable, usable and easy to switch between design and code workflows.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <VideoPlayer
            src="/Material_Pass_01.mp4"
            className="aspect-video"
            autoPlay
            muted
            loop
          />
          <VideoPlayer
            src="/dsm.mp4"
            className="aspect-video"
            autoPlay
            muted
            loop
          />
        </div>
      </Section>

      {/* Design Systems */}
      <Section id="design-systems">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Establish & Manage Design Systems</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I believe a product's experience will evolve constantly with the user’s needs, challenges, behaviors, expectations as well as with new tools and technologies. I leverage design systems as the single source of truth allows multi-disciplinary teams to collaborative design, realize and develop to improve and scale.
          </p>
        </div>
      </Section>

      {/* Rapid Prototypes */}
      <Section id="prototypes" className="bg-muted/20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <VideoPlayer
              src="/responsive-scaling.mp4"
              className="aspect-video"
              autoPlay
              muted
              loop
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Build Rapid Prototypes</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I use spatial and hierarchical relationships between elements in a users journeys by bringing everything closer to the final product as an interactive prototype to help ideate, test and get early feedback from the product team and test users.
            </p>
          </div>
        </div>
      </Section>



      <Footer />
    </main >
  );
}
