import { useLayoutEffect, useRef } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { CalendarDays, House } from 'lucide-react';
import { Button } from '@/components/ui/button';

let previousDestination: number | null = null;
export function PanelNavigation() {
  const pathname = useLocation({select: location => location.pathname});
  const index = pathname === '/agendamentos' ? 1 : 0;
  const navigation = useRef<HTMLElement>(null);
  const indicator = useRef<HTMLSpanElement>(null);
  useLayoutEffect(() => {
    const previous = previousDestination;
    previousDestination = index;
    if (previous === null || previous === index || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const options = {duration: 320, easing: 'cubic-bezier(.22,.75,.25,.99)'};
    const selection = indicator.current?.animate([
      {transform: 'translateX(' + previous * 100 + '%)'},
      {transform: 'translateX(' + index * 100 + '%)'}
    ], options);
    const content = navigation.current?.closest('main')?.querySelector('.panel-body');
    const entrance = content?.animate([
      {opacity: 0, transform: 'translateX(' + (index > previous ? 28 : -28) + 'px)'},
      {opacity: 1, transform: 'translateX(0)'}
    ], options);
    return () => {selection?.cancel(); entrance?.cancel();};
  }, [index]);
  return <nav ref={navigation} className="panel-navigation" aria-label="Navegação principal">
    <span ref={indicator} className="nav-sliding-indicator" aria-hidden="true" style={{transform: `translateX(${index * 100}%)`}} />
    <Button variant="ghost" asChild><Link to="/" activeOptions={{ exact: true }} activeProps={{ className: 'nav-active' }}><House /><span>Início</span></Link></Button>
    <Button variant="ghost" asChild><Link to="/agendamentos" activeProps={{ className: 'nav-active' }}><CalendarDays /><span>Meus agendamentos</span></Link></Button>
  </nav>;
}