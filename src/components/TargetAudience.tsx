"use client";
import { motion } from "framer-motion";
import { Scissors, Stethoscope, Sparkles } from "lucide-react";

const audiences = [
    {
        icon: Sparkles,
        title: "Güzellik & Estetik Merkezleri",
        color: "from-rose-500 to-pink-600",
        description: "Danışan deneyimini dijitalleştirin. Randevu yönetiminden işlem sonrası takibe kadar kusursuz bir süreç sunun."
    },
    {
        icon: Scissors,
        title: "High-End Kuaför & Saç Stüdyoları",
        color: "from-violet-500 to-purple-600",
        description: "Telefon trafiğini yapay zekaya devredin. Sanatınıza odaklanın, randevularınızı Aura yönetsin."
    },
    {
        icon: Stethoscope,
        title: "Diş Klinikleri & Sağlık Turizmi",
        color: "from-cyan-500 to-blue-600",
        description: "50+ dilde anlık tercüme ve 7/24 asistan desteği ile global hasta portföyünüzü genişletin."
    }
];

export function TargetAudience() {
    return (
        <section id="audience" className="py-24 bg-slate-900 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Kimler İçin Geliştirildi?</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {audiences.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative group overflow-hidden rounded-2xl p-8 h-full bg-slate-800/50 border border-white/5 hover:border-white/10 transition-all"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-4 mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon className="w-full h-full text-white" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
