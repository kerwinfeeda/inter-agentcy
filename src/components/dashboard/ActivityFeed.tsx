interface ActivityItem {
  text: string;
  time: string;
}

interface ActivityFeedProps {
  items: ActivityItem[];
  title?: string;
}

export default function ActivityFeed({ items, title = "Recent Activity" }: ActivityFeedProps) {
  return (
    <div className="card rounded-xl p-6">
      <h2 className="font-semibold text-sm mb-4">{title}</h2>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex gap-3">
            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
            <div>
              <p className="text-sm text-foreground-muted">{item.text}</p>
              <p className="text-xs text-foreground-dim">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
