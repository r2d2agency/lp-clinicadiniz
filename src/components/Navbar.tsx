import { useState, useEffect } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-clinica-diniz-full.png";
import EbookDownloadButton from "@/components/EbookDownloadButton";

const EBOOK_URL = "/ebook-bruna-diniz.pdf";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" },
];

const WHATSAPP_URL = "https://wa.me/5511941601952?text=Olá,%20gostaria%20de%20agendar%20um%20atendimento.";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      {/* Mobile ebook banner — shown only at the top, disappears on scroll */}
      <AnimatePresence>
        {!scrolled && !mobileOpen && (
          <motion.a
            href={EBOOK_URL}
            download="ebook-bruna-diniz.pdf"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-medium px-4 py-2 overflow-hidden"
          >
            <BookOpen size={14} />
            <span>Baixe gratuitamente o ebook</span>
          </motion.a>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <img src={logo} alt="Clínica Diniz" className="h-10 md:h-12 w-auto object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <EbookDownloadButton label="Ebook grátis" />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
          >
            Agendar atendimento
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <EbookDownloadButton fullWidth />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-center"
              >
                Agendar atendimento
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
