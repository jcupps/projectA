import type { Pin } from './mockPins'

export interface Board {
  id: number
  title: string
  description?: string
  pins: Pin[]
}

const makeImage = (seed: string, w = 800, h = 600) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`

let idCounter = 1
const makePin = (title: string, author: string) => {
  const pin: Pin = {
    id: idCounter++,
    title,
    image: makeImage(title),
    author,
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

const dessertTitles = [
  'Chocolate Lava Cake',
  'Gulab Jamun',
  'Raspberry Cheesecake',
  'Tiramisu',
  'Mango Kulfi',
  'Pistachio Baklava'
]

const classicalReading = [
  'Pride and Prejudice — Jane Austen',
  'Meditations — Marcus Aurelius',
  'The Odyssey — Homer',
  'Crime and Punishment — Fyodor Dostoevsky',
  'The Divine Comedy — Dante Alighieri',
  'Jane Eyre — Charlotte Brontë'
]

const fantasyList = [
  'The Name of the Wind — Patrick Rothfuss',
  'The Hobbit — J.R.R. Tolkien',
  'The Lies of Locke Lamora — Scott Lynch',
  'A Wizard of Earthsea — Ursula K. Le Guin',
  'The Blade Itself — Joe Abercrombie',
  'Mistborn — Brandon Sanderson'
]

const workouts = [
  'Full Body HIIT (30 mins)',
  'Upper Body Strength (45 mins)',
  'Yoga Flow (30 mins)',
  'Core Blast (20 mins)',
  'Sprint Intervals (25 mins)',
  'Leg Day Circuit (40 mins)'
]

const decor = [
  'Boho Living Room Setup',
  'Minimalist Bedroom Ideas',
  'Cozy Reading Nook',
  'Indoor Plant Styling',
  'Gallery Wall Inspiration',
  'Small Balcony Makeover'
]

const makePinsFromTitles = (titles: string[], authorBase: string) =>
  titles.map((t) => makePin(t, `${authorBase}`))

export const mockBoards: Board[] = [
  {
    id: 1,
    title: 'Indian Recipes',
    description: 'Popular and traditional Indian dishes to try at home',
    pins: makePinsFromTitles(indianTitles, 'Chef Arjun')
  },
  {
    id: 2,
    title: 'Dessert Recipes',
    description: 'Sweet treats and dessert recipes from around the world',
    pins: makePinsFromTitles(dessertTitles, 'Baker Mila')
  },
  {
    id: 3,
    title: 'Classical Reading List',
    description: 'Essential classical works to read and re-read',
    pins: makePinsFromTitles(classicalReading, 'Literary Curator')
  },
  {
    id: 4,
    title: 'Fantasy Ready List',
    description: 'Epic and modern fantasy picks for long reading sessions',
    pins: makePinsFromTitles(fantasyList, 'Fantasy Guild')
  },
  {
    id: 5,
    title: 'Workout Routines',
    description: 'Short and effective routines to build strength and stamina',
    pins: makePinsFromTitles(workouts, 'Coach Riley')
  },
  {
    id: 6,
    title: 'Decor Inspirations',
    description: 'Styling ideas for home decor and small spaces',
    pins: makePinsFromTitles(decor, 'Home Stylist')
  }
]

export default mockBoards
