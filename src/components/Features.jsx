function Features() {
  const items = [
    {
      title: "Integrated Case Geometry",
      text: "Clean lines, sharp transitions, and a seamless profile that reads premium on wrist.",
    },
    {
      title: "Everyday Proof",
      text: "100m water resistance, steel bracelet, and a sapphire-coated crystal for durability.",
    },
    {
      title: "Precision Finish",
      text: "Brushed and polished surfaces in balanced contrast — black and silver done right.",
    },
    {
      title: "No Fake-Lux Tax",
      text: "Direct pricing under $300. Looks right. Feels right. Priced for real life.",
    },
  ];

  return (
    <section id="engineering" className="bg-black text-zinc-200">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-50">Engineered for the day-to-day</h2>
            <p className="mt-4 text-zinc-400">Designed for class, gym, work, and nights out. Minimal. Serious. Reliable.</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {items.map((it) => (
                <div key={it.title} className="rounded-lg border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-medium text-zinc-100">{it.title}</p>
                  <p className="mt-2 text-sm text-zinc-400">{it.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(1200px_600px_at_30%_-10%,#ffffff20,transparent)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-48 w-48 rounded-full border-2 border-zinc-500/30" />
              <div className="absolute h-64 w-64 rounded-full border border-zinc-500/20" />
              <div className="absolute h-80 w-80 rounded-full border border-zinc-500/10" />
            </div>
            <div className="absolute bottom-4 right-4 text-xs text-zinc-500">Macro case profile</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
