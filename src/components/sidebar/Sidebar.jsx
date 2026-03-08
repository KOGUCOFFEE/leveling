import { motion } from 'framer-motion';

const items = [
  ['Dashboard', '🏠'],
  ['Quests', '🗡️'],
  ['Stats', '📊'],
  ['Shop', '🛒'],
  ['Finance', '💰'],
  ['Inventory', '🎒'],
  ['Knowledge Vault', '📚'],
  ['AI Assistant', '🤖'],
  ['Settings', '⚙️'],
];

export default function Sidebar() {
  return (
    <aside className="glass fixed bottom-0 left-0 right-0 z-20 flex justify-around p-2 md:relative md:h-[calc(100vh-2rem)] md:w-20 md:flex-col md:rounded-2xl md:p-3">
      {items.map(([label, icon], index) => (
        <motion.button
          key={label}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ scale: 1.08, boxShadow: '0 0 16px rgba(108,99,255,0.65)' }}
          whileTap={{ scale: 0.94 }}
          className="group relative rounded-xl p-2 text-xl"
          aria-label={label}
        >
          <span>{icon}</span>
          <span className="pointer-events-none absolute left-full top-1/2 hidden -translate-y-1/2 rounded-md bg-panel px-2 py-1 text-xs md:group-hover:block">
            {label}
          </span>
        </motion.button>
      ))}
    </aside>
  );
}
