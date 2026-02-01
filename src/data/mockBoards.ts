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
  author: string
  pins: Pin[],
  likes: number,
  comments: Comment[],
  sharedWith?: string[]
}

const makeImage = (seed: string, w = 800, h = 600) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`

let idCounter = 1
const makePin = (
  pinData: { title: string; description: string, image?: string, body?: string },
  author: string,
  generateImages: boolean = true
) => {
  const pin: Pin = {
    id: idCounter++,
    title: pinData.title,
    image: pinData.image ?? (generateImages && Math.random() > 0.4 ? makeImage(pinData.title) : undefined),
    author,
    description: pinData.description,
    body: pinData.body,
    likes: Math.floor(Math.random() * 900) + 20
  }
  return pin
}

const indianPins = [
  {
    title: 'Butter Chicken',
    description: 'Rich and creamy tomato-based curry with tender chicken pieces, perfect with naan or rice.\nhttps://recipes.com/butter-chicken-makhani-guide',
    body: `Marinade:

    1 ¾ pounds skinless, boneless chicken breast halves - cubed

    3 tablespoons lemon juice, divided

    2 tablespoons chili powder, divided

    salt to taste

    1 cup yogurt

    2 tablespoons olive oil

    2 tablespoons garlic paste

    2 tablespoons ginger paste

    2 tablespoons melted butter

    1 ½ teaspoons garam masala

Sauce:

    1 tablespoon butter

    1 tablespoon garam masala

    1 tablespoon ginger paste

    1 tablespoon chopped garlic

    1 tablespoon chopped green chile pepper

    2 cups tomato puree

    1 cup water

    1 tablespoon chili powder

    salt to taste

    1 tablespoon honey

    ½ teaspoon dried fenugreek leaves

    1 cup heavy cream
