import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 bg-[#020617] text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-sm text-muted-foreground">
                        &copy; 2026 Aura by <a href="https://stratilla.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline">Stratilla AI Solutions</a>. All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-6">
                    <Link href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">KVKK</Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Gizlilik Politikası</Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Kullanım Koşulları</Link>
                </div>
            </div>
        </footer>
    );
}
