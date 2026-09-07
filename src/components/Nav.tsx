import Image from "next/image";

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#novedades", label: "Novedades" },
  { href: "#guias", label: "Guías" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#empresa", label: "Empresa" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-blanco border-b border-black/5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Image src="/logo/fondo-blanco.png" alt="+Lindo" width={120} height={32} priority className="h-8 w-auto" />
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-bordo transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
