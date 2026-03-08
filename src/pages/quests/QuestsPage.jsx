import QuestCard from '../../components/quests/QuestCard';
import { quests } from '../../data';

export default function QuestsPage() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {quests.map((quest) => (
        <QuestCard key={quest.id} quest={quest} onComplete={() => {}} />
      ))}
    </div>
  );
}
