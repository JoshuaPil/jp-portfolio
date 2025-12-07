import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CruiseFlightSearch() {
    return (
        <main className="flex min-h-screen flex-col">
            <Header />

            <Section className="pt-32 pb-12">
                <Button variant="ghost" asChild className="mb-8 pl-0 hover:pl-2 transition-all">
                    <Link href="/#works" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                        <ArrowLeft size={18} /> Back to Works
                    </Link>
                </Button>

                <div className="space-y-6 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Connected Flights to Cruise</h1>
                    <p className="text-xl text-muted-foreground">
                        Allow guests to make flight reservations and connect to their cruise.
                    </p>
                </div>
            </Section>

            <Section className="bg-muted/20">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">What we're solving</h3>
                        <p className="text-muted-foreground">
                            Guests need a seamless way to book flights that align perfectly with their cruise itinerary, reducing the stress of travel planning and ensuring they arrive on time.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">How we'll measure success</h3>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li>Increase in flight attach rate</li>
                            <li>Reduction in support calls related to travel</li>
                            <li>Improved guest satisfaction scores</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Role</h3>
                        <p className="text-muted-foreground">
                            Lead Product Designer responsible for end-to-end experience, from research to high-fidelity prototyping.
                        </p>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="space-y-12 max-w-4xl mx-auto">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Users need a reason in order to make a change</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We discovered that users were hesitant to book flights through the cruise line due to perceived higher costs and lack of control. We needed to provide clear value propositions: price matching, guaranteed arrival (protection against delays), and 24/7 support.
                        </p>
                    </div>

                    <div className="aspect-video bg-muted rounded-xl flex items-center justify-center border border-border">
                        <span className="text-muted-foreground">Process / Wireframe Placeholder</span>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Personalization</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            By leveraging guest data, we could pre-populate flight searches with the correct dates and airports based on their cruise booking and home address, significantly reducing friction.
                        </p>
                    </div>

                    <div className="aspect-video bg-muted rounded-xl flex items-center justify-center border border-border">
                        <span className="text-muted-foreground">UI Design Placeholder</span>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
