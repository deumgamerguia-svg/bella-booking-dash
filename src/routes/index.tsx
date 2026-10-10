import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect, useRef } from 'react';
import { CalendarDays, ChevronLeft, Heart, MoreVertical, Check, Share2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mountBooking } from '@/lib/booking-flow';
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

  if (selected) return <BookingScreen service={selected} onBack={() => setSelected(null)} />;

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
        {services.map(service => <article className={"service-item" + (service.name === 'Extensão de Cílios' ? ' service-with-description' : '')} key={service.id}>
          <img src={service.image} alt={service.name} width={816} height={816} loading="lazy" />
          <div className="service-content">
            <h2>{service.name}</h2>
            {service.name === 'Extensão de Cílios' && <p className="service-description">Cílios mais longos e volumosos para realçar o seu olhar.</p>}
            <div className="service-bottom"><div className="service-meta"><span className="service-price">{formatPrice(service.price)}</span><span className="service-duration" aria-label="Duração do serviço"><Clock aria-hidden="true" />{service.durationMinutes} min</span></div><Button className="booking-button" onClick={() => setSelected(service)}><CalendarDays />Agendar</Button></div>
          </div>
        </article>)}
      </div>
    </section>
    <div className="bottom-wave" aria-hidden="true" />
    <PanelNavigation />
  </main>;
}

function BookingScreen({ service, onBack }: { service: (typeof services)[number]; onBack: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (root.current) return mountBooking(root.current, service, onBack);
  }, [service, onBack]);
  return <div ref={root} />;
}
