import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Telehealth() {
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
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Telehealth & Clinical Task Manager</h1>
                    <p className="text-xl text-muted-foreground">
                        Long-distance patient and clinician contact, care, advice, reminders, education, intervention and monitoring.
                    </p>
                </div>
            </Section>

            <Section className="bg-muted/20">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">The Challenge</h3>
                        <p className="text-muted-foreground">
                            Administrative tasks are one of the big drivers of high healthcare costs and time consumption. Automating routine processes like patient task notification management helps medical clinics and hospitals minimize their administrative expenses. It does this by reducing the amount of follow up tasks the staff is expected to perform to ensure communication has been delivered, which lets them make the most of their working hours.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Hypothesis</h3>
                        <p className="text-muted-foreground">
                            We believed that staff members will benefit from an improved user centric approach specific to their assigned tasks and reduce neglect with the introduction of automated notifications. Efficiency, accuracy and fewer errors directly benefit the facility’s bottom line.
                        </p>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="space-y-12 max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold">Why</h3>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li>Reduce missed nursing cares – improve task management flow.</li>
                                <li>Reduce phone calls – automate communication.</li>
                                <li>Improve usability with an efficient interface.</li>
                                <li>Create a notification schema to enable users.</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold">How</h3>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li>Provided a cloud based web application.</li>
                                <li>Improved usability and personalization based on role.</li>
                                <li>Introduced a Notification Schema.</li>
                                <li>Provided a Flexible, scalable and configurable user interface.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="aspect-video bg-muted rounded-xl flex items-center justify-center border border-border">
                        <span className="text-muted-foreground">Dashboard UI Placeholder</span>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Measuring Success</h2>
                        <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
                            <li>Reduction of task errors</li>
                            <li>Reduction of calls</li>
                            <li>Reduction of time to complete a task</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Role</h2>
                        <p className="text-lg text-muted-foreground">
                            Lead UX Architect and Design Lead from conception to implementation.
                        </p>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
