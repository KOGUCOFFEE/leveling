import { motion } from 'framer-motion';
import EXPBar from './EXPBar';
import GoldCounter from './GoldCounter';

export default function PlayerCard({ player }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass space-y-4 rounded-2xl p-5 shadow-glow"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="grid h-14 w-14 place-items-center rounded-xl bg-arcane/20 text-3xl">{player.avatar}</div>
          <div>
            <p className="text-lg font-semibold">{player.name}</p>
            <p className="text-xs text-text/60">LEVEL {player.level}</p>
          </div>
        </div>
        <div className="rounded-full border border-neon/40 px-4 py-2 text-sm font-semibold text-neon shadow-neon">
          LVL {player.level} {player.role}
        </div>
      </div>

      <EXPBar value={player.exp} max={player.expMax} />
      <GoldCounter value={player.gold} />
    </motion.section>
  );
}
