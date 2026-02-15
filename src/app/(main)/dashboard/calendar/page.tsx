"use client";

import { useState } from "react";
import { Clock, MapPin, Users, AlertTriangle } from "lucide-react";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

type EventType = "transfer" | "contract" | "meeting" | "deadline";

interface CalEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  type: EventType;
  location?: string;
  parties?: string;
  urgent?: boolean;
}

const events: CalEvent[] = [
  { id: 1, title: "Transfer Window Opens", date: "2026-01-01", time: "00:00", type: "deadline", urgent: true },
  { id: 2, title: "Emmanuel Osei — Club Brugge Negotiation", date: "2026-02-15", time: "10:00", type: "meeting", location: "Video Call", parties: "Club Brugge SD, Player Agent" },
  { id: 3, title: "Lucas Ferreira — Contract Expiry", date: "2026-03-30", time: "23:59", type: "contract", urgent: true },
  { id: 4, title: "Yusuf Kamara — Medical at FC Nordsjaelland", date: "2026-02-18", time: "09:00", type: "transfer", location: "Copenhagen, Denmark" },
  { id: 5, title: "James Mensah — Contract Review Meeting", date: "2026-02-20", time: "14:00", type: "meeting", location: "London Office", parties: "Player, Representative" },
  { id: 6, title: "Transfer Window Closes", date: "2026-02-28", time: "23:59", type: "deadline", urgent: true },
  { id: 7, title: "Ahmed Hassan — Galatasaray Due Diligence", date: "2026-02-22", time: "11:00", type: "transfer", parties: "Galatasaray Legal Team" },
  { id: 8, title: "FIFA Agent License Renewal Deadline", date: "2026-04-15", time: "23:59", type: "deadline", urgent: true },
  { id: 9, title: "João Silva — Brighton Loan Discussion", date: "2026-02-25", time: "15:30", type: "meeting", location: "Video Call", parties: "Brighton FC, Selling Club" },
  { id: 10, title: "Kwame Asante — Contract Signing", date: "2026-02-17", time: "16:00", type: "contract", location: "Accra, Ghana" },
  { id: 11, title: "Scouting Trip — West Africa U20 Tournament", date: "2026-03-05", time: "08:00", type: "meeting", location: "Lagos, Nigeria" },
  { id: 12, title: "Daniel Adjei — Work Permit Application Deadline", date: "2026-02-26", time: "17:00", type: "deadline", urgent: true },
];

const typeColors: Record<EventType, string> = {
  transfer: "bg-accent/20 text-accent-light",
  contract: "bg-success/20 text-success",
  meeting: "bg-blue-500/20 text-blue-400",
  deadline: "bg-danger/20 text-danger",
};

const typeLabels: Record<EventType, string> = { transfer: "Transfer", contract: "Contract", meeting: "Meeting", deadline: "Deadline" };

export default function CalendarPage() {
  const [filter, setFilter] = useState<EventType | "all">("all");

  const filtered = filter === "all" ? events : events.filter((e) => e.type === filter);
  const upcoming = [...filtered].sort((a, b) => a.date.localeCompare(b.date));
  const urgentCount = events.filter((e) => e.urgent).length;

  // Generate calendar grid for Feb 2026
  const daysInMonth = 28;
  const firstDayOffset = 6; // Feb 1 2026 is Sunday → offset 6 in Mon-start grid
  const calDays = Array.from({ length: 42 }, (_, i) => {
    const day = i - firstDayOffset + 1;
    return day > 0 && day <= daysInMonth ? day : null;
  });

  const eventsOnDay = (day: number) => events.filter((e) => {
    const d = new Date(e.date);
    return d.getMonth() === 1 && d.getDate() === day;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Calendar</h1>
          <p className="text-foreground-muted text-sm">Transfer windows, contract dates, and meetings</p>
        </div>
        <div className="flex items-center gap-2">
          {urgentCount > 0 && (
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-danger/10 text-danger text-xs font-medium">
              <AlertTriangle className="w-3.5 h-3.5" /> {urgentCount} urgent
            </span>
          )}
        </div>
      </div>

      {/* Mini Calendar */}
      <div className="card p-6">
        <h3 className="text-sm font-semibold text-foreground-dim mb-4">FEBRUARY 2026</h3>
        <div className="grid grid-cols-7 gap-1">
          {days.map((d) => (
            <div key={d} className="text-center text-xs text-foreground-dim py-1">{d}</div>
          ))}
          {calDays.map((day, i) => (
            <div key={i} className={`text-center py-2 rounded-lg text-sm ${day ? "text-foreground-muted hover:bg-background-elevated cursor-pointer" : ""} ${day === 14 ? "gradient-steel-btn text-white" : ""}`}>
              {day || ""}
              {day && eventsOnDay(day).length > 0 && (
                <div className="flex justify-center gap-0.5 mt-0.5">
                  {eventsOnDay(day).slice(0, 3).map((e) => (
                    <div key={e.id} className={`w-1 h-1 rounded-full ${e.type === "deadline" ? "bg-danger" : e.type === "transfer" ? "bg-accent" : e.type === "contract" ? "bg-success" : "bg-blue-400"}`} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        {(["all", "transfer", "contract", "meeting", "deadline"] as const).map((t) => (
          <button key={t} onClick={() => setFilter(t)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${filter === t ? "gradient-steel-btn text-white" : "bg-background-elevated text-foreground-muted hover:text-white"}`}>
            {t === "all" ? "All Events" : typeLabels[t]}
          </button>
        ))}
      </div>

      {/* Event List */}
      <div className="space-y-3">
        {upcoming.map((event) => (
          <div key={event.id} className={`card p-5 card-hover ${event.urgent ? "border-danger/20" : ""}`}>
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="text-center flex-shrink-0 w-12">
                  <div className="text-xs text-foreground-dim">{months[new Date(event.date).getMonth()]}</div>
                  <div className="text-xl font-bold">{new Date(event.date).getDate()}</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-sm">{event.title}</h3>
                    {event.urgent && <AlertTriangle className="w-3.5 h-3.5 text-danger" />}
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-foreground-dim">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {event.time}</span>
                    {event.location && <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {event.location}</span>}
                    {event.parties && <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {event.parties}</span>}
                  </div>
                </div>
              </div>
              <span className={`px-2 py-0.5 rounded text-xs font-medium ${typeColors[event.type]}`}>
                {typeLabels[event.type]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
