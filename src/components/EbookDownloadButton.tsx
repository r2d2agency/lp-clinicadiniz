import { BookOpen } from "lucide-react";

const EBOOK_URL = "/ebook-bruna-diniz.pdf";

interface Props {
  className?: string;
  variant?: "primary" | "outline";
  fullWidth?: boolean;
  label?: string;
}

const EbookDownloadButton = ({
  className = "",
  variant = "outline",
  fullWidth = false,
  label = "Baixar ebook grátis",
}: Props) => {
  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "border border-primary/40 text-primary hover:bg-primary/5";
  const width = fullWidth ? "w-full" : "";

  return (
    <a
      href={EBOOK_URL}
      download="ebook-bruna-diniz.pdf"
      className={`${base} ${styles} ${width} ${className}`}
    >
      <BookOpen size={16} />
      {label}
    </a>
  );
};

export default EbookDownloadButton;
