function Purpose() {
  return (
    <section id="purpose" className="bg-black text-zinc-200">
      <div className="mx-auto max-w-5xl px-4 py-20">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-950 to-zinc-900 p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold text-zinc-50">Premium look. Real-world price.</h3>
              <p className="mt-4 text-zinc-400">
                Watches under $300 shouldn’t look like knockoffs. Our design language is clean, modern, and intentional — engineered surfaces, not flashy tricks. Built to go from lecture hall to gym to a night out without feeling out of place.
              </p>
              <p className="mt-4 text-zinc-400">
                Every detail is chosen to read as premium: integrated case geometry, tight tolerances, brushed steel with subtle polish. It looks right on wrist. And it stays honest on price.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex items-center justify-between border-b border-white/10 py-3"><span>Case</span><span className="text-zinc-400">316L Stainless</span></li>
              <li className="flex items-center justify-between border-b border-white/10 py-3"><span>Crystal</span><span className="text-zinc-400">Sapphire Coating</span></li>
              <li className="flex items-center justify-between border-b border-white/10 py-3"><span>Water Resistance</span><span className="text-zinc-400">100 meters</span></li>
              <li className="flex items-center justify-between border-b border-white/10 py-3"><span>Movement</span><span className="text-zinc-400">Quartz</span></li>
              <li className="flex items-center justify-between py-3"><span>Bracelet</span><span className="text-zinc-400">Steel / Rubber</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Purpose;
