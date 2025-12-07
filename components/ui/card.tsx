import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface CardProps {
    title: string;
    description: string;
    href: string;
    imageSrc?: string; // Placeholder for now, maybe use video or image
    className?: string;
    children?: React.ReactNode;
}

export function Card({ title, description, href, className, children }: CardProps) {
    return (
        <Link
            href={href}
            className={cn(
                "group block relative overflow-hidden rounded-xl bg-muted/50 border border-border/50 hover:border-foreground/20 transition-all duration-300 hover:shadow-lg",
                className
            )}
        >
            <div className="aspect-video w-full bg-muted overflow-hidden">
                {children}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    {title}
                    <ArrowUpRight size={18} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-muted-foreground">{description}</p>
            </div>
        </Link>
    );
}
