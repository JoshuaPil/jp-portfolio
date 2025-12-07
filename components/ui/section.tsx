import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
    id?: string;
    className?: string;
    children: ReactNode;
    fullWidth?: boolean;
}

export function Section({ id, className, children, fullWidth = false }: SectionProps) {
    return (
        <section id={id} className={cn("py-16 md:py-24", className)}>
            <div className={cn("mx-auto px-4 md:px-6", fullWidth ? "w-full max-w-none" : "max-w-7xl")}>
                {children}
            </div>
        </section>
    );
}
