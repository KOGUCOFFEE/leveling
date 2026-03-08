export const player = {
  name: 'AstraNova',
  role: 'WARRIOR',
  level: 12,
  exp: 720,
  expMax: 1000,
  gold: 1540,
  avatar: '🛡️',
};

export const quests = [
  { id: 1, name: 'Morning Deep Work Sprint', difficulty: 3, exp: 120, gold: 40 },
  { id: 2, name: 'Workout + Mobility Session', difficulty: 2, exp: 90, gold: 25 },
  { id: 3, name: 'Read 20 Pages', difficulty: 1, exp: 50, gold: 15 },
  { id: 4, name: 'No-Distraction Evening Review', difficulty: 4, exp: 180, gold: 60 },
];

export const stats = [
  { label: 'Life', level: 68, color: 'bg-arcane' },
  { label: 'Physical', level: 74, color: 'bg-neon' },
  { label: 'Spiritual', level: 56, color: 'bg-indigo-400' },
  { label: 'Relationship', level: 62, color: 'bg-pink-400' },
  { label: 'Work', level: 81, color: 'bg-gold' },
  { label: 'Education', level: 77, color: 'bg-cyan-400' },
];

export const rewards = [
  { id: 1, name: 'Watch Netflix', cost: 120 },
  { id: 2, name: 'Buy Snack', cost: 80 },
  { id: 3, name: 'Play Game', cost: 150 },
];

export const prompts = [
  'Analyze my productivity',
  'Suggest better daily quests',
  'What should I focus on this week?',
];
