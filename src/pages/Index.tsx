import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import FadeIn from "@/components/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Heart,
  Shield,
  Eye,
  Sparkles,
  Compass,
  MessageCircle,
  CalendarCheck,
  Monitor,
  TrendingUp,
  Instagram,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20agendar%20um%20atendimento.";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <WhatsAppButton />

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="max-w-xl">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-foreground mb-6">
                  Entender o que você sente muda a forma como você se relaciona, decide e vive.
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                  Psicoterapia online para adultos que desejam compreender seus padrões, sair do automático e construir relações e decisões mais conscientes.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors duration-300"
                >
                  Agendar atendimento
                </a>
                <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                  Atendimento online para adultos<br />
                  Psicoterapia individual e de casal
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="hidden md:flex justify-center">
                <div className="w-80 h-96 rounded-3xl bg-gradient-to-br from-sage-light to-warm-alt border border-border/50 flex items-end justify-center overflow-hidden">
                  <div className="w-48 h-64 rounded-t-full bg-gradient-to-b from-muted to-secondary" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* CONEXÃO EMOCIONAL */}
      <section className="py-24 md:py-32 bg-muted/40">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug mb-8">
              O problema, muitas vezes, não é falta de esforço.<br />
              <span className="text-primary">É tentar lidar com a vida sem compreender o que está por trás do que você sente.</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted-foreground mb-6 text-base">E isso aparece:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "nos padrões que se repetem",
                "nas relações que se desgastam",
                "nas decisões que não se sustentam",
                "na sensação de estar sempre voltando para o mesmo lugar",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-background/70 border border-border/50"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-sm text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* VIRADA DE PERCEPÇÃO */}
      <section className="py-24 md:py-36">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="relative inline-block">
              <div className="absolute -inset-8 rounded-3xl bg-sage-light/40 -z-10" />
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-6">
                Sem clareza emocional, você reage.<br />
                <span className="text-primary">Com clareza, você começa a escolher com mais consciência.</span>
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-8 max-w-2xl mx-auto">
              Meu trabalho é te ajudar a entender seus processos, organizar o que parece confuso e construir caminhos mais coerentes com quem você é.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className="py-24 md:py-32 bg-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <FadeIn className="md:col-span-2">
              <div className="sticky top-28">
                <div className="w-full aspect-[3/4] rounded-2xl bg-gradient-to-br from-secondary to-muted border border-border/50 mb-6" />
                <h3 className="font-serif text-2xl font-semibold text-foreground">Bruna Diniz</h3>
                <p className="text-sm text-muted-foreground mt-1">Psicóloga</p>
                <p className="text-xs text-muted-foreground mt-0.5">CRP 00/00000</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="md:col-span-3">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-8">Sobre mim</h2>
              <div className="space-y-5 text-foreground/80 text-base leading-relaxed">
                <p>Muitas vezes, o que vejo no consultório são pessoas lidando com emoções intensas, mas sem conseguir organizar ou compreender o que sentem.</p>
                <p>Quando isso acontece, fica difícil se enxergar com clareza, se acolher e até entender quem se é, considerando a própria história.</p>
                <p className="text-foreground font-medium">Meu trabalho é oferecer um espaço de acolhimento e direção.</p>
                <p>Eu valido o que você sente, te ajudo a organizar seus processos e a compreender padrões, escolhas e formas de funcionamento — ampliando seu repertório comportamental e cognitivo para decisões mais conscientes.</p>
                <p>E nem sempre isso é fácil.</p>
                <p>Ter clareza também envolve reconhecer dificuldades e responsabilidades. Mas você não precisa passar por isso sozinho.</p>
                <blockquote className="border-l-2 border-primary pl-5 py-2 my-6">
                  <p className="font-serif text-xl md:text-2xl text-foreground italic">
                    A vida nem sempre é fácil — por isso, precisamos escolher o nosso difícil.
                  </p>
                </blockquote>
                <p className="text-primary font-medium">Qual difícil você está disposto a escolher hoje?</p>
                <p>Meu estilo de atendimento é acolhedor, direto e humano. Não estou aqui apenas para ouvir, mas para te ajudar a compreender e construir mudanças reais — com leveza quando possível e firmeza quando necessário.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground text-center mb-16">Serviços</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="h-full p-8 md:p-10 rounded-2xl bg-card border border-border/50 flex flex-col">
                <Heart size={28} className="text-primary mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Psicoterapia individual</h3>
                <div className="space-y-4 text-sm text-foreground/75 leading-relaxed flex-1">
                  <p>A psicoterapia é um espaço seguro que te ajuda a compreender melhor o que você sente, pensa e como reage. Ao longo do processo, identificamos padrões que se repetem, ampliamos seu repertório cognitivo e comportamental e construímos formas mais conscientes de lidar com as dificuldades.</p>
                  <p>Mais do que falar sobre o que você sente, a proposta é compreender suas emoções com profundidade, reconhecendo como elas influenciam suas escolhas, suas relações e a forma como você se posiciona na vida.</p>
                  <p>Esse é um processo que envolve clareza, responsabilidade e disposição para olhar para si com mais profundidade. Nem sempre será confortável — mas é o que possibilita mudanças reais.</p>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline underline-offset-4 transition-all"
                >
                  Quero agendar →
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="h-full p-8 md:p-10 rounded-2xl bg-card border border-border/50 flex flex-col">
                <Sparkles size={28} className="text-primary mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Terapia de casal</h3>
                <div className="space-y-4 text-sm text-foreground/75 leading-relaxed flex-1">
                  <p>A terapia de casal é um espaço para compreender a dinâmica da relação, melhorar a comunicação e construir formas mais saudáveis de se relacionar.</p>
                  <p>O processo envolve identificar padrões do casal, compreender o que está por trás dos conflitos e desenvolver novas formas de diálogo e posicionamento.</p>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline underline-offset-4 transition-all"
                >
                  Quero agendar →
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PARA QUEM SERVE */}
      <section className="py-24 md:py-32 bg-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground text-center mb-4">Para quem serve</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-base leading-relaxed">
              Este processo é para pessoas que buscam um atendimento acolhedor, humano e comprometido com mudanças reais. Que desejam se compreender com mais profundidade e tomar decisões com mais consciência e consistência.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="p-8 rounded-2xl bg-background border border-border/50">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-6">Psicoterapia individual</h3>
                <p className="text-sm text-muted-foreground mb-4">Para pessoas que:</p>
                <ul className="space-y-3">
                  {[
                    "sentem que repetem padrões emocionais e comportamentais",
                    "têm dificuldade de se posicionar com clareza",
                    "vivem conflitos internos recorrentes",
                    "querem compreender melhor suas emoções, escolhas e relações",
                    "desejam sair do automático e construir mudanças reais",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="p-8 rounded-2xl bg-background border border-border/50">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-6">Terapia de casal</h3>
                <p className="text-sm text-muted-foreground mb-4">Para casais que:</p>
                <ul className="space-y-3">
                  {[
                    "enfrentam dificuldades na comunicação",
                    "percebem conflitos recorrentes",
                    "vivem momentos de distanciamento ou crise",
                    "desejam compreender melhor a dinâmica da relação",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground text-center mb-16">Diferenciais do atendimento</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: "Acolhedor, direto e humano", desc: "Atendimento que equilibra sensibilidade com direcionamento claro." },
              { icon: Eye, title: "Escuta qualificada", desc: "Profundidade e direcionamento para além da superfície." },
              { icon: Shield, title: "Online com confidencialidade", desc: "Praticidade e sigilo no conforto do seu espaço." },
              { icon: Compass, title: "Compreensão real", desc: "Processo focado em entendimento profundo, não apenas alívio momentâneo." },
              { icon: Sparkles, title: "Clareza emocional", desc: "Construção de consciência para decisões e relações mais autênticas." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="p-6 rounded-2xl border border-border/50 bg-card hover:shadow-md transition-shadow duration-300">
                  <Icon size={24} className="text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="py-24 md:py-32 bg-muted/40">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground text-center mb-16">Como funciona</h2>
          </FadeIn>
          <div className="space-y-0">
            {[
              { icon: MessageCircle, step: "01", title: "Primeiro contato", desc: "Você entra em contato para tirar dúvidas e solicitar seu agendamento." },
              { icon: CalendarCheck, step: "02", title: "Agendamento da sessão", desc: "Definimos o melhor horário para iniciar seu processo terapêutico." },
              { icon: Monitor, step: "03", title: "Atendimento online", desc: "As sessões acontecem de forma online, com conforto, sigilo e praticidade." },
              { icon: TrendingUp, step: "04", title: "Processo terapêutico", desc: "Trabalhamos compreensão emocional, padrões, escolhas e construção de mudanças reais." },
            ].map(({ icon: Icon, step, title, desc }, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex gap-6 md:gap-8 items-start py-8 relative">
                  {i < 3 && (
                    <div className="absolute left-[19px] md:left-[23px] top-20 bottom-0 w-px bg-border" />
                  )}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 relative z-10">
                    <Icon size={20} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">{step}</span>
                    <h3 className="font-serif text-xl font-semibold text-foreground mt-1 mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 md:py-36">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-6">
              Começar a se compreender pode ser o primeiro passo para viver com mais clareza.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Se você sente que está na hora de olhar para si com mais profundidade, organizar o que sente e construir caminhos mais conscientes, esse pode ser o momento de iniciar seu processo terapêutico.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors duration-300"
            >
              Agendar atendimento
            </a>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32 bg-muted/40">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground text-center mb-16">Perguntas frequentes</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: "Como funciona a psicoterapia online?",
                  a: "As sessões acontecem por videochamada, em uma plataforma segura e confidencial. Você precisa apenas de um ambiente reservado, internet estável e um dispositivo com câmera. O processo é o mesmo da terapia presencial, com toda a qualidade e profundidade do atendimento.",
                },
                {
                  q: "O atendimento é voltado para quais públicos?",
                  a: "O atendimento é voltado para adultos, tanto na modalidade individual quanto de casal. O foco está em pessoas que desejam se compreender melhor, trabalhar padrões emocionais e comportamentais e construir mudanças reais.",
                },
                {
                  q: "Como saber se a psicoterapia é para mim?",
                  a: "Se você sente que repete padrões, tem dificuldade em lidar com emoções, enfrenta conflitos recorrentes ou quer tomar decisões mais conscientes, a psicoterapia pode ser um caminho importante. O primeiro passo é entrar em contato para conversarmos.",
                },
                {
                  q: "Como funciona a terapia de casal?",
                  a: "A terapia de casal é um espaço para o casal compreender sua dinâmica relacional, melhorar a comunicação e construir formas mais saudáveis de se relacionar. As sessões são realizadas com ambos os parceiros presentes.",
                },
                {
                  q: "Qual a duração das sessões?",
                  a: "As sessões individuais têm duração de aproximadamente 50 minutos. As sessões de casal podem ter duração um pouco maior, variando conforme a necessidade do processo.",
                },
                {
                  q: "Como faço para agendar?",
                  a: "Você pode entrar em contato diretamente pelo WhatsApp, clicando no botão 'Agendar atendimento'. Vou te responder para alinhar horários e tirar suas dúvidas antes de iniciarmos.",
                },
              ].map(({ q, a }, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl bg-background border border-border/50 px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline py-5">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                    {a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-1">Clínica Diniz</h3>
              <p className="text-sm text-muted-foreground">Bruna Diniz | Psicóloga — CRP 00/00000</p>
              <p className="text-sm text-muted-foreground mt-1">Atendimento online para todo o Brasil</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-border/50 text-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Clínica Diniz. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
