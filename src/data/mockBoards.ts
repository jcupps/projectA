import type { Pin } from './mockPins'

export interface Comment {
  id: number,
  author: string,
  content: string,
  createdAt: Date
}

export interface Board {
  id: number
  title: string
  description?: string
  pins: Pin[],
  comments: Comment[],
  sharedWith?: string[]
}

const makeImage = (seed: string, w = 800, h = 600) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`

let idCounter = 1
const makePin = (title: string, author: string, description: string) => {
  const pin: Pin = {
    id: idCounter++,
    title,
    image: makeImage(title),
    author,
    description,
    likes: Math.floor(Math.random() * 900) + 20
  }
  return pin
}

const indianTitles = [
  'Butter Chicken',
  'Masala Dosa',
  'Palak Paneer',
  'Chole Bhature',
  'Biryani (Hyderabadi)',
  'Aloo Gobi'
]

const indianDescriptions = [
  'Rich and creamy tomato-based curry with tender chicken pieces, perfect with naan or rice.',
  'Crispy lentil crepe with potato and onion filling, served with coconut and chutney.',
  'Creamed spinach with fresh cottage cheese cubes, a classic vegetarian delight.',
  'Deep-fried bread served with spiced chickpea curry, a popular street food favorite.',
  'Fragrant rice cooked with meat and spices, a royal dish with layers of flavor.',
  'Simple and delicious stir-fried potatoes with cauliflower and aromatic spices.'
]

const dessertTitles = [
  'Chocolate Lava Cake',
  'Gulab Jamun',
  'Raspberry Cheesecake',
  'Tiramisu',
  'Mango Kulfi',
  'Pistachio Baklava'
]

const dessertDescriptions = [
  'Decadent warm chocolate cake with a molten center, perfect for chocolate lovers.',
  'Sweet milk solids dumplings soaked in rose-flavored sugar syrup, an Indian classic.',
  'Creamy cheesecake with tart raspberry layer, a modern dessert favorite.',
  'Italian no-bake dessert with layers of mascarpone cream and espresso-soaked ladyfingers.',
  'Frozen Indian ice cream with mango pulp and traditional flavors, served as bars.',
  'Crispy phyllo pastry layered with pistachios and honey, a Middle Eastern treat.'
]

const classicalReading = [
  'Pride and Prejudice — Jane Austen',
  'Meditations — Marcus Aurelius',
  'The Odyssey — Homer',
  'Crime and Punishment — Fyodor Dostoevsky',
  'The Divine Comedy — Dante Alighieri',
  'Jane Eyre — Charlotte Brontë'
]

const classicalDescriptions = [
  'A witty romantic novel exploring love, class, and personal growth in Georgian England.',
  'Philosophical meditations on virtue, resilience, and living a meaningful life.',
  'An epic journey of Odysseus trying to return home after the Trojan War, timeless adventure.',
  'A psychological thriller about guilt and redemption in 19th century Russia.',
  'A poetic journey through Hell, Purgatory, and Paradise, exploring divine justice.',
  'A gothic romance following an orphan girl\'s struggles and triumph against adversity.'
]

const fantasyList = [
  'The Name of the Wind — Patrick Rothfuss',
  'The Hobbit — J.R.R. Tolkien',
  'The Lies of Locke Lamora — Scott Lynch',
  'A Wizard of Earthsea — Ursula K. Le Guin',
  'The Blade Itself — Joe Abercrombie',
  'Mistborn — Brandon Sanderson'
]

const fantasyDescriptions = [
  'The origin story of Kvothe, a legendary figure, told through his own captivating recollections.',
  'A short but adventure-filled journey of Bilbo Baggins discovering courage and treasure.',
  'A witty con-artist tale with intricate plotting and unforgettable characters in a fantasy Venice.',
  'A coming-of-age wizard story about balance between magic and responsibility, beautifully written.',
  'A gritty, character-driven epic with morally complex protagonists and brutal battles.',
  'An intricate fantasy world with unique magic systems and multiple interconnected narratives.'
]

const workouts = [
  'Full Body HIIT (30 mins)',
  'Upper Body Strength (45 mins)',
  'Yoga Flow (30 mins)',
  'Core Blast (20 mins)',
  'Sprint Intervals (25 mins)',
  'Leg Day Circuit (40 mins)'
]

const workoutDescriptions = [
  'High-intensity interval training combining cardio and strength for maximum efficiency.',
  'Focused strength work for chest, back, shoulders, and arms with progressive overload.',
  'Mindful flowing sequences building flexibility, balance, and inner calm.',
  'Targeted core exercises to build strength in abs, obliques, and lower back.',
  'Speed and endurance building through short, intense running intervals with rest periods.',
  'Comprehensive leg workout targeting quads, hamstrings, glutes, and calves.'
]

const decor = [
  'Boho Living Room Setup',
  'Minimalist Bedroom Ideas',
  'Cozy Reading Nook',
  'Indoor Plant Styling',
  'Gallery Wall Inspiration',
  'Small Balcony Makeover'
]

const decorDescriptions = [
  'Create a warm, eclectic space with layered textures, natural materials, and global-inspired decor.',
  'Design a calm, clutter-free bedroom with neutral colors and essential furniture pieces.',
  'Build the perfect cozy corner with comfortable seating, good lighting, and personal touches.',
  'Elevate your space with greenery, combining pots, stands, and hanging planters artfully.',
  'Create visual interest with a curated collection of art, photos, and prints on your walls.',
  'Transform a small outdoor space into a functional and beautiful retreat with smart furnishing.'
]

const makePinsFromTitles = (titles: string[], descriptions: string[], authorBase: string) =>
  titles.map((t, i) => makePin(t, `${authorBase}`, descriptions[i]))

const mockComments: { [key: number]: Comment[] } = {
  1: [
    { id: 1, author: 'Priya Singh', content: 'Can\'t wait to try the butter chicken! Will report back with my results.', createdAt: new Date('2024-12-27') },
    { id: 2, author: 'Raj Kumar', content: 'The masala dosa looks absolutely delicious. Anyone have tips for making crispy dosas?', createdAt: new Date('2024-12-26') },
    { id: 3, author: 'Akira Chen', content: 'I made the palak paneer last weekend and it was a hit with the family!', createdAt: new Date('2024-12-25') }
  ],
  2: [
    { id: 4, author: 'Sarah Williams', content: 'That chocolate lava cake is on my list for sure!', createdAt: new Date('2024-12-27') },
    { id: 5, author: 'Marco Russo', content: 'The tiramisu recipe looks authentic. Which brand of mascarpone do you recommend?', createdAt: new Date('2024-12-26') },
    { id: 6, author: 'Emma Thompson', content: 'Just made the raspberry cheesecake - it turned out beautifully!', createdAt: new Date('2024-12-24') }
  ],
  3: [
    { id: 7, author: 'Alexander Rhodes', content: 'Jane Austen is a must-read. Pride and Prejudice has so many layers!', createdAt: new Date('2024-12-27') },
    { id: 8, author: 'Sophie Carter', content: 'Meditations by Marcus Aurelius changed my perspective on life.', createdAt: new Date('2024-12-26') },
    { id: 9, author: 'Thomas Mitchell', content: 'The Odyssey is epic in the true sense of the word. Worth every page!', createdAt: new Date('2024-12-25') }
  ],
  4: [
    { id: 10, author: 'Eliza Stone', content: 'Patrick Rothfuss is incredible! The world-building in The Name of the Wind is unmatched.', createdAt: new Date('2024-12-27') },
    { id: 11, author: 'Marcus Flynn', content: 'The Hobbit is perfect for casual fantasy readers. Great starting point!', createdAt: new Date('2024-12-26') },
    { id: 12, author: 'Isabella Moore', content: 'Brandon Sanderson\'s magic systems are the best in the genre. Can\'t recommend enough!', createdAt: new Date('2024-12-25') }
  ],
  5: [
    { id: 13, author: 'James Benson', content: 'The HIIT workout was intense but amazing results in just 4 weeks!', createdAt: new Date('2024-12-27') },
    { id: 14, author: 'Lisa Park', content: 'Yoga Flow is perfect for my recovery days. Feeling so much more flexible!', createdAt: new Date('2024-12-26') },
    { id: 15, author: 'David Chen', content: 'Upper body strength routine knocked out with good form. Will repeat 3x per week!', createdAt: new Date('2024-12-25') }
  ],
  6: [
    { id: 16, author: 'Nina Petrov', content: 'The boho living room setup is exactly what I need! Love the colors.', createdAt: new Date('2024-12-27') },
    { id: 17, author: 'Oscar Green', content: 'That cozy reading nook is calling my name. Time to reorganize!', createdAt: new Date('2024-12-26') },
    { id: 18, author: 'Victoria Hayes', content: 'Indoor plant styling tips are gold. My apartment looks like a jungle now!', createdAt: new Date('2024-12-25') }
  ]
}

export const mockBoards: Board[] = [
  {
    id: 1,
    title: 'Indian Recipes',
    description: 'Popular and traditional Indian dishes to try at home',
    pins: makePinsFromTitles(indianTitles, indianDescriptions, 'Chef Arjun'),
    comments: mockComments[1] || []
  },
  {
    id: 2,
    title: 'Dessert Recipes',
    description: 'Sweet treats and dessert recipes from around the world',
    pins: makePinsFromTitles(dessertTitles, dessertDescriptions, 'Baker Mila'),
    comments: mockComments[2] || []
  },
  {
    id: 3,
    title: 'Book Club Reading List',
    description: 'Essential classical works to read and re-read',
    pins: makePinsFromTitles(classicalReading, classicalDescriptions, 'Literary Curator'),
    comments: mockComments[3] || []
  },
  {
    id: 4,
    title: 'Fantasy Ready List',
    description: 'Epic and modern fantasy picks for long reading sessions',
    pins: makePinsFromTitles(fantasyList, fantasyDescriptions, 'Fantasy Guild'),
    comments: mockComments[4] || []
  },
  {
    id: 5,
    title: 'Workout Routines',
    description: 'Short and effective routines to build strength and stamina',
    pins: makePinsFromTitles(workouts, workoutDescriptions, 'Coach Riley'),
    comments: mockComments[5] || []
  },
  {
    id: 6,
    title: 'Decor Inspirations',
    description: 'Styling ideas for home decor and small spaces',
    pins: makePinsFromTitles(decor, decorDescriptions, 'Home Stylist'),
    comments: mockComments[6] || []
  }
]

export default mockBoards
