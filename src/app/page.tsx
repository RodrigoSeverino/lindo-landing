import Image from "next/image";
import Nav from "@/components/Nav";
import WhatsAppButton from "@/components/WhatsAppButton";
import { whatsappLink } from "@/lib/constants";

const SERVICIOS = [
  {
    titulo: "Espacios más lindos",
    descripcion:
      "Intervenciones integrales: transformamos espacios, muebles, locales o eventos completos, de punta a punta.",
  },
  {
    titulo: "Deco más linda",
    descripcion:
      "Asesoramiento y colocación de vinilos decorativos y detalles a medida para renovar un ambiente sin obra.",
  },
  {
    titulo: "Cosas más tuyas",
    descripcion:
      "Láminas, stickers, cuadros, pizarras y guardas personalizadas — cotización al instante, sin vueltas.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <WhatsAppButton />

      {/* Hero */}
      <section className="bg-bordo text-crema">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 text-center">
          <Image
            src="/logo/fondo-bordo.png"
            alt="+Lindo"
            width={220}
            height={60}
            priority
            className="mx-auto mb-8 h-14 w-auto"
          />
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            Te ayudamos a reconectar con tus espacios para que los sientas
            verdaderamente tuyos.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-crema/90 max-w-2xl mx-auto">
            Diseño a medida, asesoramiento y colocación. Especialistas en
            vinilos decorativos, con diseños integrales que contemplan
            carpintería, herrería y más.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 rounded-full bg-crema text-bordo font-bold px-8 py-4 hover:bg-white transition-colors"
          >
            Escribinos por WhatsApp
          </a>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Nuestros servicios</h2>
        <p className="text-black/60 mb-12 max-w-2xl">
          Trabajamos como a vos te quede mejor: llave en mano, o a tu medida.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICIOS.map((s) => (
            <div key={s.titulo} className="rounded-2xl border border-black/10 p-8">
              <h3 className="text-xl font-bold text-bordo mb-3">{s.titulo}</h3>
              <p className="text-black/70">{s.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sostenibilidad */}
      <section className="bg-crema">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Comprometidos con la sostenibilidad
            </h2>
            <p className="text-black/70">
              Trabajamos con biovinilos y tintas ecológicas, cuidando el
              impacto de cada proyecto sin resignar calidad ni diseño.
            </p>
          </div>
          <div className="aspect-video rounded-2xl bg-black/5 flex items-center justify-center text-black/40 text-sm">
            [ Imagen / video de sostenibilidad — pendiente ]
          </div>
        </div>
      </section>

      {/* Galería */}
      <section id="catalogo" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Galería</h2>
        <p className="text-black/60 mb-10 max-w-2xl">
          Antes y después de nuestros proyectos, y diseños de nuestro banco de
          imágenes.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl bg-black/5 flex items-center justify-center text-black/30 text-xs"
            >
              Foto {i + 1}
            </div>
          ))}
        </div>
      </section>

      {/* Guías / Novedades */}
      <section id="guias" className="bg-crema">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Guías</h2>
            <p className="text-black/70">
              Contenido para ayudarte a elegir: tipos de vinilo, cómo medir tu
              espacio, colocación y cuidados. Próximamente.
            </p>
          </div>
          <div id="novedades">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Novedades</h2>
            <p className="text-black/70">
              Nueva maquinaria, materiales y todo lo que vamos sumando al
              equipo. Próximamente.
            </p>
          </div>
        </div>
      </section>

      {/* Empresa */}
      <section id="empresa" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Sobre nosotros</h2>
        <p className="text-black/70 max-w-2xl">
          +LINDO nace en Montevideo con la idea de que transformar un espacio
          no tiene por qué ser complicado. Nos hacemos cargo de cada detalle
          para que vos solo tengas que sentarte a disfrutar el resultado.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-negro text-white">
        <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <Image src="/logo/fondo-negro.png" alt="+Lindo" width={110} height={30} className="h-7 w-auto" />
          <div className="flex gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-white">Garantías</a>
            <a href="#" className="hover:text-white">Términos y condiciones</a>
            <a href="#" className="hover:text-white">Privacidad</a>
          </div>
          <p className="text-xs text-white/40">Montevideo, Uruguay</p>
        </div>
      </footer>
    </>
  );
}
