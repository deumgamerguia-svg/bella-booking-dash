import extension from '@/assets/lash-extension.jpg';
import maintenance from '@/assets/lash-maintenance.jpg';
import removal from '@/assets/lash-removal.jpg';

export const services = [
  { id: 'extension', name: 'Extensão de Cílios', price: 130, image: extension },
  { id: 'maintenance', name: 'Manutenção de Cílios', price: 90, image: maintenance },
  { id: 'removal', name: 'Remoção de Cílios', price: 50, image: removal },
] as const;

export const formatPrice = (price: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);