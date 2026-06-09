import { useState } from "react";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z
    .string()
    .trim()
    .min(8, "Informe um telefone válido")
    .max(20)
    .optional()
    .or(z.literal("")),
});

const EBOOK_URL = "/ebook-bruna-diniz.pdf";
const DESTINATION_EMAIL = "contato@dinizpsicologia.com.br";

interface Props {
  open: boolean;
  onClose: () => void;
}

const EbookDownloadModal = ({ open, onClose }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = leadSchema.safeParse({ name, email, phone });
    if (!parsed.success) {
      toast({
        title: "Verifique os dados",
        description: parsed.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    // Compose mailto with lead info
    const subject = encodeURIComponent("Novo cadastro — Ebook");
    const body = encodeURIComponent(
      `Novo cadastro para download do ebook:\n\n` +
        `Nome: ${parsed.data.name}\n` +
        `Email: ${parsed.data.email}\n` +
        `WhatsApp: ${parsed.data.phone || "(não informado)"}\n\n` +
        `Origem: Landing page`
    );
    const mailtoUrl = `mailto:${DESTINATION_EMAIL}?subject=${subject}&body=${body}`;

    // Open mail client in new tab (non-blocking)
    window.open(mailtoUrl, "_blank");

    // Trigger download
    const link = document.createElement("a");
    link.href = EBOOK_URL;
    link.download = "ebook-bruna-diniz.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setLoading(false);

    toast({
      title: "Download iniciado",
      description: "Obrigada! Seu ebook está sendo baixado.",
    });

    setName("");
    setEmail("");
    setPhone("");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-background rounded-2xl shadow-xl border border-border p-8"
          >
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="text-primary" size={20} />
              </div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                Ebook gratuito
              </span>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2 leading-tight">
              Receba o ebook agora
            </h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Preencha seus dados para baixar gratuitamente.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs text-muted-foreground mb-1.5">
                  Nome completo
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  maxLength={100}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-muted-foreground mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  maxLength={255}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  placeholder="voce@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs text-muted-foreground mb-1.5">
                  WhatsApp (opcional)
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={20}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors duration-300 disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Baixar ebook gratuito"
                )}
              </button>

              <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
                Seus dados estão seguros e não serão compartilhados.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EbookDownloadModal;
