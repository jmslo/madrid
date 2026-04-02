import type { TambreAppointment, MedSchedule } from '../types'

export const tambreAppointments: TambreAppointment[] = [
  { date: 'Tue Apr 7',  time: '8:30am',  notes: 'Set two alarms the night before' },
  { date: 'Thu Apr 9',  time: '7:15pm',  notes: '' },
  { date: 'Sat Apr 11', time: '11:30am', notes: 'Same day as Salesas Festival + Motores market' },
  { date: 'Sun Apr 19', time: 'TBC ~8–10am', notes: 'Retrieval day — the whole reason you came' },
]

export const medSchedule: MedSchedule = {
  startDate: 'Apr 3',
  medications: [
    { name: 'Pergoveris', dose: '300 UI', timing: '10pm nightly' },
    { name: 'Desogestrel', dose: '75mg', timing: '10pm nightly' },
  ],
  endDate: '~Apr 19 (retrieval)',
  reminderTime: '10:00 PM',
}

export const tambreContact = {
  address: 'Calle del Tambre 8, Madrid',
  phone: '+34 914 11 61 11',
  website: 'clinicatambre.com',
}
