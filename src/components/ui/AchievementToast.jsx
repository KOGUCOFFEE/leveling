import { AnimatePresence, motion } from 'framer-motion';

export default function AchievementToast({ show, message }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          className="fixed right-4 top-4 z-50 rounded-lg border border-neon/40 bg-panel px-4 py-3 text-sm shadow-neon"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
