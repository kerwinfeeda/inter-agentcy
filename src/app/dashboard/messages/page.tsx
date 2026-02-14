"use client";

import { useState } from "react";
import { Plus, Send } from "lucide-react";

interface Message {
  from: string;
  text: string;
  time: string;
  isMe: boolean;
}

interface Conversation {
  id: number;
  name: string;
  role: string;
  lastMessage: string;
  time: string;
  unread: number;
  messages: Message[];
}

const conversations: Conversation[] = [
  {
    id: 1, name: "Marc Degryse", role: "Club Brugge — Sporting Dir.", lastMessage: "We can increase the offer to €4.2M", time: "25m ago", unread: 2,
    messages: [
      { from: "Marc Degryse", text: "Hi Kerwin, we&apos;ve reviewed Emmanuel Osei&apos;s profile in detail.", time: "10:15 AM", isMe: false },
      { from: "Me", text: "Great to hear. What are your thoughts on the valuation?", time: "10:22 AM", isMe: true },
      { from: "Marc Degryse", text: "We think €3.8M is fair given his age and contract situation.", time: "10:30 AM", isMe: false },
      { from: "Me", text: "I appreciate the interest but we value him closer to €4.5M given recent form.", time: "10:45 AM", isMe: true },
      { from: "Marc Degryse", text: "We can increase the offer to €4.2M with performance bonuses.", time: "11:02 AM", isMe: false },
    ],
  },
  {
    id: 2, name: "Emmanuel Osei", role: "Player — FC Porto", lastMessage: "Thanks for the update, looking forward to it", time: "2h ago", unread: 0,
    messages: [
      { from: "Me", text: "Emmanuel, Club Brugge have come back with an improved offer.", time: "9:00 AM", isMe: true },
      { from: "Emmanuel Osei", text: "That sounds promising! What are the terms?", time: "9:15 AM", isMe: false },
      { from: "Me", text: "€4.2M transfer fee with performance bonuses. 4-year contract.", time: "9:20 AM", isMe: true },
      { from: "Emmanuel Osei", text: "Thanks for the update, looking forward to it", time: "9:30 AM", isMe: false },
    ],
  },
  {
    id: 3, name: "David Weir", role: "Brighton — Head of Recruitment", lastMessage: "Medical is booked for Thursday 9AM", time: "5h ago", unread: 1,
    messages: [
      { from: "David Weir", text: "Youssef El-Hadj has passed our initial assessment.", time: "8:00 AM", isMe: false },
      { from: "Me", text: "Excellent news. When can we schedule the medical?", time: "8:10 AM", isMe: true },
      { from: "David Weir", text: "Medical is booked for Thursday 9AM at the Amex.", time: "8:25 AM", isMe: false },
    ],
  },
  {
    id: 4, name: "Amina Okafor", role: "Scout — West Africa", lastMessage: "I have a new prospect from the U20 tournament", time: "1d ago", unread: 0,
    messages: [
      { from: "Amina Okafor", text: "Hi Kerwin! I spotted an incredible CDM at the U20 AFCON.", time: "Yesterday", isMe: false },
      { from: "Me", text: "Tell me more — what stood out?", time: "Yesterday", isMe: true },
      { from: "Amina Okafor", text: "I have a new prospect from the U20 tournament. Sending the report now.", time: "Yesterday", isMe: false },
    ],
  },
  {
    id: 5, name: "Carlos Mendes", role: "Player — Vitória SC", lastMessage: "Any news on the AEK Athens interest?", time: "2d ago", unread: 0,
    messages: [
      { from: "Carlos Mendes", text: "Hey Kerwin, just checking in on my situation.", time: "2d ago", isMe: false },
      { from: "Me", text: "I spoke with AEK Athens yesterday. They&apos;re keen but working on budget.", time: "2d ago", isMe: true },
      { from: "Carlos Mendes", text: "Any news on the AEK Athens interest?", time: "2d ago", isMe: false },
    ],
  },
];

export default function MessagesPage() {
  const [selectedId, setSelectedId] = useState(1);
  const selected = conversations.find((c) => c.id === selectedId)!;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Messages</h1>
          <p className="text-sm text-foreground-muted mt-1">{conversations.length} conversations</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg gradient-steel-btn text-sm font-medium text-white">
          <Plus className="w-4 h-4" /> New Message
        </button>
      </div>

      <div className="card rounded-xl overflow-hidden flex h-[calc(100vh-220px)]">
        {/* Conversation List */}
        <div className="w-80 border-r border-border flex-shrink-0 overflow-y-auto">
          {conversations.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedId(c.id)}
              className={`w-full text-left p-4 border-b border-border transition-colors ${
                selectedId === c.id ? "bg-background-elevated" : "hover:bg-background-elevated/50"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold text-accent flex-shrink-0">
                  {c.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium truncate">{c.name}</p>
                    <span className="text-[10px] text-foreground-dim flex-shrink-0">{c.time}</span>
                  </div>
                  <p className="text-xs text-foreground-dim">{c.role}</p>
                  <p className="text-xs text-foreground-muted truncate mt-1">{c.lastMessage}</p>
                </div>
                {c.unread > 0 && (
                  <span className="w-5 h-5 bg-accent rounded-full text-[10px] font-bold flex items-center justify-center text-white flex-shrink-0">
                    {c.unread}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Message Thread */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-border">
            <p className="font-medium">{selected.name}</p>
            <p className="text-xs text-foreground-dim">{selected.role}</p>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {selected.messages.map((m, i) => (
              <div key={i} className={`flex ${m.isMe ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[70%] rounded-xl px-4 py-3 ${
                  m.isMe ? "bg-accent/20 text-foreground" : "bg-background-elevated text-foreground"
                }`}>
                  <p className="text-sm">{m.text}</p>
                  <p className="text-[10px] text-foreground-dim mt-1">{m.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-border">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 bg-background-elevated border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-foreground-dim focus:outline-none focus:border-border-light"
              />
              <button className="px-4 py-2.5 rounded-lg gradient-steel-btn text-white">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
