import { tambreAppointments, medSchedule, tambreContact } from '@/lib/data/medical'

function getDaysToRetrieval() {
  const retrieval = new Date('2026-04-19')
  const today = new Date()
  const diff = Math.ceil((retrieval.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  return diff
}

export default function MedicalPage() {
  const daysToRetrieval = getDaysToRetrieval()

  return (
    <div className="max-w-3xl mx-auto px-6 pb-20">
      {/* Header */}
      <div className="py-10 border-b" style={{ borderColor: 'var(--dust)' }}>
        <div
          className="text-[10px] tracking-[3px] uppercase mb-3"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--recovery)' }}
        >
          Clínica Tambre
        </div>
        <h1
          className="text-4xl md:text-5xl font-light italic leading-tight mb-3"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          Medical
        </h1>
        <p
          className="text-[15px] italic leading-relaxed"
          style={{ fontFamily: 'var(--font-cormorant), serif', color: 'var(--muted)' }}
        >
          This is the whole reason you came. Everything else is secondary.
        </p>
      </div>

      {/* Retrieval countdown */}
      {daysToRetrieval > 0 && (
        <div
          className="my-6 px-6 py-5 border-l-4 flex items-center justify-between"
          style={{ borderColor: 'var(--recovery)', background: '#f5f2fa' }}
        >
          <div>
            <div
              className="text-[9px] tracking-[2px] uppercase mb-1"
              style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--recovery)' }}
            >
              Retrieval Countdown
            </div>
            <div
              className="text-3xl font-light"
              style={{ fontFamily: 'var(--font-cormorant), serif', color: 'var(--ink)' }}
            >
              {daysToRetrieval} {daysToRetrieval === 1 ? 'day' : 'days'} to go
            </div>
          </div>
          <div
            className="text-[10px] tracking-[1px] uppercase text-right"
            style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--recovery)' }}
          >
            Sunday<br />Apr 19
          </div>
        </div>
      )}
      {daysToRetrieval <= 0 && (
        <div className="milestone-bar my-6">
          Retrieval complete ✦
        </div>
      )}

      {/* Tambre contact */}
      <div className="ink-block mb-6">
        <div
          className="text-[10px] tracking-[3px] uppercase mb-4"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--gold)' }}
        >
          Clínica Tambre
        </div>
        <div className="grid gap-2 text-[13px]" style={{ color: 'rgba(245,240,232,0.85)' }}>
          <div className="grid gap-8" style={{ gridTemplateColumns: 'auto 1fr' }}>
            <span style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'rgba(245,240,232,0.4)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Address</span>
            <span>{tambreContact.address}</span>
          </div>
          <div className="grid gap-8" style={{ gridTemplateColumns: 'auto 1fr' }}>
            <span style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'rgba(245,240,232,0.4)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Phone</span>
            <span style={{ fontFamily: 'var(--font-dm-mono), monospace' }}>{tambreContact.phone}</span>
          </div>
          <div className="grid gap-8" style={{ gridTemplateColumns: 'auto 1fr' }}>
            <span style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'rgba(245,240,232,0.4)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Web</span>
            <span style={{ fontFamily: 'var(--font-dm-mono), monospace' }}>{tambreContact.website}</span>
          </div>
        </div>
      </div>

      {/* Appointment timeline */}
      <div className="mb-8">
        <div
          className="text-[10px] tracking-[2px] uppercase mb-6 pb-2 border-b"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--recovery)', borderColor: 'var(--dust)' }}
        >
          Appointments
        </div>

        <div className="flex flex-col gap-0">
          {tambreAppointments.map((appt, i) => (
            <div
              key={i}
              className="grid items-start py-5 border-b"
              style={{ gridTemplateColumns: '120px 1fr', borderColor: 'var(--dust)' }}
            >
              <div>
                <div
                  className="text-[10px] tracking-[1px] uppercase"
                  style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--recovery)' }}
                >
                  {appt.date}
                </div>
                <div
                  className="text-2xl font-light mt-0.5"
                  style={{ fontFamily: 'var(--font-cormorant), serif', color: 'var(--ink)' }}
                >
                  {appt.time}
                </div>
              </div>
              <div className="pt-1">
                {appt.notes && (
                  <div
                    className="text-[13px] leading-relaxed"
                    style={{ color: 'var(--muted)' }}
                  >
                    {appt.notes}
                  </div>
                )}
                {i === tambreAppointments.length - 1 && (
                  <div
                    className="mt-2 text-[11px] italic"
                    style={{ fontFamily: 'var(--font-cormorant), serif', color: 'var(--recovery)' }}
                  >
                    Retrieval day ✦ — the whole reason you came.
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Med schedule */}
      <div>
        <div
          className="text-[10px] tracking-[2px] uppercase mb-6 pb-2 border-b"
          style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--recovery)', borderColor: 'var(--dust)' }}
        >
          Medication Schedule
        </div>

        {/* Alert */}
        <div className="protocol-bar mb-6">
          <strong style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--recovery)' }}>
            Daily reminder — 10pm
          </strong>
          <br />
          Set a recurring alarm called "meds" starting {medSchedule.startDate} through {medSchedule.endDate}. Take between 9–11pm. Do not vary the time more than an hour.
        </div>

        <div
          className="grid gap-px"
          style={{ gridTemplateColumns: '1fr 1fr', background: 'var(--dust)' }}
        >
          {medSchedule.medications.map((med) => (
            <div
              key={med.name}
              className="px-5 py-4"
              style={{ background: 'var(--cream)' }}
            >
              <div
                className="text-xl font-normal mb-1"
                style={{ fontFamily: 'var(--font-cormorant), serif', color: 'var(--ink)' }}
              >
                {med.name}
              </div>
              <div
                className="text-[10px] tracking-[1px] uppercase"
                style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
              >
                {med.dose} · {med.timing}
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex justify-between items-center py-4 border-t mt-px"
          style={{ borderColor: 'var(--dust)' }}
        >
          <div>
            <div
              className="text-[9px] tracking-[2px] uppercase"
              style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
            >
              Start
            </div>
            <div
              className="text-lg"
              style={{ fontFamily: 'var(--font-cormorant), serif', color: 'var(--ink)' }}
            >
              {medSchedule.startDate}
            </div>
          </div>
          <div
            className="text-[10px] tracking-[1px] uppercase"
            style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--recovery)' }}
          >
            → every night 10pm →
          </div>
          <div className="text-right">
            <div
              className="text-[9px] tracking-[2px] uppercase"
              style={{ fontFamily: 'var(--font-dm-mono), monospace', color: 'var(--muted)' }}
            >
              End
            </div>
            <div
              className="text-lg"
              style={{ fontFamily: 'var(--font-cormorant), serif', color: 'var(--ink)' }}
            >
              {medSchedule.endDate}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
