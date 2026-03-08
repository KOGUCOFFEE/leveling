import StatRadarChart from '../../components/stats/StatRadarChart';
import { stats } from '../../data';

export default function StatsPage() {
  return <StatRadarChart stats={stats} />;
}
