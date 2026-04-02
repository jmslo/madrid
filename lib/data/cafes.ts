import type { Place } from '../types'

export const cafes: Place[] = [
  {
    id: 'hola-coffee-lagasca',
    name: 'Hola Coffee Lagasca',
    address: 'Calle Lagasca 42',
    neighborhood: 'Salamanca',
    hours: 'Mon–Fri 8am–8pm · Weekends 9am–8pm',
    tags: ['Sit-in ✓', 'Salamanca Rotation'],
    description:
      'The best coffee in the neighborhood, full stop. Ranked #12 in the World\'s 100 Best Coffee Shops 2025 and featured in Condé Nast Traveler. Order the cortado — it\'s competition-level. Small space with limited seating; go on weekday mornings before 9am to guarantee a spot. Worth planning your day around.',
    notes: 'Arrive early on weekdays · Seating is luck-dependent on weekends',
    category: 'cafe',
    mustTry: 'Cortado',
  },
  {
    id: 'east-crema',
    name: 'East Crema Coffee Hermosilla',
    address: 'Calle Hermosilla 38',
    neighborhood: 'Salamanca',
    tags: ['Sit-in ✓', 'Salamanca Rotation'],
    description:
      'Inspired by Tokyo coffee culture, small and Japanese-minimal in feel. Beans from Brazil, Burundi, Colombia, and Ethiopia. Relaxed vibe with swift service — easier to get a seat than Hola. Doubles perfectly with your IML skin appointment on the same street. Try the flat white with oat milk and a tomato toast.',
    notes: 'Combine with IML Hermosilla appointment — same street',
    category: 'cafe',
    mustTry: 'Flat white with oat milk + tomato toast',
  },
  {
    id: 'religion-coffee',
    name: 'Religion Coffee Shop',
    address: 'Calle María de Molina 24',
    neighborhood: 'Salamanca',
    hours: 'Mon–Fri 8am–8pm · Sat–Sun 10am–6pm',
    tags: ['Sit-in ✓', 'Best for long stays', 'Salamanca Rotation'],
    description:
      'This is your reading café. Two levels — the upper floor has wide street-facing windows and is made for sitting slowly with a book. The lower level is cozier, better for journaling. Recommended by The Infatuation as a pre-Sorolla / Bernabéu stop. Specialty rose and lavender lattes are genuinely good; the French toast is worth ordering at least once. Small but lingering is encouraged.',
    notes: 'Grab the upper window seat · Best two-hour reading spot in Salamanca',
    category: 'cafe',
    mustTry: 'Rose or lavender latte + French toast',
  },
  {
    id: 'buna',
    name: 'BUNA Specialty Coffee',
    address: 'Calle del Conde de Aranda 10',
    neighborhood: 'Salamanca',
    hours: 'Mon–Sat 9am–6pm · Sun 10:30am–5pm',
    tags: ['Takeaway only', 'Salamanca Rotation'],
    description:
      'No seats, but the best pre-Retiro stop in the neighborhood. Get a cortado and a pistachio cookie (made fresh daily — they sell out), walk five minutes to the park, find a bench. Perfect morning ritual. The cookies alone have their own following. 5.0 stars · 466 reviews.',
    notes: 'No seating — pair with Retiro walk · Arrive before 11am for cookies',
    category: 'cafe',
    mustTry: 'Cortado + pistachio cookie',
  },
  {
    id: 'hola-coffee-fourquet',
    name: 'Hola Coffee Fourquet',
    address: 'Calle de los Embajadores / Lavapiés area',
    neighborhood: 'Lavapiés',
    tags: ['Sit-in ✓', 'Near Botánico'],
    description:
      'Second Hola Coffee location near the Jardín Botánico and Lavapiés. Same quality as Lagasca — competition-level cortados in a neighborhood with completely different energy. Good stop on a museum-triangle day.',
    category: 'cafe',
    mustTry: 'Cortado',
  },
  {
    id: 'hanso',
    name: 'HanSo Café',
    address: 'Malasaña',
    neighborhood: 'Malasaña',
    tags: ['Sit-in ✓', 'Best for long stays', 'Worth the Walk'],
    description:
      'The name translates loosely to "a humble person who invites you home" — that\'s exactly the feeling. Cozy, vibrant, with real staying power. Owner trained with the Toma Café team before opening in 2015. One of the most genuinely lingering-friendly cafés in Madrid; you won\'t feel rushed. Use this for a long journaling morning when you\'re exploring Malasaña anyway.',
    notes: 'Praised by Barista Magazine & Condé Nast Traveler · Pair with thrifting on Calle Velarde',
    category: 'cafe',
  },
  {
    id: 'toma-cafe',
    name: 'Toma Café',
    address: 'Malasaña',
    neighborhood: 'Malasaña',
    tags: ['Sit-in ✓', 'Worth the Walk'],
    description:
      'The café that started Madrid\'s third-wave coffee movement. Small, characterful, beloved by locals and every serious coffee publication that\'s ever covered the city. Not the most lingering-friendly space due to size, but the cortado here is the benchmark everything else in Madrid is measured against. Go at least once.',
    notes: 'Consistently cited by Condé Nast, Culture Trip, Barista Magazine · The OG — go once',
    category: 'cafe',
    mustTry: 'Cortado',
  },
  {
    id: 'najis',
    name: "Naji's",
    address: 'City center · near museum triangle',
    neighborhood: 'City Center',
    tags: ['Sit-in ✓', 'Worth the Walk'],
    description:
      "Named after its Iraqi-born owner, Naji's is known for a pistachio latte that Condé Nast describes as magical — authentic pistachio flavor, nothing like the sugary versions elsewhere. A destination worth visiting for the experience, especially on a museum-district day when you're already near the Prado or Thyssen. You're off alcohol for the trip; this is your indulgent drink.",
    notes: 'Featured in Condé Nast Traveler',
    category: 'cafe',
    mustTry: 'Pistachio latte',
  },
]
