import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-200" : "bg-white/80 backdrop-blur-md border-b border-gray-200"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">BotSmart</span>
              <span className="text-xl font-light text-gray-600">Solutions</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>

              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-white hover:bg-primary/90"
              >
                Contact
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-primary"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-primary"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-primary"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-primary"
              >
                About
              </button>

              <Button 
                onClick={() => scrollToSection("contact")}
                className="w-full mt-2 bg-primary text-white hover:bg-primary/90"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
