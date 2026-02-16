"use client";

import { motion } from "framer-motion";
import { Check, X, Sparkles, Building2, Zap, Shield } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Başlangıç (Starter)",
        description: "Yeni başlayan butik işletmeler için dijital asistan.",
        price: "₺2.990",
        period: "/ay",
        icon: Sparkles,
        color: "from-blue-400 to-cyan-400",
        features: [
            "Aylık 500 AI Randevu İşlemi",
            "Akıllı Randevu Takvimi",
            "Sadece Türkçe Dil Desteği",
            "7/24 WhatsApp Yanıtlama",
            "Canlı Sohbete Geçiş (Human Handoff)"
        ],
        cta: "Hemen Başla",
        popular: false
    },
    {
        name: "Profesyonel (Pro)",
        description: "Büyüyen klinikler ve stüdyolar için operasyon yöneticisi.",
        price: "₺5.990",
        period: "/ay",
        icon: Zap,
        color: "from-violet-400 to-purple-500",
        features: [
            "Aylık 2.000 AI Randevu İşlemi",
            "Gelişmiş Aura AI Modeli",
            "Çoklu Dil Desteği (Sağlık Turizmi İçin)",
            "No-Show Koruması (24 Saat Öncesi Teyit)",
            "Otomatik Google Yorum Yönetimi",
            "Sesli Mesaj (Voice Note) Algılama"
        ],
        cta: "Ücretsiz Dene",
        popular: true
    },
    {
        name: "Business",
        description: "Ciro artışına odaklanan yoğun merkezler ve klinikler için.",
        price: "₺9.990",
        period: "/ay",
        icon: Shield,
        color: "from-rose-400 to-pink-500",
        features: [
            "Sınırsız AI Randevu İşlemi",
            "Aura Core Pro AI (En Üst Düzey Zeka)",
            "Proaktif Satış (Otomatik Upsell)",
            "Akıllı Boşluk Doldurucu (Flaş Teklifler)",
            "WhatsApp Toplu Kampanya Yönetimi",
            "Akıllı Sadakat Modeli (Ödül Sistemi)"
        ],
        cta: "Paketi Seç",
        popular: false
    },
    {
        name: "Enterprise (Kurumsal)",
        description: "Özel altyapı gerektiren zincir şubeler ve büyük markalar.",
        price: "Özel Teklif",
        period: "",
        icon: Building2,
        color: "from-emerald-400 to-teal-500",
        features: [
            "Zincir Şube / Çoklu Numara Yönetimi",
            "Kapora ve Ön Ödeme Entegrasyonu",
            "İşletmeye Özel AI Karakter Eğitimi",
            "Mevcut CRM/ERP Sistemlerine Entegrasyon",
            "Atanmış Özel Hesap Yöneticisi",
            "SLA Garantisi (Kesintisiz Hizmet)"
        ],
        cta: "İletişime Geç",
        popular: false
    }
];

type ComparisonRow = {
    isHeader?: boolean;
    name: string;
    starter?: string | boolean;
    pro?: string | boolean;
    business?: string | boolean;
    enterprise?: string | boolean;
};

const comparisonFeatures: ComparisonRow[] = [
    { isHeader: true, name: "⚙️ Temel Özellikler & Kapasite" },
    { name: "Aylık Randevu Kapasitesi", starter: "500", pro: "2.000", business: "Sınırsız", enterprise: "Sınırsız + Özel" },
    { name: "Personel / Takvim Sayısı", starter: "3 Personel", pro: "10 Personel", business: "Sınırsız", enterprise: "Sınırsız" },
    { name: "Hizmet Saatleri Desteği", starter: "Mesai Saatleri", pro: "7/24 Kesintisiz", business: "7/24 Kesintisiz", enterprise: "7/24 Kesintisiz" },
    { name: "Çoklu Şube Yönetimi", starter: false, pro: false, business: false, enterprise: "✅ (Sınırsız Şube)" },

    { isHeader: true, name: "🤖 Yapay Zeka Yetenekleri" },
    { name: "Yapay Zeka Modeli", starter: "Aura Basic", pro: "Aura Standard", business: "Aura Core Pro", enterprise: "Özel Eğitilmiş Model" },
    { name: "Dil Desteği", starter: "Sadece Türkçe", pro: "2 Dil (TR + EN)", business: "10+ Dil", enterprise: "50+ Global Dil" },
    { name: "Sesli Mesaj (Voice Note) Anlama", starter: false, pro: true, business: true, enterprise: true },
    { name: "İnsan Desteğine Geçiş (Handoff)", starter: true, pro: true, business: true, enterprise: true },
    { name: "AI Karakter & Ton Özelleştirme", starter: "Sabit", pro: "3 Farklı Ton", business: "Tam Özelleştirilebilir", enterprise: "İşletme Verisiyle Eğitim" },

    { isHeader: true, name: "📈 Gelir Artırıcı Odak (Satış)" },
    { name: "No-Show Koruması (24s Teyit)", starter: false, pro: true, business: true, enterprise: true },
    { name: "Proaktif Satış (AI Upsell)", starter: false, pro: false, business: true, enterprise: true },
    { name: "Boş Koltuk Doldurucu (Flaş İndirim)", starter: false, pro: false, business: true, enterprise: true },
    { name: "Kapora / Ön Ödeme Alma", starter: false, pro: false, business: true, enterprise: true },
    { name: "WhatsApp Kampanya Yöneticisi", starter: false, pro: false, business: "Aylık 1.000 Mesaj", enterprise: "Sınırsız" },

    { isHeader: true, name: "🤝 CRM & İtibar Yönetimi" },
    { name: "Akıllı Müşteri Veritabanı", starter: "Temel Düzey", pro: "Gelişmiş", business: "Gelişmiş + AI Notları", enterprise: "Gelişmiş + AI Notları" },
    { name: "Google Haritalar Yorum Toplama", starter: false, pro: true, business: true, enterprise: true },
    { name: "Kırmızı Alarm (Şikayet Bildirimi)", starter: false, pro: true, business: true, enterprise: true },
    { name: "Akıllı Sadakat Sistemi (Ödüller)", starter: false, pro: false, business: true, enterprise: true },
    { name: "Ciro ve Performans Raporlama", starter: false, pro: "Temel Raporlar", business: "Detaylı Analitik", enterprise: "Gelişmiş Özel Raporlar" },

    { isHeader: true, name: "🛡️ Altyapı & Destek" },
    { name: "Sunucu ve Altyapı", starter: "Paylaşımlı", pro: "Paylaşımlı", business: "Paylaşımlı", enterprise: "Dedicated (Özel Sunucu)" },
    { name: "API Erişimi", starter: false, pro: false, business: "Temel API", enterprise: "Full API (Sınırsız)" },
    { name: "Beyaz Etiket (White Label)", starter: false, pro: false, business: false, enterprise: "✅ (Kendi Markanız)" },
    { name: "Müşteri Desteği", starter: "E-posta", pro: "Öncelikli E-posta", business: "Canlı Destek", enterprise: "Özel Hesap Yöneticisi" },
];

