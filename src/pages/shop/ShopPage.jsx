import RewardCard from '../../components/shop/RewardCard';
import { rewards } from '../../data';

export default function ShopPage() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {rewards.map((reward) => (
        <RewardCard key={reward.id} reward={reward} />
      ))}
    </div>
  );
}
