// components/WhatsAppIconButton.tsx
'use client';

import Link from 'next/link';
import { MessageCircleMoreIcon } from '@/lib/icons';

export default function WhatsAppIconButton() {
    const whatsappLink = 'https://wa.me/923001234567'; // Replace with your number

    return (
        <div className="fixed bottom-5 right-5 z-50">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <button className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group">
                    <MessageCircleMoreIcon className="w-6 h-6" />
                </button>
            </Link>
        </div>
    );
}
