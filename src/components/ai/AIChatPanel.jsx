export default function AIChatPanel({ prompts }) {
  return (
    <section className="glass rounded-2xl p-4">
      <h3 className="mb-3 text-sm font-semibold">AI Assistant</h3>
      <div className="mb-3 rounded-lg bg-black/30 p-3 text-sm text-text/80">
        Welcome back, hero. Need strategy for your next productivity streak?
      </div>
      <div className="space-y-2">
        {prompts.map((prompt) => (
          <button
            key={prompt}
            className="block w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-left text-xs hover:border-arcane/60"
          >
            {prompt}
          </button>
        ))}
      </div>
      <div className="mt-3 rounded-lg border border-white/10 px-3 py-2 text-xs text-text/50">Type your message...</div>
    </section>
  );
}
