import extension from '@/assets/lash-extension.jpg';
import maintenance from '@/assets/lash-maintenance.jpg';
import removal from '@/assets/lash-removal.jpg';

// Example durations; replace with the establishment's actual service times.
export const services = [
  { id: 'extension', name: 'Extensão de Cílios', price: 130, durationMinutes: 120, image: extension },
  { id: 'maintenance', name: 'Manutenção de Cílios', price: 90, durationMinutes: 60, image: maintenance },
  { id: 'removal', name: 'Remoção de Cílios', price: 50, durationMinutes: 30, image: removal },
] as const;

export const formatPrice = (price: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);