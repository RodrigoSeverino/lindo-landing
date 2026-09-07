/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export estático: no usamos rutas de servidor ni SSR, para que este
  // sitio se pueda hostear en cualquier lado (Vercel, Hostinger, lo que
  // se decida) sin depender de un runtime de Node.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
