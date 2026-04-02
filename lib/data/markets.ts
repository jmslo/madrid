import type { Place } from '../types'

export const markets: Place[] = [
  {
    id: 'el-rastro',
    name: 'El Rastro',
    address: 'Plaza de Cascorro to Ronda de Toledo',
    neighborhood: 'La Latina',
    hours: 'Every Sunday + public holidays · 9am–3pm · Free',
    tags: ["Don't Miss", 'Flea Market', 'Every Sunday'],
    description:
      'Over 1,000 merchants sell from around 9am until roughly 3pm. The market has its hub in Plaza de Cascorro and spreads across a large triangular block, spilling down side streets. Antiques, vintage clothing, accessories, kitchenware, second-hand records, books, and objects of all kinds. The surrounding La Latina tapas bars are part of the experience — locals treat it as a whole Sunday morning.',
    notes: 'Arrive before 10am to actually move · Your Sundays: Apr 5, 12 (skip Apr 19 — retrieval day)',
    category: 'market',
  },
  {
    id: 'mercado-de-motores',
    name: 'Mercado de Motores',
    address: 'Paseo de las Delicias 61 (Museo del Ferrocarril)',
    neighborhood: 'Delicias',
    hours: '2nd weekend of every month · Sat 11am–10pm · Sun 11am–9pm · Free entry',
    tags: ["Don't Miss", 'Vintage + Design + Food', 'Apr 11–12'],
    description:
      'Over 150 artisans, designers, booksellers, and vendors of gourmet products and second-hand goods gather inside the Nave Central of the Railway Museum — surrounded by historic locomotives and carriages — and across outdoor areas with food trucks and live music. The setting is extraordinary: a 19th-century iron-and-glass train station. Saturday runs until 10pm, making it a full-day and evening option.',
    notes: 'Your date: April 11–12 · Go Saturday for the full atmosphere · Metro: Delicias (Line 3)',
    category: 'market',
  },
  {
    id: 'malamarket',
    name: 'Malamarket',
    address: 'Plaza del Dos de Mayo',
    neighborhood: 'Malasaña',
    hours: 'Saturdays during spring · Hours vary · Check @malamarket on Instagram',
    tags: ['Vintage + Artisan', 'Every Saturday (spring)'],
    description:
      'Every Saturday of spring and fall, Malamarket fills Plaza del Dos de Mayo with designers, artisans, illustrators, and vintage sellers — the hipster counterpart to El Rastro, with better prices and a more curated edit. Plus live entertainment including swing dancing classes in the square. The plaza itself is the heart of Malasaña, surrounded by bars with terraces.',
    notes: 'Confirm April dates on Instagram · Pair with HanSo or Toma Café nearby',
    category: 'market',
  },
  {
    id: 'mercadillo-felipe-ii',
    name: 'Mercadillo Avenida de Felipe II',
    address: 'Avenida de Felipe II',
    neighborhood: 'Salamanca',
    hours: 'Monday–Saturday, all day · Free',
    tags: ['Daily Street Market', 'Walking distance'],
    description:
      'Set in the heart of Salamanca between Goya and Alcalá streets — nicknamed "Goya\'s hippies." Fresh fruits and vegetables, fish, meat, seafood, handmade ceramics and knitwear. Your neighborhood daily market — not a destination the way El Rastro is, but a lovely thing to wander through on a Tuesday morning.',
    notes: 'Walking distance · Great for picking up fresh produce mid-trip',
    category: 'market',
  },
  {
    id: 'cuesta-de-moyano',
    name: 'Cuesta de Moyano',
    address: 'Calle Claudio Moyano',
    neighborhood: 'Retiro',
    hours: 'Daily · Best on weekends · Free to browse',
    tags: ['Book Market', 'Near Retiro'],
    description:
      'Since 1925, the 30 wooden outdoor stalls lining Cuesta de Moyano provide avid readers with over 300,000 books on diverse branches of arts, science, and humanities, dating from the 19th century to present. Serious book collectors from all over the world shop here. 5 minutes from Retiro Park.',
    notes: '5 min walk from Retiro · Perfect paired with a park reading afternoon',
    category: 'market',
  },
  {
    id: 'mercado-de-la-paz',
    name: 'Mercado de la Paz',
    address: 'Calle Ayala 28B',
    neighborhood: 'Salamanca',
    hours: 'Mon–Fri 9am–8pm · Sat 9am–2:30pm · Closed Sundays',
    tags: ['Neighborhood Food Market', 'Walking distance'],
    description:
      'The indoor neighborhood market on your street, home to Casa Dani (arguably the best tortilla española in Madrid) and a rotating cast of excellent fish, cheese, and produce vendors. Not a flea market but a market in the true daily sense. Worth a Saturday morning browse.',
    notes: 'On your street · Saturday mornings are liveliest · Closed Good Friday',
    closedOn: ['Sunday'],
    category: 'market',
  },
  {
    id: 'festival-by-salesas',
    name: 'The Festival by Salesas',
    address: 'Barrio de Salesas',
    neighborhood: 'Salesas',
    hours: 'Saturday April 11 · @the_festival_by_salesas on Instagram',
    tags: ['Fashion · Art · Deco · Gastro', 'Apr 11', 'Most Chic'],
    description:
      'A curated market in the Salesas neighborhood where fashion, art, decor, gastronomy, and good energy converge. Independent brands, emerging designers, artisan makers, and food vendors in a neighborhood that has genuine style. This is your most polished market option — closest in spirit to what you\'d seek out in Brooklyn or Paris.',
    notes: 'April 11 — same Saturday as Mercado de Motores · Do both · Salesas morning → Motores afternoon',
    category: 'market',
  },
]
