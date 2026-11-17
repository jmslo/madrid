// Everything the homepage says lives here. Edit this file to update the page.

/* ── Send-me-a-rec form ──────────────────────────────────────────────────────
   Works the same way as /reads/recs: the form POSTs JSON to a Google Apps
   Script web app, which appends a row to a Google Sheet.

   To connect it:
   1. Create a new Google Sheet (header row: Timestamp | Rec | From | Page).
   2. Extensions → Apps Script, paste:

        function doPost(e) {
          var data = JSON.parse(e.postData.contents);
          SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
            .appendRow([new Date(), data.rec || '', data.name || '', data.page || '']);
          return ContentService.createTextOutput('ok');
        }

   3. Deploy → New deployment → Web app → Execute as: Me, Access: Anyone.
   4. Paste the /exec URL below.

   While this is empty the form tells visitors it isn't connected yet
   instead of pretending to send. */
export const REC_SUBMIT_URL = ''

export const roles = [
  'Educator',
  'Builder',
  'Reader',
  'Runner',
  'Dancer',
  'Sewer',
  'Host',
  'Traveler',
  'Side Quester',
]

export const hq = 'Brooklyn'
export const roaming = ['SF', 'CDMX', 'London', 'Madrid']

/* ── Rapid fire ── */
export type Fact = { label: string; value: string; detail?: string; href?: string }
export const facts: Fact[] = [
  { label: 'Hometown', value: 'Fairfax, VA' },
  { label: 'On the sewing table', value: 'A fall pea coat', detail: 'Nearly done' },
  { label: 'Last finished', value: 'Good People', detail: 'Patmeena Sabit' },
  { label: 'Books logged', value: '300', detail: 'Since 2014', href: '/reads' },
  {
    label: 'Counting down',
    value: '40 Before 40',
    href: '/40-before-40',
  },
  { label: 'Daydreaming about', value: 'A bilingual life in CDMX' },
]

/* ── Recent projects ── */
export type Project = {
  id: 'recipes' | 'packing' | 'forty' | 'shelf' | 'coat'
  title: string
  blurb: string
  href?: string
  linkLabel?: string
  status?: string
}
export const projects: Project[] = [
  {
    id: 'recipes',
    title: 'Recipe Book app',
    blurb: 'My spot to keep previously scattered recipes saved, so they turn into real meals.',
    href: '/recipes',
    linkLabel: 'jessicaslocum.com/recipes',
  },
  {
    id: 'packing',
    title: 'Packing List app',
    blurb:
      'My solve for the challenge of forgetting one important item every time. For my closet only, sorry.',
    href: '/packing',
    linkLabel: 'jessicaslocum.com/packing',
  },
  {
    id: 'forty',
    title: '40 Before 40',
    blurb: 'A bucket list of to-dos, with 13 months and counting.',
    href: '/40-before-40',
    linkLabel: 'See the list',
  },
  {
    id: 'shelf',
    title: 'Bookshelf',
    blurb: 'A look at all my beloved reads of the last decade.',
    href: '/reads',
    linkLabel: 'See my reads',
  },
  {
    id: 'coat',
    title: 'The Coat',
    blurb:
      'After much anticipation, nearly done sewing my own fall pea coat, my most ambitious project yet.',
    status: 'On the sewing table',
  },
]

/* ── Reading for pleasure ──
   Pulled from the Slocum Stacks (/reads), most recent first. The quotes are
   lifted straight from the reviews there. */
export type Tone = 'persimmon' | 'pine' | 'slate' | 'butter' | 'plum' | 'ink'
export type Book = {
  title: string
  author: string
  rating: number
  favorite?: boolean
  tone: Tone
  quote: string
  /** shorter line for under the cover, when `quote` is already shown large */
  shelfQuote?: string
}
export const pleasureReads: Book[] = [
  {
    title: 'Good People',
    author: 'Patmeena Sabit',
    rating: 5,
    favorite: true,
    tone: 'persimmon',
    quote:
      'Not even two-thirds through this book, I was already texting friends to read it so I’d have someone to discuss it with.',
    shelfQuote: 'Wow, what a debut.',
  },
  {
    title: 'The Calamity Club',
    author: 'Kathryn Stockett',
    rating: 4.5,
    favorite: true,
    tone: 'pine',
    quote: 'So enjoyable, genuinely couldn’t-put-downable.',
  },
  {
    title: 'Whistler',
    author: 'Ann Patchett',
    rating: 4,
    tone: 'slate',
    quote: 'The horse on the cover art is highly misleading. Expect very little horse.',
  },
  {
    title: 'Margo’s Got Money Troubles',
    author: 'Rufi Thorpe',
    rating: 4.5,
    tone: 'butter',
    quote: 'It’s silly, taboo, fast-moving, and surprisingly sweet.',
  },
  {
    title: 'Go as a River',
    author: 'Shelley Read',
    rating: 4,
    tone: 'plum',
    quote: 'I stayed up far too late to finish this can’t-put-down-able novel.',
  },
  {
    title: 'London Falling',
    author: 'Patrick Radden Keefe',
    rating: 4.5,
    favorite: true,
    tone: 'ink',
    quote: 'The epitome of non-fiction that reads like fiction.',
  },
]

