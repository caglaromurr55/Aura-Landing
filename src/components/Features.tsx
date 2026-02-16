"use client";
import { motion } from "framer-motion";
import { Globe, Clock, TrendingUp, CalendarCheck } from "lucide-react";

const features = [
    {
        icon: Globe,
        title: "Çok Dilli Neural Network",
        description: "Basit çeviri değil, kültürel nüansları anlayan neural network tabanlı iletişim. Arapça, İngilizce, Rusça ve 50+ dilde anadil seviyesinde yanıt."
    },
    {
        icon: Clock,
        title: "Akıllı Slot Optimizasyonu",
        description: "İptal edilen randevuları milisaniyeler içinde analiz eder ve bekleme listesindeki en uygun adaya otomatik teklif sunarak doluluk oranını %99'a çıkarır."
    },
    {
        icon: TrendingUp,
        title: "Prediktif Satış (Upsell AI)",
        description: "Müşteri geçmişini analiz ederek, işlem sırasında ihtiyaç duyulabilecek ek hizmetleri (örn: bakım kürü) en doğru zamanda önerir."
    },
    {
        icon: CalendarCheck,
        title: "No-Show Koruma Kalkanı",
        description: "Davranışsal analiz ile gelmeme ihtimali yüksek randevuları önceden tespit eder, teyit mekanizmasını sıkılaştırır ve gelir kaybını önler."
    }
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-background relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent font-medium tracking-wider uppercase text-sm">Özellikler</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">İşletmenizi Otopilota Alıyoruz</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Sadece bir randevu asistanı değil, işletmenizin büyüme motoru.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/50 transition-all hover:shadow-2xl hover:shadow-secondary/10 backdrop-blur-sm relative overflow-hidden"
                        >
                            <div className="absolute -right-20 -top-20 w-40 h-40 bg-secondary/20 rounded-full blur-[80px] group-hover:bg-secondary/30 transition-colors" />

                            <div className="flex items-start space-x-4 relative z-10">
                                <div className="bg-black/50 p-3 rounded-xl border border-white/10 group-hover:border-secondary/50 transition-colors">
                                    <feature.icon className="h-8 w-8 text-secondary group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-secondary transition-colors">{feature.title}</h3>
                                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
