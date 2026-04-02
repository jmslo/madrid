export type Place = {
  id: string
  name: string
  address: string
  neighborhood: string
  hours?: string
  priceRange?: string
  tags: string[]
  description: string
  notes?: string
  category: 'restaurant' | 'cafe' | 'market' | 'shop'
  mustTry?: string
  reservationNeeded?: boolean
  closedOn?: string[]
}

export type TimeBlock = {
  time: string
  text: string
}

export type SpendItem = {
  label: string
  amount: number
  category: 'medical' | 'food' | 'transport' | 'build' | 'personal' | 'culture'
}

export type DayEntry = {
  dayNumber: number
  date: string
  weekday: string
  title: string
  subtitle: string
  status: 'done' | 'upcoming' | 'active'
  weekNumber: 1 | 2 | 3 | 4
  happened?: string[]
  didNotHappen?: string[]
  blocks?: TimeBlock[]
  tags: string[]
  spend?: SpendItem[]
  alerts?: string[]
  milestones?: string[]
}

export type TambreAppointment = {
  date: string
  time: string
  notes?: string
}

export type MedSchedule = {
  startDate: string
  medications: { name: string; dose: string; timing: string }[]
  endDate: string
  reminderTime: string
}
