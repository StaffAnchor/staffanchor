// The StaffAnchor WhatsApp Business number. A click opens a chat with the first
// message already typed in; when a person messages first, WhatsApp opens a free
// 24-hour window in which StaffAnchor can reply normally.
const NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '911204128963').replace(/\D/g, '');

export function whatsappChatLink(text: string): string {
  return `https://wa.me/${NUMBER}?text=${encodeURIComponent(text)}`;
}
