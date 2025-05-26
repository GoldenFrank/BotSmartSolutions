import { motion } from "framer-motion";
import { Code, Bot, TrendingUp, Lightbulb, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom, secure, and mobile-friendly websites tailored to your brand and optimized for performance.",
    features: ["React.js & Next.js", "Mobile Responsive", "SEO Optimized"],
    color: "bg-primary-100 group-hover:bg-primary text-primary group-hover:text-white"
  },
  {
    icon: Bot,
    title: "Automation & Chatbots",
    description: "Smart bot solutions to streamline customer interactions and business processes with AI-powered automation.",
    features: ["AI-Powered Bots", "Process Automation", "24/7 Support"],
    color: "bg-accent-100 group-hover:bg-accent text-accent group-hover:text-white"
  },
  {
    icon: TrendingUp,
    title: "Digital Strategy & Marketing",
    description: "SEO, content strategy, and social media campaigns designed to maximize visibility and ROI.",
    features: ["SEO Optimization", "Content Strategy", "Social Media"],
    color: "bg-purple-100 group-hover:bg-purple-600 text-purple-600 group-hover:text-white"
  },
  {
    icon: Lightbulb,
    title: "Tech Consulting",
    description: "Personalized guidance on digital tools and strategies to boost efficiency and scalability.",
    features: ["Strategy Planning", "Tool Selection", "Growth Scaling"],
    color: "bg-orange-100 group-hover:bg-orange-600 text-orange-600 group-hover:text-white"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to transform your business operations and accelerate growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors ${service.color}`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-500">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
