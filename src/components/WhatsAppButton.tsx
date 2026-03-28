import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5517949168621?text=Olá,%20gostaria%20de%20agendar%20um%20atendimento.";

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
    aria-label="Agendar atendimento pelo WhatsApp"
  >
    <MessageCircle size={20} className="shrink-0" />
    <span className="text-sm font-medium hidden sm:inline">Agendar atendimento</span>
  </a>
);

export default WhatsAppButton;
