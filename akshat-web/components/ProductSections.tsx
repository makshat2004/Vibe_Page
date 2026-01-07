'use client';

import { motion } from 'framer-motion';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
};

export default function ProductSections() {
    return (
        <div className="bg-[#050505] text-white overflow-hidden">

            {/* Philosophy Section */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24" id="product">
                <motion.div
                    {...fadeIn}
                    className="flex flex-col md:flex-row justify-between items-start gap-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white/90 max-w-md">
                        Designed for the <br />
                        <span className="text-white/40">Next Generation.</span>
                    </h2>
                    <div className="max-w-xl text-lg text-white/60 leading-relaxed font-light">
                        <p>
                            We stripped away the unnecessary. No RGB clutter, no complex software.
                            Just pure, raw input performance wrapped in a unibody aerospace-grade shell.
                            The Akshat X isn't just a controller; it's an extension of your will.
                        </p>
                        <p className="mt-6">
                            Every curve was sculpted for the human hand. Every button press
                            calibrated for instant response.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-6 md:px-12 bg-white/5 scroll-mt-24" id="experience">
                <div className="max-w-7xl mx-auto">
                    <motion.h3
                        {...fadeIn}
                        className="text-sm font-bold uppercase tracking-widest text-white/40 mb-12"
                    >
                        Core Features
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "Mechanical Switches", desc: "Tactile, clicky, and rated for 80 million cycles. Feel every input." },
                            { title: "Zero Latency", desc: "Our proprietary wireless protocol cuts latency to sub-1ms levels." },
                            { title: "8 Programmable Triggers", desc: "Map complex macros to the ergonomic back paddles on the fly." },
                            { title: "Adaptive Haptics", desc: "Sense the texture of the virtual world with HD rumble engines." }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-white/10 rounded-full mb-6 group-hover:bg-white/20 transition-colors" />
                                <h4 className="text-2xl font-bold mb-3">{feature.title}</h4>
                                <p className="text-white/60">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Specs */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24" id="specs">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div {...fadeIn}>
                        <h2 className="text-4xl font-bold tracking-tight mb-8">Technical<br />Specifications</h2>
                        <p className="text-white/60 mb-8">
                            Built with precision components usually reserved for medical devices.
                        </p>
                        <button className="text-white border-b border-white pb-1 hover:text-white/70 transition-colors">
                            Download full datasheet
                        </button>
                    </motion.div>

                    <motion.div
                        {...fadeIn}
                        className="grid grid-cols-1 gap-6 text-sm"
                    >
                        {[
                            { label: "Weight", value: "210g" },
                            { label: "Connectivity", value: "2.4GHz / Bluetooth 5.3" },
                            { label: "Battery Life", value: "40 Hours" },
                            { label: "Polling Rate", value: "1000Hz" },
                            { label: "Materials", value: "Magnesium / Carbon Fiber" },
                            { label: "Compatibility", value: "PC / PS5 / Mobile" }
                        ].map((spec, i) => (
                            <div key={i} className="flex justify-between py-4 border-b border-white/10">
                                <span className="text-white/40">{spec.label}</span>
                                <span className="font-mono">{spec.value}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Purchase Section */}
            <section className="py-32 px-6 md:px-12 text-center bg-gradient-to-t from-white/10 to-transparent">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">Akshat X</h2>
                    <div className="flex justify-center gap-4 mb-4 font-medium text-white/50">
                        <span>Void Black</span>
                        <span>•</span>
                        <span>Snow White</span>
                    </div>
                    <p className="text-3xl font-light mb-12">$199</p>

                    <button className="bg-white text-black px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-200 transition-all hover:scale-105 active:scale-95">
                        Pre-order Now
                    </button>
                    <p className="mt-6 text-sm text-white/40">Shipping starts Q3 2026</p>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 md:px-12 border-t border-white/10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-white/20 rounded-md" />
                        <span className="font-bold text-white/80">Akshat Inc.</span>
                    </div>
                    <div className="flex gap-8 text-sm text-white/50">
                        <a href="#" className="hover:text-white transition-colors">Support</a>
                        <a href="#" className="hover:text-white transition-colors">Warranty</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    </div>
                    <p className="text-xs text-white/30">© 2026 All rights reserved.</p>
                </div>
            </footer>

        </div>
    );
}
