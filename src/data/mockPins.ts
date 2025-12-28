export interface Pin {
  id: number
  title: string
  image: string
  author: string
  likes: number
}

const makeImage = (id: number) => `https://picsum.photos/seed/pin-${id}/600/800`

export const mockPins: Pin[] = Array.from({ length: 36 }).map((_, i) => ({
  id: i + 1,
  title: `Beautiful Image #${i + 1}`,
  image: makeImage(i + 1),
  author: `Photographer ${((i % 8) + 1)}`,
  likes: Math.floor(Math.random() * 500) + 10
}))
