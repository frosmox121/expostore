'use client';

import { useState } from 'react';
import { MessageCircle, Instagram, X } from 'lucide-react';

export function WhatsAppFAB() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Menu Options */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 space-y-2 animate-in fade-in slide-in-from-bottom-2">
          {/* WhatsApp Option */}
          <a
            href="https://wa.me/541234567890?text=Hola%20EXPOSTORE%2C%20consultando%20--%20EXPOSTORE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-end gap-3 group"
          >
            <div className="bg-card border border-border rounded-lg px-4 py-2 text-sm font-semibold text-foreground shadow-lg">
              WhatsApp
            </div>
            <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
              <MessageCircle className="h-6 w-6" />
            </div>
          </a>

          {/* Instagram Option */}
          <a
            href="https://instagram.com/direct/t/expostorelanus"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-end gap-3 group"
          >
            <div className="bg-card border border-border rounded-lg px-4 py-2 text-sm font-semibold text-foreground shadow-lg">
              Instagram
            </div>
            <div className="w-12 h-12 bg-pink-500/80 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
              <Instagram className="h-6 w-6" />
            </div>
          </a>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 relative"
      >
        {isOpen ? (
          <X className="h-7 w-7" />
        ) : (
          <MessageCircle className="h-7 w-7" />
        )}
        {/* Pulsing indicator */}
        <div className="absolute inset-0 rounded-full bg-accent/30 animate-pulse" />
      </button>
    </div>
  );
}
