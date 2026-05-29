export default function Footer() {
  return (
    <footer className="bg-[#030805] border-t border-gold/8 py-10 px-[5%]">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2 font-display font-bold text-cream">
          <span>🌿</span>
          Hooper&apos;s Green Thumb
        </div>
        <p className="text-muted text-[0.82rem] text-center">
          © {new Date().getFullYear()} Hooper&apos;s Green Thumb · Kalamazoo, MI ·{' '}
          <a
            href="mailto:thomas@hoopersgreenthumb.com"
            className="text-muted hover:text-gold transition-colors no-underline"
          >
            thomas@hoopersgreenthumb.com
          </a>
        </p>
      </div>
    </footer>
  )
}
