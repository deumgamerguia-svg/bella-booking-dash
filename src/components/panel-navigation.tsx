import { Link } from '@tanstack/react-router';
import { CalendarDays, House } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PanelNavigation() {
  return <nav className="panel-navigation" aria-label="Navegação principal">
    <Button variant="ghost" asChild><Link to="/" activeOptions={{ exact: true }} activeProps={{ className: 'nav-active' }}><House /><span>Início</span></Link></Button>
    <Button variant="ghost" asChild><Link to="/agendamentos" activeProps={{ className: 'nav-active' }}><CalendarDays /><span>Meus agendamentos</span></Link></Button>
  </nav>;
}