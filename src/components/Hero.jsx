import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-[85vh] bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 h-full flex items-end pb-16">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-400 mb-4">Modern Daily Watch</p>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-zinc-50">
            Modern Steel Co.
          </h1>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            Clean, engineered design built for everyday wear. Premium look — without the luxury markup.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#collection" className="inline-flex items-center rounded-md bg-zinc-100 px-5 py-3 text-sm font-medium text-black hover:bg-white transition-colors">
              Explore Collection
            </a>
            <a href="#purpose" className="inline-flex items-center rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-zinc-100 hover:bg-white/10 transition-colors">
              Why It Exists
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
