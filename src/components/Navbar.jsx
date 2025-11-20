import { Menu, ShoppingCart } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-sm bg-gradient-to-br from-zinc-300 to-zinc-500 shadow-inner" />
          <span className="text-sm uppercase tracking-[0.35em] text-zinc-200">Modern Steel Co.</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm" href="#collection">Collection</a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm" href="#engineering">Engineering</a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm" href="#purpose">Purpose</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-100 hover:bg-white/10 transition-colors">
            <ShoppingCart size={16} />
            Shop
          </button>
          <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 text-zinc-200">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
