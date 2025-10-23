// components/WhatsAppIconButton.tsx
'use client';

import { Button } from '@radix-ui/themes';
import { MessageCircleMore } from 'lucide-react';
import Link from 'next/link';

export default function WhatsAppIconButton() {
    const whatsappLink = 'https://wa.me/923001234567'; // Replace with your number

    return (
        <div className="fixed bottom-5 right-5 z-50">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                    size="4"
                    radius="full"
                    variant="soft"
                    color="green"
                    className="w-12 h-12 p-2 cursor-pointer"
                >
                    <MessageCircleMore size={24} />
                </Button>
            </Link>
        </div>
    );
}
