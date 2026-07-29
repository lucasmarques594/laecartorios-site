import type { Metadata } from "next";
import { ArrowDownRight, Download, FileText } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Brandbook LAE",
  description:
    "Banco de imagens e identidade visual da LAE Cartórios. Baixe logos, fotos e materiais da marca.",
};

// Imagens — troque pelos seus arquivos reais em /public/brandbook/
const IMAGENS = [
  { src: "/brandbook/LAE-Negativa.png", alt: "Marca LAE 1" },
  { src: "/brandbook/LAE-Positiva.png", alt: "Marca LAE 2" },
  { src: "/imagem/logolae3.png", alt: "Marca LAE 3" },
];

export default function BrandbookPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        {/* Cabeçalho */}
        <header className="mb-12">
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-lae-ink sm:text-5xl">
            Brandbook <span className="heading-accent">LAE</span>
          </h1>
          <ArrowDownRight
            className="mt-2 size-6 text-lae-stone/50"
            aria-hidden="true"
          />
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-lae-stone">
            Nosso banco de imagens e identidade visual. Aqui você encontra logos,
            fotos institucionais e materiais da marca LAE Cartórios para uso em
            comunicações e parcerias.
          </p>
        </header>

        {/* Grade de imagens */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
          {IMAGENS.map((img, i) => (
            <Reveal key={img.src} delay={i * 80}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl border border-lae-ink/10 bg-lae-amber/10 shadow-sm transition-all hover:shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <a
                  href={img.src}
                  download
                  aria-label={`Baixar ${img.alt}`}
                  className="absolute bottom-3 right-3 flex size-10 items-center justify-center rounded-full bg-lae-ink/80 text-white opacity-0 backdrop-blur transition-all hover:bg-lae-ink group-hover:opacity-100"
                >
                  <Download className="size-5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}