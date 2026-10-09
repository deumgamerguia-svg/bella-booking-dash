import { describe, expect, it } from 'vitest';
import { services } from '@/lib/services';

describe('Bella Lash service prices', () => {
  it('charges R$130 for extensions', () => { expect(services.find(s => s.id === 'extension')?.price).toBe(130); });
  it('charges R$90 for maintenance', () => { expect(services.find(s => s.id === 'maintenance')?.price).toBe(90); });
  it('charges R$50 for removal', () => { expect(services.find(s => s.id === 'removal')?.price).toBe(50); });
});