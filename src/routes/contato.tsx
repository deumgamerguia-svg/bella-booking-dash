import { createFileRoute, Link } from '@tanstack/react-router';
import { MessageCircle, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PanelNavigation } from '@/components/panel-navigation';

export const Route = createFileRoute('/contato')({
  head: () => ({ meta: [
    { title: 'Fale conosco — Bella Lash' },
    { name: 'description', content: 'Entre em contato com a Bella Lash.' },
    { property: 'og:title', content: 'Fale conosco — Bella Lash' },
    { property: 'og:description', content: 'Atendimento Bella Lash para cuidar do seu olhar.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Contact,
});

function Contact() {
  return <main className="lash-panel inner-panel">
    <header className="inner-header"><Button asChild variant="ghost" size="icon"><Link to="/" aria-label="Voltar"><ChevronLeft /></Link></Button><span>Bella Lash</span></header>
    <h1 className="inner-title">Fale conosco</h1>
    <div className="empty-state"><MessageCircle size={44} strokeWidth={1.3} /><h2>Atendimento Bella Lash</h2><p>Contato ainda não informado.</p><Button asChild variant="outline"><Link to="/">Voltar aos serviços</Link></Button></div>
    <div className="bottom-wave" aria-hidden="true" /><PanelNavigation />
  </main>;
}