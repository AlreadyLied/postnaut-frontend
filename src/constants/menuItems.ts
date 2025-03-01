import { StickyNote, ChartBar } from 'lucide-react'

const menuItems = [
  {
    id: "my-posts",
    text: "My Posts",
    icon: StickyNote,
    path: '/posts',
  },
  {
    id: "statistics",
    text: "Statistics",
    icon: ChartBar,
    path: '/statistics',
  },
]

export default menuItems

export type MenuPath = (typeof menuItems)[number]['path']
export type MenuText = (typeof menuItems)[number]['text']
