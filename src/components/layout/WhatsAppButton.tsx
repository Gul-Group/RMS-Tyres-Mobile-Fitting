import { MessageCircleMoreIcon } from '@/lib/icons';
import { cn } from '@/lib/utils/cn';

export default function WhatsAppIconButton() {
  const whatsappLink = 'https://wa.me/923001234567'; // Replace with your number

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center cursor-pointer",
          "bg-green-500 hover:bg-green-600 text-white",
          "shadow-lg hover:shadow-xl transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-green-400"
        )}
      >
        <MessageCircleMoreIcon className="w-6 h-6" aria-hidden="true" />
      </a>
    </div>
  );
}
