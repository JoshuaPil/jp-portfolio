import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-border py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Joshua Piller. All rights reserved.
                </div>
                <div className="flex items-center gap-6">
                    <Link
                        href="https://substack.com/@joshuapiller"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Substack"
                    >
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
                            <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                        </svg>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/joshuapiller/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        LinkedIn
                    </Link>
                </div>
            </div>
        </footer>
    );
}
