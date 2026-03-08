export default function StatRadarChart({ stats }) {
  const center = 90;
  const radius = 70;
  const points = stats
    .map((stat, i) => {
      const angle = (Math.PI * 2 * i) / stats.length - Math.PI / 2;
      const r = (stat.level / 100) * radius;
      return `${center + Math.cos(angle) * r},${center + Math.sin(angle) * r}`;
    })
    .join(' ');

  return (
    <div className="glass rounded-2xl p-4">
      <h3 className="mb-3 text-sm font-semibold">Life Radar</h3>
      <svg viewBox="0 0 180 180" className="mx-auto w-full max-w-[240px]">
        <circle cx="90" cy="90" r="70" fill="none" stroke="rgba(255,255,255,0.15)" />
        <polygon points={points} fill="rgba(108,99,255,0.28)" stroke="#00FFD1" strokeWidth="2" />
      </svg>
      <div className="mt-4 space-y-2">
        {stats.map((s) => (
          <div key={s.label} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>{s.label}</span>
              <span>{s.level}</span>
            </div>
            <div className="h-2 rounded-full bg-black/40">
              <div className={`h-full rounded-full ${s.color}`} style={{ width: `${s.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
