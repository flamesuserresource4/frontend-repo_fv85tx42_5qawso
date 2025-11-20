function Collection() {
  const products = [
    {
      name: "MS-01 Black / Steel",
      price: "$249",
      specs: "40mm • 100m • Sapphire Coating",
    },
    {
      name: "MS-01 Silver / Steel",
      price: "$249",
      specs: "40mm • 100m • Sapphire Coating",
    },
    {
      name: "MS-01 Black / Rubber",
      price: "$219",
      specs: "40mm • 100m • Sapphire Coating",
    },
  ];

  return (
    <section id="collection" className="bg-black text-zinc-100">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">The Collection</h2>
          <a href="#" className="text-sm text-zinc-400 hover:text-white">View all</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.name} className="group rounded-xl border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 p-4">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0deg,transparent_60deg)]" />
                <div className="absolute inset-0 m-6 rounded-lg border border-white/10" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium">{p.name}</h3>
                  <p className="text-xs text-zinc-400 mt-1">{p.specs}</p>
                </div>
                <div className="text-sm font-semibold">{p.price}</div>
              </div>
              <button className="mt-4 w-full rounded-md border border-white/10 bg-white/5 py-2 text-sm text-zinc-100 hover:bg-white/10 transition-colors">Add to bag</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collection;
