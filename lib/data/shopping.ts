import type { Place } from '../types'

export const shopping: Place[] = [
  // ── On Your Street / Artisan ──────────────────────────────────────────────
  {
    id: 'borgia-conti',
    name: 'Borgia Conti',
    address: 'Calle Ayala 38',
    neighborhood: 'Salamanca',
    tags: ['On Your Street', 'Artisan'],
    description:
      'Artisan homeware and gifts in Salamanca. Beautiful objects that feel genuinely from Madrid — ceramics, linens, small luxuries. On your street.',
    category: 'shop',
  },
  {
    id: 'la-mansa',
    name: 'La Mansa',
    address: 'Calle Claudio Coello 95',
    neighborhood: 'Salamanca',
    tags: ['On Your Street', 'Artisan'],
    description:
      'Elegant Spanish design studio on one of Salamanca\'s best shopping streets. Thoughtful, minimal pieces — the kind of thing you buy once and keep forever.',
    category: 'shop',
  },
  {
    id: 'cocol',
    name: 'COCOL',
    address: 'Confirm current address',
    neighborhood: 'Madrid',
    tags: ['Artisan', "Don't Miss"],
    description:
      'Your go-to for artisan gifts you can bring home that feel genuinely from Madrid — not tourist tat. Your confirmed favorite from last visit. Go in Week 1 or 2 before you accumulate too much.',
    notes: 'Confirm current address online before going · Leave budget for here',
    category: 'shop',
  },
  // ── Thrift Route — Malasaña ───────────────────────────────────────────────
  {
    id: 'flamingo-vintage',
    name: 'Flamingo Vintage Kilo',
    address: 'Calle de Velarde',
    neighborhood: 'Malasaña',
    tags: ['Thrift Route', 'Malasaña'],
    description:
      'Sell by weight — great prices. Vintage everything. Shirts, dresses, outerwear. One of the best kilo shops in Madrid.',
    category: 'shop',
  },
  {
    id: 'magpie-vintage',
    name: 'Magpie Vintage',
    address: 'Calle Espíritu Santo 1',
    neighborhood: 'Malasaña',
    tags: ['Thrift Route', 'Malasaña'],
    description:
      '60s/70s/20s pieces, DJ events, very curated. A gallery-like vintage experience rather than a dig — pieces are selected and displayed with intention. Worth the trip on its own.',
    category: 'shop',
  },
  {
    id: 'el-rincon-de-tia-jo',
    name: 'El Rincón de Tía Jo',
    address: 'Calle Velarde',
    neighborhood: 'Malasaña',
    tags: ['Thrift Route', 'Malasaña'],
    description:
      'Narrow but deep, with coats, vintage furniture, and accessories. Best coats in Malasaña. The kind of shop that surprises you.',
    category: 'shop',
  },
  {
    id: 'williamsburg',
    name: 'Williamsburg',
    address: 'Malasaña',
    neighborhood: 'Malasaña',
    tags: ['Thrift Route', 'Malasaña'],
    description:
      'American vintage — 90s band tees, oversized flannels, leather jackets. Exactly what it sounds like: well-curated American nostalgia, at Madrid prices.',
    category: 'shop',
  },
  {
    id: 'piel-de-mariposa',
    name: 'Piel de Mariposa',
    address: 'Salamanca',
    neighborhood: 'Salamanca',
    tags: ['Thrift Route', 'Walking distance', 'Solidarity Shop'],
    description:
      'Solidarity thrift shop — proceeds to charity. Closest thrift store to your apartment. Good for a Week 1 warm-up before heading to Malasaña. You never know what you\'ll find.',
    notes: 'Week 1 warm-up thrift · Proceeds to charity',
    category: 'shop',
  },
]
