"use client";

import { useState } from 'react';
import { Button } from './Button';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Replace with actual formspree endpoint or API route later
      // const response = await fetch('https://formspree.io/f/your_form_id', {
      //   method: 'POST',
      //   body: formData,
      //   headers: {
      //     'Accept': 'application/json'
      //   }
      // });
      
      // Simulating network request for now
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="border border-accent/30 bg-accent/10 text-foreground p-6 text-center">
        <h3 className="font-display text-xl font-semibold mb-2 text-accent">Mensagem enviada!</h3>
        <p className="text-foreground/70">Obrigado pelo contato. Retornarei o mais breve possível.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-accent underline underline-offset-4 hover:text-accent/80"
        >
          Enviar nova mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">Nome</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
          placeholder="Seu nome completo"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">E-mail</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
          placeholder="seu@email.com"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">Mensagem</label>
        <textarea 
          id="message" 
          name="message" 
          required 
          rows={5}
          className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors resize-y"
          placeholder="Como posso te ajudar?"
        />
      </div>
      
      {status === 'error' && (
        <p className="text-red-400 text-sm">Ocorreu um erro ao enviar sua mensagem. Tente novamente.</p>
      )}
      
      <Button type="submit" className="w-full" disabled={status === 'loading'}>
        {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
      </Button>
    </form>
  );
}