/* ── Reading for work ── */
export type WorkRead = {
  kind: 'Book' | 'Article'
  title: string
  source: string
  href?: string
}
export const workFinished: WorkRead[] = [
  { kind: 'Book', title: 'Situated', source: 'Angela Duckworth' },
]
export const workQueue: WorkRead[] = [
  {
    kind: 'Article',
    title: '“What Do the Best Learners Do?”',
    source: 'Charles Duhigg, Substack',
    href: 'https://charlesduhigg.substack.com/p/what-do-the-best-learners-do',
  },
  {
    kind: 'Article',
    title: 'On OpenAI’s “rogue” models',
    source: 'The Guardian, Comment is Free',
    href: 'https://www.theguardian.com/commentisfree/2026/sep/08/openai-rogue-models-hugging-face-investigation',
  },
  {
    kind: 'Article',
    title: '“How to Talk to People Who Believe Different Things”',
    source: 'Matthew Facciani, Substack',
    href: 'https://matthewfacciani.substack.com/p/how-to-talk-to-people-who-believe',
  },
]

/* ── Places ──
   kind: 'hq' (home), 'orbit' (frequently found roaming), 'list' (has a Maps list).
   Add a `note` to any place and it appears under its name. */
export type Place = {
  id: string
  name: string
  lat: number
  lon: number
  kinds: ('hq' | 'orbit' | 'list')[]
  mapsUrl?: string
  note?: string
  /** where the label sits relative to the pin on the map */
  label: { dx: number; dy: number; anchor: 'start' | 'end' | 'middle' }
}
export const places: Place[] = [
  {
    id: 'brooklyn',
    name: 'Brooklyn',
    lat: 40.68,
    lon: -73.94,
    kinds: ['hq'],
    label: { dx: 12, dy: 18, anchor: 'start' },
  },
  {
    id: 'sf',
    name: 'San Francisco',
    lat: 37.77,
    lon: -122.42,
    kinds: ['orbit'],
    label: { dx: 2, dy: 24, anchor: 'start' },
  },
  {
    id: 'cdmx',
    name: 'Mexico City',
    lat: 19.43,
    lon: -99.13,
    kinds: ['orbit', 'list'],
    mapsUrl: 'https://maps.app.goo.gl/NtWvzVPwxX99shct7',
    label: { dx: -12, dy: 20, anchor: 'end' },
  },
  {
    id: 'london',
    name: 'London',
    lat: 51.51,
    lon: -0.13,
    kinds: ['orbit'],
    label: { dx: 12, dy: 5, anchor: 'start' },
  },
  {
    id: 'madrid',
    name: 'Madrid',
    lat: 40.42,
    lon: -3.7,
    kinds: ['orbit'],
    label: { dx: -12, dy: 6, anchor: 'end' },
  },
  {
    id: 'norway',
    name: 'Norway',
    lat: 61.0,
    lon: 8.5,
    kinds: ['list'],
    mapsUrl: 'https://maps.app.goo.gl/aFMEa9WqbL6sv6847',
    label: { dx: 12, dy: -6, anchor: 'start' },
  },
  {
    id: 'edinburgh',
    name: 'Edinburgh',
    lat: 55.95,
    lon: -3.19,
    kinds: ['list'],
    mapsUrl: 'https://maps.app.goo.gl/D6rLxykpYuGpXbKN7',
    label: { dx: -12, dy: -4, anchor: 'end' },
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    lat: 41.39,
    lon: 2.17,
    kinds: ['list'],
    mapsUrl: 'https://maps.app.goo.gl/6howad7JyoeC2NpGA',
    label: { dx: 12, dy: 14, anchor: 'start' },
  },
  {
    id: 'nairobi',
    name: 'Nairobi',
    lat: -1.29,
    lon: 36.82,
    kinds: ['list'],
    mapsUrl: 'https://maps.app.goo.gl/kAEajQBueNEa9DKSA',
    label: { dx: -12, dy: 5, anchor: 'end' },
  },
]

/* ── What I can't stop thinking about ── */
export const preoccupations: { topic: string; take: string }[] = [
  {
    topic: 'Tradeoffs of AI in education',
    take: 'The tools promise personalization at scale, but I keep asking what a classroom loses when a model does the noticing instead of a teacher.',
  },
  {
    topic: 'The art of conflict, per Priya Parker',
    take: 'She reframes conflict as data, not failure. I’m trying to actually believe that instead of just repeating it.',
  },
  {
    topic: 'Influencer erosion of authentic culture',
    take: 'When everything is content, is anything still just a life? Watching what gets lost in the performance of it.',
  },
  {
    topic: 'How people change our minds',
    take: 'Facts rarely do it. I’m more interested in the moments (a relationship, a story, a single conversation) that actually move someone.',
  },
  {
    topic: 'What I’ll change my mind about 10 years from now',
    take: 'A useful exercise in humility: assume some of what I’m sure of today will look naive later, and try to guess which parts.',
  },
  {
    topic: 'Fighting for democracy',
    take: 'Institutions don’t defend themselves. Increasingly convinced this is everyone’s job, not just some people’s.',
  },
  {
    topic: 'Return to analog trends',
    take: 'Film cameras, paper planners, landlines making a quiet comeback. What are people actually reaching for?',
  },
  {
    topic: 'Gaps in women’s health research',
    take: 'So much of what we “know” about the body is extrapolated from studies that never included women. The gap is enormous and still growing.',
  },
]

/* ── Occasional writings ──
   The first is real. The other two are placeholder text; replace them. */
export const writings: { title: string; dek?: string; href?: string; placeholder?: boolean }[] = [
  { title: 'What Part of No: 90s Country Music Taught Me Feminism' },
  {
    title: 'Lorem ipsum dolor sit amet',
    dek: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    placeholder: true,
  },
  {
    title: 'Ut enim ad minim veniam',
    dek: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    placeholder: true,
  },
]
export const writingsNote = 'Mostly unpublished. Occasionally Substack.'
