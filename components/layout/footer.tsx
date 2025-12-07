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
