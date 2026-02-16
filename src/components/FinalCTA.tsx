"use client";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-indigo-950/50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight"
                >
                    İşletmenizi Geleceğe Taşımaya Hazır mısınız?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
                >
                    Kurulum sadece 2 saat sürer. Siz kahvenizi yudumlarken, <span className="text-primary font-semibold">Aura Intelligence</span> asistanınız mesaiye başlasın.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Button size="lg" className="text-lg px-10 py-8 h-auto bg-white text-black hover:bg-slate-100 font-bold shadow-2xl shadow-white/20 rounded-full scale-100 hover:scale-105 transition-transform duration-200">
                        Hemen İletişime Geç
                        <ArrowRight className="ml-2 h-6 w-6" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
