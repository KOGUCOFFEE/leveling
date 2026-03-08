/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        abyss: '#0D0D12',
        panel: '#1B1B22',
        arcane: '#6C63FF',
        neon: '#00FFD1',
        gold: '#F5C542',
        danger: '#FF4D4D',
        text: '#EAEAF0',
      },
      boxShadow: {
        glow: '0 0 20px rgba(108, 99, 255, 0.45)',
        neon: '0 0 18px rgba(0, 255, 209, 0.4)',
        gold: '0 0 18px rgba(245, 197, 66, 0.35)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 12px rgba(108, 99, 255, 0.25)' },
          '50%': { boxShadow: '0 0 24px rgba(0, 255, 209, 0.65)' },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
