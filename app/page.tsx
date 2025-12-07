import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { VideoPlayer } from "@/components/ui/video-player";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <VideoPlayer
            src="/BW_MAIN.mp4"
            className="w-full h-full rounded-none"
            autoPlay
            muted
            loop
          />
          <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            A systems-level product design thinker aiming to create powerful & valuable experiences.
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
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Laws of UX</h2>
            <p className="text-lg text-muted-foreground">
              Best practices and heuristics that guide my design decisions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Aesthetic-Usability Effect",
                desc: "Users often perceive aesthetically pleasing design as design that’s more usable."
              },
              {
                name: "Doherty Threshold",
                desc: "Productivity soars when a computer and its users interact at a pace (<400ms) that ensures that neither has to wait on the other."
              },
              {
                name: "Fitts’s Law",
                desc: "The time to acquire a target is a function of the distance to and size of the target."
              },
              {
                name: "Hick’s Law",
                desc: "The time it takes to make a decision increases with the number and complexity of choices."
              },
              {
                name: "Jakob’s Law",
                desc: "Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know."
              },
              {
                name: "Law of Proximity",
                desc: "Objects that are near, or proximate to each other, tend to be grouped together."
              },
              {
                name: "Miller’s Law",
                desc: "The average person can only keep 7 (plus or minus 2) items in their working memory."
              },
              {
                name: "Occam’s Razor",
                desc: "Among competing hypotheses that predict equally well, the one with the fewest assumptions should be selected."
              }
            ].map((law) => (
              <div key={law.name} className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-bold mb-2">{law.name}</h3>
                <p className="text-sm text-muted-foreground">{law.desc}</p>
              </div>
            ))}
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
    </main>
  );
}
