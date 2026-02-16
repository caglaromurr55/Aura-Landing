"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { ArrowRight, Sparkles, Cpu } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-[#020617]">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-40 mix-blend-screen" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] opacity-40 mix-blend-screen" />
                <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-accent/10 rounded-full blur-[96px] opacity-30" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-8 backdrop-blur-sm shadow-xl shadow-primary/5"
                >
                    <Cpu className="h-4 w-4 text-accent" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        <a href="https://stratilla.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4">Stratilla AI Solutions</a> Mühendisliği ile Geliştirildi
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight"
                >
                    Güzellik ve Yapay Zeka.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-violet-500 animate-gradient-x">
                        Kusursuz Uyum.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    Sıradan bir randevu botu değil; işletmeniz için eğitilmiş, yerel sunucularda çalışan ve
                    <span className="text-white font-medium"> %100 Yerli REST API</span> mimarisine sahip
                    yapay zeka asistanı. Estetik merkezinizin dijital aurasını yükseltin.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                >
                    <Button size="lg" className="h-14 px-8 text-base bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-lg shadow-rose-500/25 border-0 rounded-full">
                        Ücretsiz Demo Talep Et
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md rounded-full">
                        Teknolojimizi İnceleyin
                    </Button>
                </motion.div>

                {/* Visual Decoration - Abstract Dashboard */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="mt-20 relative max-w-5xl mx-auto hidden md:block perspective-1000"
                >
                    <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-2 shadow-2xl shadow-indigo-500/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-violet-500/5 rounded-2xl" />

                        {/* Floating Badge */}
                        <div className="absolute -top-6 -right-6 animate-bounce delay-1000 z-20">
                            <div className="bg-[#020617] p-4 rounded-2xl border border-white/10 shadow-xl flex items-center space-x-3">
                                <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                                <div className="flex flex-col">
                                    <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">REST API Active</span>
                                    <span className="text-white text-sm font-medium">0.05ms Latency</span>
                                </div>
                            </div>
                        </div>

                        {/* Mock Content */}
                        <div className="bg-[#0f172a] rounded-xl overflow-hidden h-[500px] border border-white/5 relative">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
                            <div className="relative h-full flex flex-col items-center justify-center p-12 text-center z-10">
                                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-rose-500 to-violet-600 flex items-center justify-center mb-6 shadow-2xl shadow-rose-500/20">
                                    <Sparkles className="h-12 w-12 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Aura Core</h3>
                                <p className="text-slate-400 max-w-md">Gerçek zamanlı dil işleme ve randevu optimizasyon motoru devrede.</p>

                                <div className="mt-8 grid grid-cols-3 gap-4 w-full max-w-2xl">
                                    {[
                                        { label: "Günlük Randevu", val: "48", col: "text-rose-400" },
                                        { label: "Engellenen No-Show", val: "%100", col: "text-emerald-400" },
                                        { label: "Ekstra Ciro", val: "₺12.5K", col: "text-violet-400" }
                                    ].map((stat, i) => (
                                        <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-4 backdrop-blur-sm">
                                            <div className={`text-2xl font-bold ${stat.col} mb-1`}>{stat.val}</div>
                                            <div className="text-xs text-slate-500 uppercase tracking-widest">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
