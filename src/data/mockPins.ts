import { Comment } from './mockBoards'

export interface Pin {
  id: number
  title: string
  image?: string
  author: string
  description?: string
  likes: number
  comments?: Comment[]
}

const makeImage = (id: number) => `https://picsum.photos/seed/pin-${id}/600/800`

const descriptions = [
  'A stunning landscape with golden hour lighting and breathtaking views.',
  'Minimalist aesthetic with clean lines and perfect composition.',
  'Vibrant colors and dynamic composition that captures the essence of nature.',
  'Moody and atmospheric with rich details and texture.',
  'Abstract interpretation of everyday life with a unique perspective.',
  'Portrait with striking lighting and emotional depth.',
  'Architectural beauty showcasing modern design principles.',
  'Street photography capturing candid human moments.',
  'Nature photography celebrating the beauty of wildlife.',
  'Macro photography revealing intricate details of small subjects.',
  'Food photography that celebrates culinary artistry.',
  'Travel photography showcasing exotic destinations.',
]

export const mockPins: Pin[] = Array.from({ length: 36 }).map((_, i) => ({
  id: i + 1,
  title: `Beautiful Image #${i + 1}`,
  image: makeImage(i + 1),
  author: `Photographer ${((i % 8) + 1)}`,
  description: descriptions[i % descriptions.length],
  likes: Math.floor(Math.random() * 500) + 10
}))
