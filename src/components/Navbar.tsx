import { useState, useEffect } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-clinica-diniz-full.png";
import EbookDownloadModal from "@/components/EbookDownloadModal";

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
  const [ebookOpen, setEbookOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openEbook = () => {
    setMobileOpen(false);
    setEbookOpen(true);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
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
            <button
              onClick={openEbook}
              className="text-sm flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/30 text-primary hover:bg-primary/5 transition-colors duration-300"
            >
              <BookOpen size={15} />
              Ebook grátis
            </button>
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
                <button
                  onClick={openEbook}
                  className="text-sm flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 text-primary"
                >
                  <BookOpen size={16} />
                  Baixar ebook grátis
                </button>
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

      <EbookDownloadModal open={ebookOpen} onClose={() => setEbookOpen(false)} />
    </>
  );
};

export default Navbar;
