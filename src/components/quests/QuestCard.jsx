import { motion } from 'framer-motion';

export default function QuestCard({ quest, onComplete }) {
  return (
    <motion.article
      whileHover={{ y: -4, boxShadow: '0 0 18px rgba(0,255,209,0.35)' }}
      className="glass rounded-xl p-4"
    >
      <h3 className="font-semibold">{quest.name}</h3>
      <p className="mt-1 text-sm text-text/60">Difficulty: {'★'.repeat(quest.difficulty)}</p>
      <div className="mt-3 flex justify-between text-sm">
        <span className="text-neon">+{quest.exp} EXP</span>
        <span className="text-gold">+{quest.gold} Gold</span>
      </div>
      <div className="mt-4 flex gap-2">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onComplete}
          className="rounded-lg bg-gradient-to-r from-arcane to-neon px-3 py-2 text-xs font-semibold text-black"
        >
          Complete
        </motion.button>
        <button className="rounded-lg border border-danger/50 px-3 py-2 text-xs text-danger">Fail</button>
      </div>
    </motion.article>
  );
}
