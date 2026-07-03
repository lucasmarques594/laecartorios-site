"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const GOLD = "#e8b84a";

export function Footer() {
  return (
    <footer style={{ backgroundColor: GOLD }} className="text-lae-ink">
      {/* ===================== MOBILE ===================== */}
      <div className="lg:hidden">
        <div className="mx-auto max-w-md px-6 py-4">
          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/imagem/logolae3.png" alt="LAE Cartórios" className="h-32 w-auto" />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <a
              href={`tel:${siteConfig.contact.phoneWhatsapp.replace(/\D/g, "")}`}
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-lae-ink/20 bg-white/20 px-4 text-sm font-medium text-lae-ink transition-all active:scale-[0.98]"
            >
              <Phone className="size-4" />
              Ligar
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-lae-ink/20 bg-white/20 px-4 text-sm font-medium text-lae-ink transition-all active:scale-[0.98]"
            >
              <Mail className="size-4" />
              E-mail
            </a>
          </div>

          <div className="mt-8 divide-y divide-lae-ink/15 border-y border-lae-ink/15">
            <AccordionSection title="Principais Links">
              <ul className="pb-2">
                {siteConfig.footer.principalLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="flex min-h-11 items-center text-[15px] text-lae-ink/80 transition-colors active:text-lae-ink"
                      {...("external" in l && l.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionSection>

            <AccordionSection title="Materiais">
              <ul className="pb-2">
                {siteConfig.footer.materiais.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="flex min-h-11 items-center text-[15px] text-lae-ink/80 transition-colors active:text-lae-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionSection>

            <AccordionSection title="Contato e endereço">
              <ul className="space-y-1 pb-3 text-[15px] text-lae-ink/80">
                <li className="flex items-start gap-2.5 py-1.5">
                  <Phone className="mt-0.5 size-4 shrink-0" />
                  <span>
                    <span className="block">{siteConfig.contact.phoneCommercial}</span>
                    <span className="text-xs text-lae-ink/60">Comercial</span>
                  </span>
                </li>
                <li className="flex items-start gap-2.5 py-1.5">
                  <MessageCircle className="mt-0.5 size-4 shrink-0" />
                  <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                    {siteConfig.contact.phoneWhatsapp}
                  </a>
                </li>
                <li className="flex items-start gap-2.5 py-1.5">
                  <MapPin className="mt-0.5 size-4 shrink-0" />
                  <span>{siteConfig.contact.address}</span>
                </li>
              </ul>
            </AccordionSection>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            <a
              href={siteConfig.contact.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-12 items-center justify-center rounded-full border border-lae-ink/20 bg-white/20 text-lae-ink transition-all active:scale-95"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href={siteConfig.contact.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex size-12 items-center justify-center rounded-full border border-lae-ink/20 bg-white/20 text-lae-ink transition-all active:scale-95"
            >
              <Linkedin className="size-5" />
            </a>
          </div>

          <p className="mt-8 text-center text-xs font-semibold text-lae-ink">
            © {new Date().getFullYear()} LAE Cartórios.
            <br />
            Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* ===================== DESKTOP ===================== */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-7xl px-10 py-8">
          <div className="grid grid-cols-[1fr_1fr_1fr_1fr_auto] gap-10">
            <div>
              <h3 className="mb-4 text-xl font-bold text-lae-ink">Principais Links</h3>
              <ul className="space-y-2">
                {siteConfig.footer.principalLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-lae-ink/80 transition-colors hover:text-lae-ink"
                      {...("external" in l && l.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-lae-ink">Redes Sociais</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href={siteConfig.contact.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-lae-ink/80 transition-colors hover:text-lae-ink"
                  >
                    <Instagram className="size-4" />
                    {siteConfig.contact.instagram}
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.contact.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-lae-ink/80 transition-colors hover:text-lae-ink"
                  >
                    <Linkedin className="size-4" />
                    Linkedin
                  </a>
                </li>
              </ul>

              <h3 className="mb-4 mt-6 text-xl font-bold text-lae-ink">Materiais</h3>
              <ul className="space-y-2">
                {siteConfig.footer.materiais.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-lae-ink/80 transition-colors hover:text-lae-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-lae-ink">Contatos</h3>
              <ul className="space-y-2.5 text-sm text-lae-ink/80">
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 size-4 shrink-0" />
                  <div>
                    <span className="block">{siteConfig.contact.phoneCommercial}</span>
                    <span className="text-xs text-lae-ink/60">Comercial</span>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="size-4 shrink-0" />
                  <a
                    href={siteConfig.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-lae-ink"
                  >
                    {siteConfig.contact.phoneWhatsapp}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 size-4 shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="break-words transition-colors hover:text-lae-ink"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-lae-ink">Endereço</h3>
              <a
                href="https://www.google.com/maps?q=Rua+Solim%C3%B5es+849+Merc%C3%AAs+Curitiba+PR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-lae-ink/80 transition-colors hover:text-lae-ink"
              >
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span className="flex-1">{siteConfig.contact.address}</span>
              </a>
            </div>

            <div className="flex items-start justify-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/imagem/logolae2.png" alt="LAE Cartórios" className="h-48 w-auto" />
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs font-semibold text-lae-ink">© 2026 LAE Cartórios. Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function AccordionSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex min-h-14 w-full items-center justify-between text-left text-sm font-bold text-lae-ink"
      >
        {title}
        <ChevronDown
          className={`size-5 text-lae-ink/70 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}