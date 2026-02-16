"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Code2, Trophy } from "lucide-react";

const trustItems = [
    {
        icon: Code2,
        title: "Yerli Teknoloji ve REST API",
        description: (
            <>
                Kendi geliştirdiğimiz REST API'ler aracılığıyla %100 yerli ve milli altyapı sunuyoruz. Verileriniz yurt dışına çıkmaz.
            </>
        )
    },
    {
        icon: ShieldCheck,
        title: "Veri Güvenliği",
        description: (
            <>
                Türkiye'nin verisi Türkiye'de kalır. KVKK uyumlu altyapımızla müşteri bilgileriniz yerel sunucularda en üst düzey şifreleme ile korunur.
            </>
        )
    },
    {
        icon: Trophy,
        title: "İleri Yapay Zeka Mühendisliği",
        description: (
            <>
                Standart modeller yerine, <a href="https://stratilla.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Stratilla AI Solutions</a> mühendisleri tarafından Türkiye'de geliştirilen özgün yapay zeka modellerini kullanıyoruz.
            </>
        )
    }
];

export function TrustValues() {
    return (
        <section id="trust" className="py-20 bg-slate-900/50 border-t border-white/5 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Türk Mühendisliği, Global Standartlar.</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trustItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors backdrop-blur-sm overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-gray-800 to-black w-14 h-14 rounded-xl border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-white/5">
                                    <item.icon className="h-7 w-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                                <div className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{item.description}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
