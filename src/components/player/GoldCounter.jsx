import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function GoldCounter({ value }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.8 });
    return () => controls.stop();
  }, [count, value]);

  return (
    <div className="flex items-center gap-2 text-gold">
      <span className="text-lg">🪙</span>
      <motion.span className="font-semibold">{rounded}</motion.span>
    </div>
  );
}
