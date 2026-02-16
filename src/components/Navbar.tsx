"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Özellikler", href: "/#features" },
    { name: "Fiyatlandırma", href: "/pricing" },
    { name: "Kimler İçin?", href: "/#audience" },
    { name: "Yerli Teknoloji", href: "/#trust" },
    { name: "İletişim", href: "/#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="relative h-10 w-10">
                            <Image
                                src="/logo.png"
                                alt="Aura Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-violet-500">
                            Aura
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                            Müşteri Paneli
                        </Button>
                        <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                            Hemen Başla
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-muted-foreground hover:text-foreground p-2"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border/40"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 px-3 py-2 rounded-md"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex flex-col space-y-3">
                                <Button variant="ghost" className="w-full justify-start">
                                    Müşteri Paneli
                                </Button>
                                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                                    Hemen Başla
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
