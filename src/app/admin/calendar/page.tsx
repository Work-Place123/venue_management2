'use client'

// import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
// import { parseISO } from 'date-fns'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const events = [
  {
    title: 'Wedding Shoot',
    start: new Date('2025-04-20'),
    end: new Date('2025-04-20'),
  },
  {
    title: 'Corporate Meetup',
    start: new Date('2025-05-10'),
    end: new Date('2025-05-10'),
  },
]

export default function CalendarPage() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h1 className="text-xl font-bold mb-4">Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  )
}