`,
    image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2023%2F02%2F07%2F5830864-makhani-chicken-indian-butter-chicken-MotherSarah-1x1-1.jpg&q=60&c=sc&poi=auto&orient=true&h=512'
  },
  {
    title: 'Chicken Saag',
    description: 'Tender chicken cooked in a flavorful spinach gravy with aromatic spices.\nhttps://culinary-hub.io/chicken-saag-authentic-recipe',
    image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1007395.jpg&q=60&c=sc&poi=auto&orient=true&h=512'
  },
  {
    title: 'Palak Paneer',
    description: 'Creamed spinach with fresh cottage cheese cubes, a classic vegetarian delight.\nhttps://veggie-kitchen.net/palak-paneer-cooking-tutorial',
    image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F9423499.jpg&q=60&c=sc&poi=auto&orient=true&h=512'
  },
  { title: 'Chole Bhature', description: 'Deep-fried bread served with spiced chickpea curry, a popular street food favorite.\nhttps://street-eats.com/chole-bhature-street-food-classic' },
  { title: 'Biryani (Hyderabadi)', description: 'Fragrant rice cooked with meat and spices, a royal dish with layers of flavor.\nhttps://royal-kitchens.co/hyderabadi-biryani-masterclass' },
  {
    title: 'Aloo Gobi',
    description: 'Simple and delicious stir-fried potatoes with cauliflower and aromatic spices.\nhttps://quick-meals.pro/aloo-gobi-easy-vegetable-curry',
    image: 'https://www.allrecipes.com/thmb/lVUDh4PrStKg55Ro0-umadES-Kc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/4469167-aloo-gobi-masala-cauliflower-and-potato-curry-Allrecipes-Magazine-4x3-1-d8ab6614b61f4787a9c262ec6a867df3.jpg'
  }
]

const dessertPins = [
  { title: 'Chocolate Lava Cake', description: 'Decadent warm chocolate cake with a molten center, perfect for chocolate lovers.\nhttps://dessert-lab.com/chocolate-lava-molten-center-recipe' },
  { title: 'Gulab Jamun', description: 'Sweet milk solids dumplings soaked in rose-flavored sugar syrup, an Indian classic.\nhttps://sweet-traditions.io/gulab-jamun-preparation-guide' },
  { title: 'Raspberry Cheesecake', description: 'Creamy cheesecake with tart raspberry layer, a modern dessert favorite.\nhttps://baker-blog.net/raspberry-cheesecake-no-bake-version' },
  { title: 'Tiramisu', description: 'Italian no-bake dessert with layers of mascarpone cream and espresso-soaked ladyfingers.\nhttps://italian-cooking.org/tiramisu-authentic-dessert-steps' },
  { title: 'Mango Kulfi', description: 'Frozen Indian ice cream with mango pulp and traditional flavors, served as bars.\nhttps://frozen-treats.in/mango-kulfi-homemade-ice-cream' },
  { title: 'Pistachio Baklava', description: 'Crispy phyllo pastry layered with pistachios and honey, a Middle Eastern treat.\nhttps://middle-east-kitchen.com/baklava-pastry-phyllo-technique' }
]

const classicalPins = [
  {
    title: 'Pride and Prejudice — Jane Austen',
    description: 'A witty romantic novel exploring love, class, and personal growth in Georgian England.\nhttps://literature.edu/pride-prejudice-jane-austen-analysis',
    image: 'https://m.media-amazon.com/images/I/71f5FjkTnkL._AC_UL320_.jpg'
  },
  { title: 'Meditations — Marcus Aurelius', description: 'Philosophical meditations on virtue, resilience, and living a meaningful life.\nhttps://philosophy-archive.org/meditations-marcus-aurelius' },
  {
    title: 'The Odyssey — Homer',
    description: 'An epic journey of Odysseus trying to return home after the Trojan War, timeless adventure.\nhttps://classics.org/the-odyssey-homer-study-guide',
    image: 'https://m.media-amazon.com/images/I/71LEtbDQyvL._AC_UL320_.jpg'
  },
  {
    title: 'Crime and Punishment — Fyodor Dostoevsky',
    description: 'A psychological thriller about guilt and redemption in 19th century Russia.\nhttps://classic-lit.io/crime-punishment-dostoevsky-deep-read',
    image: 'https://m.media-amazon.com/images/I/71O2XIytdqL._AC_UL320_.jpg'
  },
  {
    title: 'The Divine Comedy — Dante Alighieri',
    description: 'A poetic journey through Hell, Purgatory, and Paradise, exploring divine justice.\nhttps://medieval-literature.net/divine-comedy-dante-guide',
    image: 'https://m.media-amazon.com/images/I/91nRZwNtK2L._AC_UL320_.jpg'
  },
  { title: 'Jane Eyre — Charlotte Brontë', description: 'A gothic romance following an orphan girl\\nhttps://victorian-novels.com/jane-eyre-charlotte-bronte\'s struggles and triumph against adversity.' }
]

const fantasyPins = [
  { title: 'The Name of the Wind — Patrick Rothfuss', description: 'The origin story of Kvothe, a legendary figure, told through his own captivating recollections.\nhttps://fantasy-world.io/name-of-the-wind-rothfuss-guide' },
  { title: 'The Hobbit — J.R.R. Tolkien', description: 'A short but adventure-filled journey of Bilbo Baggins discovering courage and treasure.\nhttps://middle-earth.org/the-hobbit-tolkien-adventure' },
  { title: 'The Lies of Locke Lamora — Scott Lynch', description: 'A witty con-artist tale with intricate plotting and unforgettable characters in a fantasy Venice.\nhttps://fantasy-heist.com/locke-lamora-scott-lynch' },
  { title: 'A Wizard of Earthsea — Ursula K. Le Guin', description: 'A coming-of-age wizard story about balance between magic and responsibility, beautifully written.\nhttps://wizard-tales.edu/earthsea-ursula-le-guin' },
  { title: 'The Blade Itself — Joe Abercrombie', description: 'A gritty, character-driven epic with morally complex protagonists and brutal battles.\nhttps://grimdark-fantasy.net/blade-itself-abercrombie' },
  { title: 'Mistborn — Brandon Sanderson', description: 'An intricate fantasy world with unique magic systems and multiple interconnected narratives.\nhttps://magic-systems.io/mistborn-sanderson-worldbuilding' }
]

const workoutPins = [
  { title: 'Full Body HIIT (30 mins)', description: 'High-intensity interval training combining cardio and strength for maximum efficiency.\nhttps://fitness-hub.pro/hiit-workout-30-mins-guide' },
  { title: 'Upper Body Strength (45 mins)', description: 'Focused strength work for chest, back, shoulders, and arms with progressive overload.\nhttps://strength-training.net/upper-body-45-mins-routine' },
  { title: 'Yoga Flow (30 mins)', description: 'Mindful flowing sequences building flexibility, balance, and inner calm.\nhttps://yoga-daily.com/yoga-flow-30-mins-class' },
  { title: 'Core Blast (20 mins)', description: 'Targeted core exercises to build strength in abs, obliques, and lower back.\nhttps://abs-guide.io/core-blast-20-mins-workout' },
  { title: 'Sprint Intervals (25 mins)', description: 'Speed and endurance building through short, intense running intervals with rest periods.\nhttps://running-program.org/sprint-intervals-25-mins' },
  { title: 'Leg Day Circuit (40 mins)', description: 'Comprehensive leg workout targeting quads, hamstrings, glutes, and calves.\nhttps://leg-day.fitness/circuit-40-mins-training' }
]

const decorPins = [
  { title: 'Boho Living Room Setup', description: 'Create a warm, eclectic space with layered textures, natural materials, and global-inspired decor.\nhttps://home-design.co/boho-living-room-setup-guide' },
  { title: 'Minimalist Bedroom Ideas', description: 'Design a calm, clutter-free bedroom with neutral colors and essential furniture pieces.\nhttps://bedroom-ideas.net/minimalist-design-essentials' },
  { title: 'Cozy Reading Nook', description: 'Build the perfect cozy corner with comfortable seating, good lighting, and personal touches.\nhttps://interior-comfort.io/reading-nook-inspiration-diy' },
  { title: 'Indoor Plant Styling', description: 'Elevate your space with greenery, combining pots, stands, and hanging planters artfully.\nhttps://plant-styling.com/indoor-plant-arrangement-tips' },
  { title: 'Gallery Wall Inspiration', description: 'Create visual interest with a curated collection of art, photos, and prints on your walls.\nhttps://wall-art.design/gallery-wall-inspiration-guide' },
  { title: 'Small Balcony Makeover', description: 'Transform a small outdoor space into a functional and beautiful retreat with smart furnishing.\nhttps://patio-design.pro/balcony-makeover-small-spaces' }
]

const housePins = [
  {
    title: '245 Oak Ridge Dr.',
    description: 'Urban living with exposed brick, high ceilings, and open floor plan. Perfect for young professionals.\nhttps://realestate.pro/oak-ridge-loft-property-listing',
    image: 'https://photos.zillowstatic.com/fp/fe609ad06ba7ad18f9fcd06705708924-p_e.webp'
  },
  {
    title: '1847 Maple Ave.',
    description: 'Spacious family home with 4 bedrooms, good schools nearby, and a beautiful backyard.\nhttps://homes.search/maple-ave-suburban-family-home',
    image: 'https://photos.zillowstatic.com/fp/7f87327edacefd5c47496fef617b7863-p_e.webp'
  },
  {
    title: '512 Coastal Highway Ln.',
    description: 'Stunning ocean views with private beach access, modern amenities, and elegant architecture.\nhttps://luxury-properties.com/coastal-highway-beachfront',
    image: 'https://photos.zillowstatic.com/fp/01ebd9275fda23df49bc61d14a23ca5e-p_e.webp'
  },
  { title: '3925 Mountain View Rd.',
    description: 'Cozy mountain escape with stone fireplace, deck overlooking forest, and peaceful setting.\nhttps://mountain-homes.io/view-rd-cabin-retreat',
    image: 'https://photos.zillowstatic.com/fp/d2c613e3bfccde1b2c16d4391091c303-p_e.webp'
  },
  { title: '621 Historic District St.',
    description: 'Charming 1920s building in trendy neighborhood with original details and rooftop terrace.\nhttps://historic-properties.net/historic-district-brownstone',
    image: 'https://photos.zillowstatic.com/fp/34842cc449afa9cbfead053fa3a91bd2-p_e.webp'
  },
  { title: '784 Innovation Park Way',
    description: 'Smart home automation, solar panels, energy efficient, with cutting-edge kitchen and tech integration.\nhttps://tech-homes.co/innovation-park-smart-home',
    image: 'https://photos.zillowstatic.com/fp/5e20a023dba08abf8283a31c4ba6184f-p_e.webp'
  }
]

const weddingPins = [
  { title: 'Luxury Bedding Set', description: 'Egyptian cotton sheets and duvet cover in champagne, perfect for a luxurious bedroom.\nhttps://luxury-bedding.com/sheets-champagne-collection' },
  { title: 'Premium Cookware', description: 'Professional-grade stainless steel pots and pans, ideal for couples who love cooking together.\nhttps://cookware-shop.io/premium-cooking-set-review' },
  { title: 'Wine Decanter Set', description: 'Hand-blown crystal decanter with accompanying wine glasses for entertaining guests.\nhttps://wine-accessories.pro/decanter-set-guide' },
  { title: 'Espresso Machine', description: 'Automatic espresso machine with grinder, perfect for morning coffee rituals at home.\nhttps://coffee-gear.net/espresso-machine-home-barista' },
  { title: 'Silk Throw Pillows', description: 'Set of 4 silk throw pillows in neutral tones to enhance living room comfort and style.\nhttps://home-textiles.com/silk-pillows-neutral-tones' },
  { title: 'Crystal Vase Collection', description: 'Set of 3 hand-crafted crystal vases of varying heights for flower arrangements.\nhttps://vase-gallery.art/crystal-vase-arrangement' }
]

const travelPins = [
  { title: 'Kyoto, Japan', description: 'Ancient temples, traditional gardens, and geisha culture. Experience traditional Japan at its finest.\nhttps://travel-guide.jp/kyoto-japan-temples-geisha' },
  { title: 'Amalfi Coast, Italy', description: 'Colorful cliff villages, stunning coastal views, and incredible local cuisine along dramatic coastline.\nhttps://amalfi-coast.travel/village-guide-italy' },
  { title: 'Machu Picchu, Peru', description: 'Iconic Incan citadel perched high in the Andes mountains with breathtaking archaeological wonders.\nhttps://machu-picchu.org/peru-hiking-guide-incan' },
  { title: 'Norwegian Fjords', description: 'Dramatic steep-sided valleys with waterfalls, glaciers, and unforgettable natural landscapes.\nhttps://fjord-explorer.no/norwegian-landscapes-guide' },
  { title: 'Bali, Indonesia', description: 'Tropical paradise with white sand beaches, rice terraces, temples, and vibrant culture.\nhttps://bali-island.travel/beaches-temples-culture' },
  { title: 'Iceland - Ring Road', description: 'Epic driving adventure through Iceland visiting glaciers, waterfalls, geysers, and black sand beaches.\nhttps://iceland-roads.tour/ring-road-complete-guide' }
]

const emergencyPins = [
  { title: '1. Stock up on non-perishables', description: 'Stock up on non-perishable food items like canned goods, dried fruits, and nuts. Non-perishable foods ensure you have sustenance without relying on refrigeration.\nhttps://emergency-prep.io/power-outage-food-storage' },
  { title: '2. Keep a water supply', description: 'Keep a supply of bottled water for drinking and basic hygiene needs. Adequate water supply is crucial for hydration and sanitation during outages.\nhttps://survival-guide.net/emergency-water-supplies' },
  { title: '3. Have flashlights on hand', description: 'Have flashlights and extra batteries readily available in multiple locations. Flashlights provide essential lighting when the power goes out unexpectedly.\nhttps://power-outage.info/flashlight-emergency-kit' },
  { title: '4. Get a radio', description: 'Use a battery-powered or hand-crank radio to stay informed about weather and news updates. Staying informed helps you make safe decisions during emergencies.\nhttps://emergency-alert.com/radio-communication-guide' },
  { title: '5. Keep your devices charged', description: 'Charge all electronic devices beforehand and consider investing in portable power banks. Charged devices allow communication and access to important information.\nhttps://power-banks.tech/device-charging-outages' },
  { title: '6. Stay warm', description: 'Keep blankets, warm clothing, and sleeping bags accessible to stay warm if heating is unavailable. Warm clothing and blankets help maintain body heat in cold conditions.\nhttps://cold-weather.tips/staying-warm-emergency-situations' }
]

const makePinsFromArray = (
  pinArray: { title: string; description: string, image?: string, body?: string }[],
  authorBase: string,
  generateImages: boolean = true
) =>
  pinArray.map((pin) => makePin(pin, `${authorBase}`, generateImages))

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
  ],
  7: [
    { id: 19, author: 'Michael Torres', content: 'The beachfront villa is absolutely stunning! Adding to my dream list.', createdAt: new Date('2024-12-27') },
    { id: 20, author: 'Sarah Kim', content: 'That suburban home seems perfect for starting a family!', createdAt: new Date('2024-12-26') },
    { id: 21, author: 'James Wilson', content: 'The mountain cabin is calling me. Need a getaway!', createdAt: new Date('2024-12-25') }
  ],
  8: [
    { id: 22, author: 'Emma Davis', content: 'That espresso machine would be the perfect addition to our kitchen!', createdAt: new Date('2024-12-27') },
    { id: 23, author: 'Lucas Anderson', content: 'The luxury bedding set looks incredibly comfortable. Added to wishlist!', createdAt: new Date('2024-12-26') },
    { id: 24, author: 'Olivia Brown', content: 'Love the crystal vase collection - so elegant and timeless!', createdAt: new Date('2024-12-25') }
  ],
  9: [
    { id: 25, author: 'Sofia Martinez', content: 'Machu Picchu has been on my bucket list forever! Need to book this!', createdAt: new Date('2024-12-27') },
    { id: 26, author: 'Noah Johnson', content: 'The Amalfi Coast is so picturesque. Those cliffs are insane!', createdAt: new Date('2024-12-26') },
    { id: 27, author: 'Ava Thompson', content: 'Iceland road trip would be an absolute adventure. Saving this for next year!', createdAt: new Date('2024-12-25') }
  ]
}

export const mockBoards: Board[] = [
  {
    id: 1,
    title: 'Indian Recipes',
    description: 'Favorite Indian dishes',
    author: 'Chef Arjun',
    pins: makePinsFromArray(indianPins, 'Chef Arjun', false),
    comments: mockComments[1] || [],
    likes: 124
  },
  {
    id: 2,
    title: 'Dessert Recipes',
    description: 'Sweet treats and dessert recipes from around the world',
    author: 'Baker Mila',
    pins: makePinsFromArray(dessertPins, 'Baker Mila'),
    comments: mockComments[2] || [],
    likes: 98
  },
  {
    id: 3,
    title: 'Book Club Reading List',
    description: 'Essential classical works to read and re-read',
    author: 'Literary Curator',
    pins: makePinsFromArray(classicalPins, 'Literary Curator', false),
    comments: mockComments[3] || [],
    likes: 76
  },
  {
    id: 4,
    title: 'Fantasy Reading List',
    description: 'Epic and modern fantasy picks for long reading sessions',
    author: 'Fantasy Guild',
    pins: makePinsFromArray(fantasyPins, 'Fantasy Guild'),
    comments: mockComments[4] || [],
    likes: 89
  },
  {
    id: 5,
    title: 'Workout Routines',
    description: 'Short and effective routines to build strength and stamina',
    author: 'Coach Riley',
    pins: makePinsFromArray(workoutPins, 'Coach Riley'),
    comments: mockComments[5] || [],
    likes: 143
  },
  {
    id: 6,
    title: 'Decor Inspirations',
    description: 'Styling ideas for home decor and small spaces',
    author: 'Home Stylist',
    pins: makePinsFromArray(decorPins, 'Home Stylist'),
    comments: mockComments[6] || [],
    likes: 110
  },
  {
    id: 7,
    title: 'House Search List',
    description: 'Dream homes and properties to consider for relocation',
    author: 'Real Estate Scout',
    pins: makePinsFromArray(housePins, 'Real Estate Scout', false),
    comments: mockComments[7] || [],
    likes: 95
  },
  {
    id: 8,
    title: 'Wedding Gift Registry',
    description: 'Curated collection of gifts for the perfect home setup',
    author: 'Wedding Planner',
    pins: makePinsFromArray(weddingPins, 'Wedding Planner'),
    comments: mockComments[8] || [],
    likes: 130
  },
  {
    id: 9,
    title: 'Travel Bucket List',
    description: 'Dream destinations and must-visit places around the world',
    author: 'Travel Enthusiast',
    pins: makePinsFromArray(travelPins, 'Travel Enthusiast'),
    comments: mockComments[9] || [],
    likes: 150
  },
  {
    id: 10,
    title: 'Power Outage Survival Tips',
    description: 'Essential tips and tricks to stay safe and comfortable during power outages',
    author: 'Doomsday Prepper',
    pins: makePinsFromArray(emergencyPins, 'Doomsday Prepper'),
    comments: mockComments[9] || [],
    likes: 52
  }
]

export default mockBoards
