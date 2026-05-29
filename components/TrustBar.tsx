const items = [
  'Kalamazoo, MI — locally owned',
  'Owner does every single job',
  'thomas@hoopersgreenthumb.com',
  'Residential specialists',
]

export default function TrustBar() {
  return (
    <div className="bg-forest border-y border-gold/20 py-4 px-[5%]">
      <div className="flex justify-center items-center gap-x-12 gap-y-2 flex-wrap">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2.5 font-display text-[0.87rem] font-medium text-cream">
            <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