export function Pricing() {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden bg-slate-950">
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Yatırımınızın Karşılığını Fazlasıyla Alın</h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        İşletmenizin büyüklüğüne uygun paketi seçin. Gizli ücret yok, taahhüt yok.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-32">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={cn(
                                "relative flex flex-col p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300",
                                plan.popular
                                    ? "bg-white/10 border-primary/50 shadow-2xl shadow-primary/10 scale-105 z-10"
                                    : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                                    En Popüler
                                </div>
                            )}

                            <div className="mb-6">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                                    <plan.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-sm text-slate-400 min-h-[40px]">{plan.description}</p>
                            </div>

                            <div className="mb-6">
                                <span className="text-3xl font-bold text-white">{plan.price}</span>
                                <span className="text-slate-500 text-sm">{plan.period}</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-sm text-slate-300">
                                        <Check className="h-4 w-4 text-green-400 mr-2 mt-0.5 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.popular ? "default" : "outline"}
                                className={cn(
                                    "w-full rounded-xl py-6",
                                    plan.popular ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 border-0 hover:opacity-90" : "border-white/20 hover:bg-white/10 text-white"
                                )}
                            >
                                {plan.cta}
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-md overflow-hidden"
                >
                    <div className="p-8 border-b border-white/10">
                        <h3 className="text-2xl font-bold text-white text-center">Özellik Karşılaştırması</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5">
                                    <th className="p-6 text-slate-400 font-medium border-b border-white/10 min-w-[200px]">Özellikler</th>
                                    <th className="p-6 text-white font-bold border-b border-white/10 min-w-[150px] text-center">Başlangıç</th>
                                    <th className="p-6 text-violet-400 font-bold border-b border-white/10 min-w-[150px] text-center">Profesyonel</th>
                                    <th className="p-6 text-rose-400 font-bold border-b border-white/10 min-w-[150px] text-center">Business</th>
                                    <th className="p-6 text-emerald-400 font-bold border-b border-white/10 min-w-[150px] text-center">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonFeatures.map((row, i) => (
                                    row.isHeader ? (
                                        <tr key={i} className="bg-white/5">
                                            <td colSpan={5} className="p-4 text-white font-bold border-b border-white/10">
                                                {row.name}
                                            </td>
                                        </tr>
                                    ) : (
                                        <tr key={i} className="hover:bg-white/5 transition-colors">
                                            <td className="p-6 text-slate-300 border-b border-white/5 font-medium">{row.name}</td>
                                            <td className="p-6 text-slate-400 border-b border-white/5 text-center">
                                                {typeof row.starter === "boolean" ? (row.starter ? <Check className="h-5 w-5 text-green-400 mx-auto" /> : <X className="h-5 w-5 text-slate-600 mx-auto" />) : row.starter}
                                            </td>
                                            <td className="p-6 text-slate-400 border-b border-white/5 text-center">
                                                {typeof row.pro === "boolean" ? (row.pro ? <Check className="h-5 w-5 text-green-400 mx-auto" /> : <X className="h-5 w-5 text-slate-600 mx-auto" />) : row.pro}
                                            </td>
                                            <td className="p-6 text-slate-400 border-b border-white/5 text-center">
                                                {typeof row.business === "boolean" ? (row.business ? <Check className="h-5 w-5 text-green-400 mx-auto" /> : <X className="h-5 w-5 text-slate-600 mx-auto" />) : row.business}
                                            </td>
                                            <td className="p-6 text-slate-400 border-b border-white/5 text-center">
                                                {typeof row.enterprise === "boolean" ? (row.enterprise ? <Check className="h-5 w-5 text-green-400 mx-auto" /> : <X className="h-5 w-5 text-slate-600 mx-auto" />) : row.enterprise}
                                            </td>
                                        </tr>
                                    )
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
