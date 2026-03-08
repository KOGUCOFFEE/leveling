import { useState } from 'react';
import { motion } from 'framer-motion';
import AIChatPanel from '../../components/ai/AIChatPanel';
import PlayerCard from '../../components/player/PlayerCard';
import QuestCard from '../../components/quests/QuestCard';
import Sidebar from '../../components/sidebar/Sidebar';
import RewardCard from '../../components/shop/RewardCard';
import StatRadarChart from '../../components/stats/StatRadarChart';
import AchievementToast from '../../components/ui/AchievementToast';
import { player, prompts, quests, rewards, stats } from '../../data';

export default function DashboardPage() {
  const [toast, setToast] = useState(false);

  const onCompleteQuest = (quest) => {
    setToast(true);
    setTimeout(() => setToast(false), 1800);
  };

  return (
    <div className="hud-grid min-h-screen bg-abyss p-3 pb-20 text-text md:p-4">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-[88px_1fr_320px]">
        <Sidebar />

        <main className="space-y-4">
          <PlayerCard player={player} />

          <section className="glass rounded-2xl p-4">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-text/70">Daily Quests</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {quests.map((quest) => (
                <QuestCard key={quest.id} quest={quest} onComplete={() => onCompleteQuest(quest)} />
              ))}
            </div>
          </section>

          <section className="glass rounded-2xl p-4">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-text/70">Reward Shop</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {rewards.map((reward) => (
                <RewardCard key={reward.id} reward={reward} />
              ))}
            </div>
          </section>
        </main>

        <motion.aside initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
          <StatRadarChart stats={stats} />
          <AIChatPanel prompts={prompts} />
        </motion.aside>
      </div>

      <AchievementToast show={toast} message="Quest Completed +50 EXP" />
    </div>
  );
}
