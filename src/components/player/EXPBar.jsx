import { motion } from 'framer-motion';

export default function EXPBar({ value, max }) {
  const pct = Math.min(100, (value / max) * 100);
  const full = pct >= 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs text-text/70">
        <span>EXP</span>
        <span>
          {value} / {max}
        </span>
      </div>
      <div className={`h-3 overflow-hidden rounded-full bg-black/40 ${full ? 'animate-pulseGlow' : ''}`}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-arcane to-neon shadow-neon"
        />
      </div>
    </div>
  );
}
