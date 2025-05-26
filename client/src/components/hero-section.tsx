import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Intelligent 
              <span className="text-primary"> Digital Solutions</span>
              {" "}for Modern Business
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We empower businesses with intelligent automation, secure web development, and impactful digital strategies. Transform your operations with cutting-edge technology and practical business insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("services")}
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 transform hover:scale-105 transition-all shadow-lg"
              >
                Explore Our Services
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-r from-primary to-accent rounded-3xl p-8 shadow-2xl">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-3 bg-white/30 rounded w-3/4"></div>
                  <div className="h-3 bg-white/30 rounded w-1/2"></div>
                  <div className="h-3 bg-white/30 rounded w-5/6"></div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="bg-white/10 backdrop-blur rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                  <span className="text-white font-semibold">Analytics</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-white/80 text-sm">
                    <span>Conversion Rate</span>
                    <span>+24%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
