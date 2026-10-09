import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { CalendarDays, ChevronLeft, Heart, MoreVertical, Check, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { LashLogo } from '@/components/lash-logo';
import { PanelNavigation } from '@/components/panel-navigation';
import { services, formatPrice } from '@/lib/services';
import cover from '@/assets/lash-treatment.jpg';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Bella Lash — Painel 1 | Cloud Panel Pro' },
    { name: 'description', content: 'Bella Lash: extensão, manutenção e remoção de cílios. Seu olhar ainda mais especial.' },
    { property: 'og:title', content: 'Bella Lash — Seu olhar ainda mais especial' },
    { property: 'og:description', content: 'Conheça os serviços e valores da Bella Lash.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

function Index() {
  const [selected, setSelected] = useState<(typeof services)[number] | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  async function share() {
    try { await navigator.clipboard.writeText(window.location.href); setCopied(true); }
    catch { setMenuOpen(false); }
  }

  return <main className="lash-panel">
    <header className="cover">
      <img src={cover} alt="Aplicação profissional de extensão de cílios" width={1440} height={800} />
      <div className="cover-actions">
        <Button variant="secondary" size="icon" className="cover-button" aria-label="Voltar ao início" title="Voltar ao início" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ChevronLeft /></Button>
        <div className="relative">
          <Button variant="secondary" size="icon" className="cover-button" aria-label="Mais opções" title="Mais opções" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><MoreVertical /></Button>
          {menuOpen && <div className="share-menu"><Button variant="ghost" onClick={share}>{copied ? <Check /> : <Share2 />}{copied ? 'Link copiado' : 'Compartilhar'}</Button></div>}
        </div>
      </div>
    </header>
    <section className="panel-body">
      <div className="brand-heading">
        <LashLogo />
        <h1>Bella Lash</h1>
        <p>Seu olhar ainda mais especial</p>
        <Heart className="brand-heart" size={14} fill="currentColor" />
      </div>
      <div className="service-list">
        {services.map(service => <article className="service-item" key={service.id}>
          <img src={service.image} alt={service.name} width={816} height={816} loading="lazy" />
          <div className="service-content">
            <h2>{service.name}</h2>
            <div className="service-bottom"><div className="service-meta"><span className="service-price">{formatPrice(service.price)}</span><span className="service-duration" aria-label="Duração do serviço">{service.durationMinutes} min</span></div><Button className="booking-button" onClick={() => setSelected(service)}><CalendarDays />Agendar</Button></div>
          </div>
        </article>)}
      </div>
    </section>
    <div className="bottom-wave" aria-hidden="true" />
    <PanelNavigation />
    <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}>
      <DialogContent className="booking-dialog">
        <CalendarDays className="text-primary" size={30} />
        <DialogTitle>{selected?.name}</DialogTitle>
        <DialogDescription className="text-muted-foreground">Agendamento online ainda não disponível.</DialogDescription>
        <p className="text-xl font-semibold text-primary">{selected && formatPrice(selected.price)}</p>
        <Button onClick={() => setSelected(null)}>Voltar aos serviços</Button>
      </DialogContent>
    </Dialog>
  </main>;
}
