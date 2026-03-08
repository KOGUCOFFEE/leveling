import { motion } from 'framer-motion';

export default function RewardCard({ reward }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(245,197,66,0.35)' }}
      className="glass rounded-xl border border-gold/40 p-4"
    >
      <p className="font-semibold">{reward.name}</p>
      <p className="mt-2 text-sm text-gold">{reward.cost} Gold</p>
      <button className="mt-3 rounded-md bg-gold/90 px-3 py-2 text-xs font-semibold text-black">Redeem</button>
    </motion.div>
  );
}
