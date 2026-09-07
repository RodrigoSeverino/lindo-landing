// TODO: reemplazar por el número real de WhatsApp de +LINDO antes de publicar.
// Formato sin espacios ni símbolos, con código de país (ej: 59899123456).
export const WHATSAPP_NUMBER = "000000000000";
export const WHATSAPP_MESSAGE = "¡Hola! Quiero saber más sobre +LINDO.";

export function whatsappLink(message: string = WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
