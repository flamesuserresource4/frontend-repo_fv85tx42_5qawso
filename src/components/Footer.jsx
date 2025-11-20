function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs text-zinc-500">© {new Date().getFullYear()} Modern Steel Co.</p>
        <nav className="flex items-center gap-6 text-xs text-zinc-400">
          <a href="#" className="hover:text-zinc-100">Terms</a>
          <a href="#" className="hover:text-zinc-100">Privacy</a>
          <a href="#" className="hover:text-zinc-100">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
