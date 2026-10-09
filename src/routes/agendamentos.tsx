import { createFileRoute } from '@tanstack/react-router';
import { useRef, useEffect } from 'react';
import { LashLogo } from '@/components/lash-logo';
import { services } from '@/lib/services';
import { mountAppointments } from '@/lib/appointments-view';
import cover from '@/assets/lash-treatment.jpg';
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
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => { if (root.current) return mountAppointments(root.current, [services[0].image, services[1].image, services[0].image]); }, []);
  return <main className="lash-panel appointments-panel">
    <header className="cover"><img src={cover} alt="Aplicação profissional de extensão de cílios" /></header>
    <section className="panel-body"><div className="brand-heading"><LashLogo /></div><div ref={root} /></section>
    <div className="bottom-wave" aria-hidden="true" /><PanelNavigation />
  </main>;
}
