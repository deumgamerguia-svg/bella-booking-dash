import { createFileRoute, Link } from '@tanstack/react-router';
import { CalendarDays, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PanelNavigation } from '@/components/panel-navigation';

export const Route = createFileRoute('/agendamentos')({
  head: () => ({ meta: [
    { title: 'Meus agendamentos — Bella Lash' },
    { name: 'description', content: 'Consulte seus agendamentos na Bella Lash.' },
    { property: 'og:title', content: 'Meus agendamentos — Bella Lash' },
    { property: 'og:description', content: 'Seus próximos cuidados com o olhar na Bella Lash.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Appointments,
});

function Appointments() {
  return <main className="lash-panel inner-panel">
    <header className="inner-header"><Button asChild variant="ghost" size="icon"><Link to="/" aria-label="Voltar"><ChevronLeft /></Link></Button><span>Bella Lash</span></header>
    <h1 className="inner-title">Meus agendamentos</h1>
    <div className="empty-state"><CalendarDays size={44} strokeWidth={1.3} /><h2>Nenhum agendamento</h2><p>O agendamento online ainda não está disponível.</p><Button asChild><Link to="/">Ver serviços</Link></Button></div>
    <div className="bottom-wave" aria-hidden="true" /><PanelNavigation />
  </main>;
}