
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-fgts-600 font-bold text-xl md:text-2xl">
            MGA<span className="text-accent-green">Antecipa</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#beneficios" className="text-foreground hover:text-fgts-500 font-medium">
              Benefícios
            </a>
            <a href="#como-funciona" className="text-foreground hover:text-fgts-500 font-medium">
              Como Funciona
            </a>
            <a href="#perguntas-frequentes" className="text-foreground hover:text-fgts-500 font-medium">
              Dúvidas
            </a>
            <a href="#contato" className="text-foreground hover:text-fgts-500 font-medium">
              Contato
            </a>
            <div className="flex items-center">
              <Phone size={18} className="mr-2 text-fgts-500" />
              <span className="font-semibold">41 99528-1595</span>
            </div>
            <Button className="bg-fgts-500 hover:bg-fgts-600">
              Solicitar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4 px-4 flex flex-col space-y-4">
            <a href="#beneficios" className="text-foreground hover:text-fgts-500 font-medium py-2">
              Benefícios
            </a>
            <a href="#como-funciona" className="text-foreground hover:text-fgts-500 font-medium py-2">
              Como Funciona
            </a>
            <a href="#perguntas-frequentes" className="text-foreground hover:text-fgts-500 font-medium py-2">
              Dúvidas
            </a>
            <a href="#contato" className="text-foreground hover:text-fgts-500 font-medium py-2">
              Contato
            </a>
            <div className="flex items-center py-2">
              <Phone size={18} className="mr-2 text-fgts-500" />
              <span className="font-semibold">41 99528-1595</span>
            </div>
            <Button className="bg-fgts-500 hover:bg-fgts-600 w-full">
              Solicitar Agora
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
