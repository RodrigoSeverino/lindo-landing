// Número de WhatsApp de +LINDO (el mismo de ManyChat). Cualquier mensaje
// dispara el bot y muestra el menú.
export const WHATSAPP_NUMBER = "59891281111";

// Mensajes con los que se abre el chat, según desde dónde entra el cliente.
// Sin emojis: la página intermedia de wa.me los mostraba como "�".
export const MENSAJE_CONSULTA = "¡Hola +Lindo! Quisiera hacerles una consulta.";
export const MENSAJE_IDEA = "¡Hola +Lindo! Tengo una idea y me gustaría contárselas.";

export function whatsappLink(message: string = MENSAJE_CONSULTA): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
